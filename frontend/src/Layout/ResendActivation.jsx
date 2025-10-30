import { useState, useEffect } from "react";

const ResendActivation = ({ onResend }) => {
  const [timeLeft, setTimeLeft] = useState(0); // en secondes

  // Récupérer le temps restant depuis le localStorage au chargement
  useEffect(() => {
    const savedEndTime = localStorage.getItem("resendActivationEndTime");
    if (savedEndTime) {
      const endTime = parseInt(savedEndTime);
      const now = Math.floor(Date.now() / 1000);
      const remaining = Math.max(0, endTime - now);

      if (remaining > 0) {
        setTimeLeft(remaining);
      } else {
        // Si le temps est écoulé, nettoyer le localStorage
        localStorage.removeItem("resendActivationEndTime");
      }
    }
  }, []);

  const handleResend = () => {
    // Appelle la fonction d'envoi d'email
    onResend();

    // Démarre le compte à rebours de 2 minutes
    const endTime = Math.floor(Date.now() / 1000) + 300;
    localStorage.setItem("resendActivationEndTime", endTime.toString());
    setTimeLeft(300);
  };

  // Gère le minuteur
  useEffect(() => {
    if (timeLeft <= 0) {
      // Quand le temps est écoulé, nettoyer le localStorage
      localStorage.removeItem("resendActivationEndTime");
      return;
    }

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        const newTime = prev - 1;
        if (newTime <= 0) {
          localStorage.removeItem("resendActivationEndTime");
          return 0;
        }
        return newTime;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft]);

  // Format d'affichage : mm:ss
  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  };

  return (
    <button
      className="text-md font-bold hover:underline text-indigo-600 cursor-pointer"
      onClick={handleResend}
      disabled={timeLeft > 0}
    >
      {timeLeft > 0
        ? `Nouveau code dans : ${formatTime(timeLeft)}`
        : "Renvoyer"}
    </button>
  );
};

export default ResendActivation;
