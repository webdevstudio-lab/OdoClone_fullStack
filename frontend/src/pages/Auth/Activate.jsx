import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";

import { validateActivationCode } from "../../utils/helper";
import { toast } from "react-hot-toast";
import { activate } from "../../utils/apiPaths";
import {
  ArrowRight,
  Fingerprint,
  Loader2,
  Mail,
  ShieldCheck,
  Info,
} from "lucide-react";
import ResendActivation from "../../Layout/ResendActivation";

const Activate = () => {
  const navigate = useNavigate();
  const { mutate: activateMutation, isPending: loading } = useMutation({
    mutationFn: activate,
    onSuccess: (data) => {
      toast.success(data.data.message);
      navigate("/login", { replace: true });
    },
    onError: (error) => {
      if (error.message === "Network Error") {
        toast.error("Impossible de se connecter au serveur!");
      } else {
        toast.error(error.message);
      }
    },
  });

  const [formData, setFormData] = useState({
    code: "",
  });

  const [fieldErrors, setFieldErrors] = useState({
    code: "",
  });

  const [touchedFields, setTouchedFields] = useState({
    code: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Validate field on input change
    if (touchedFields[name]) {
      const newFieldErrors = { ...fieldErrors };
      if (name === "code") {
        newFieldErrors.code = validateActivationCode(value);
      }
      setFieldErrors(newFieldErrors);
    }
  };

  const handleResend = (e) => {
    toast.success("Un code de 6 chiffres vous a été envoye par mail");
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouchedFields((prev) => ({ ...prev, [name]: true }));

    // Validate field on blur
    const newFieldErrors = { ...fieldErrors };
    if (name === "code") {
      newFieldErrors.code = validateActivationCode(formData.code);
    }
    setFieldErrors(newFieldErrors);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //validate fields befor submit
    const codeError = validateActivationCode(formData.code);

    if (codeError) {
      setFieldErrors({
        code: codeError,
      });
      setTouchedFields({
        code: true,
      });

      return;
    }

    const code = formData.code;
    const userId = window.location.pathname.split("/")[2];
    activateMutation({ userId, code });
  };
  return (
    <>
      <div className="min-h-screen w-full flex flex-col items-center p-6 justify-center">
        <div className="w-full max-w-md ">
          {/* Header of Page */}
          <div className="text-center mb-8 p-4 rounded-md flex flex-col gap-4 items-center">
            <div className="w-12 h-12 bg-gradient-to-t from-indigo-600 to to-indigo-700 rounded-md flex items-center justify-center">
              <Fingerprint className="text-white" size={30} />{" "}
            </div>

            <div className="flex flex-col items-center justify-center gap-4">
              <h1 className="text-4xl text-indigo-600 font-bold">
                Activation du compte
              </h1>
              <p className="text-gray-600 text-sm font-medium bg-indigo-50 border border-indigo-300 py-2 px-4 rounded-md">
                Un mail contenant le code d'activation de 6 chiffres à été
                envoyer à votre adresse email, merci de consulter votre boite
                mail, pensez à verifier vos spams
              </p>
            </div>
          </div>

          {/* Form */}

          <div className="flex flex-col gap-6">
            {/* Email */}
            <div>
              <label
                htmlFor="code"
                className="block text-lg font-bold text-gray-900"
              >
                Code d'activation
              </label>
              <div className="mt-2 relative">
                <ShieldCheck
                  className="absolute text-slate-600 top-1/2 left-3 transform -translate-y-1/2"
                  size={20}
                />
                <input
                  type="text"
                  name="code"
                  required
                  maxLength={6}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  value={formData.code}
                  placeholder="Entrez le code d'activation"
                  className={`pl-12 h-12 w-full rounded-md bg-white px-3 py-1.5 text-lg text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-lg
                ${
                  fieldErrors.code && touchedFields.code
                    ? "border-red-500 focus:ring-red-500 border-2"
                    : "border-gray-300 focus:ring-indigo-600"
                }`}
                />
              </div>
              {fieldErrors.code && touchedFields.code && (
                <div className="text-red-500 text-sm mt-2 flex items-center gap-2">
                  <Info size={16} />
                  <p>{fieldErrors.code}</p>
                </div>
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
                    <p>Activer mon compte</p>
                  </div>
                ) : (
                  <div className="flex flex-row gap-2">
                    <p>Activer mon compte</p>
                    <ArrowRight className="w-6 h-6 font-bold" size={20} />
                  </div>
                )}
              </button>
            </div>
          </div>

          {/* Footer */}

          <div className="flex flex-row items-center justify-center mt-6 space-x-1  ">
            <p className="text-slate-600 text-sm font-semibold">
              vous n'avez pas reçu de code ?{" "}
            </p>
            <ResendActivation onResend={handleResend} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Activate;
