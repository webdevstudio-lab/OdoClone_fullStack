import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import {
  Eye,
  EyeOff,
  ArrowRight,
  Fingerprint,
  Loader2,
  Lock,
  Mail,
  User,
} from "lucide-react";

const ForgotPassword = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [fieldErrors, setFieldErrors] = useState({
    email: "",
  });

  const [touchedFields, setTouchedFields] = useState({
    email: false,
  });

  const handleInputChange = (e) => {};
  const handleBlur = (e) => {};
  const isValidForm = () => {};

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center p-6 justify-center">
      <div className="w-full max-w-md ">
        {/* Header of Page */}
        <div className="text-center mb-8 p-4 rounded-md flex flex-col gap-4 items-center">
          <div className="w-12 h-12 bg-gradient-to-t from-indigo-600 to to-indigo-700 rounded-md flex items-center justify-center">
            <Fingerprint className="text-white" size={30} />{" "}
          </div>

          <div className="flex flex-col items-center justify-center gap-4">
            <h1 className="text-4xl text-indigo-600 font-bold">Mot de Passe</h1>
            <p className="text-gray-600 text-sm font-semibold">
              Merci de renseigner votre adresse email pour recevoir un lien de
              reinitialisation de votre mot de passe
            </p>
          </div>
        </div>

        {/* Form */}

        <div className="flex flex-col gap-6">
          {/* Email */}
          <div>
            <label for="email" class="block text-lg font-bold text-gray-900">
              Adresse email
            </label>
            <div class="mt-2 relative">
              <Mail
                className="absolute text-slate-600 top-1/2 left-3 transform -translate-y-1/2"
                size={20}
              />
              <input
                type="email"
                name="email"
                required
                onChange={handleInputChange}
                onBlur={handleBlur}
                value={formData.email}
                placeholder="exemple@email.com"
                className={`pl-12 h-12 w-full rounded-md bg-white px-3 py-1.5 text-lg text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-lg
                ${
                  fieldErrors.email && touchedFields.email
                    ? "border-red-500 focus:border-red-500"
                    : "border-gray-300 "
                }`}
              />
            </div>
            {fieldErrors.email && touchedFields.email && (
              <p className="text-red-500 text-sm mt-1">{fieldErrors.email}</p>
            )}
          </div>

          {/* Button Submit */}
          <div>
            <button
              onClick={handleSubmit}
              disabled={loading}
              className="flex cursor-pointer w-full test-lg h-12 items-center justify-center rounded-md bg-indigo-600 px-3 py-1.5  font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:bg-indigo-300"
            >
              {loading ? (
                <div className="flex flex-row gap-2">
                  <Loader2 className="animate-spin" size={20} />
                  <p>Restaurer mon mot de passe</p>
                </div>
              ) : (
                <div className="flex flex-row gap-2">
                  <p>Restaurer mon mot de passe</p>
                  <ArrowRight className="w-6 h-6 font-bold" size={20} />
                </div>
              )}
            </button>
          </div>
        </div>

        {/* Footer */}

        <div className="flex flex-row items-center justify-center mt-6 space-x-1  ">
          <p className="text-slate-600 text-xs font-semibold">
            vous vous souvenez de votre mot de passe ?{" "}
          </p>
          <a
            href="/login"
            className="text-indigo-600 font-semibold hover:underline"
          >
            Se connecter
          </a>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
