import { useState } from "react";
import { redirect, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { validateEmail, validatePassword } from "../../utils/helper";
import { useMutation } from "@tanstack/react-query";
import { login } from "../../utils/apiPaths";
import {
  Eye,
  EyeOff,
  ArrowRight,
  Fingerprint,
  Loader2,
  Lock,
  Mail,
  Info,
} from "lucide-react";
import Logo from "../../Layout/Logo";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const redirectUrl = location.state?.pathname || "/dashboard";

  const {
    mutate: loginMutation,
    isPending: loading,
    isError,
  } = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      if (!data.data.user.isVerify) {
        toast.error(
          "Votre compte n'est pas encore activé , nous vous avons envoyé un mail contenant le lien d'activation de votre compte"
        );
        navigate(`/activate/${data.data.user.id}`, { replace: true });
      } else {
        toast.success(data.data.message);
        navigate(redirectUrl, { replace: true });
      }
    },
    onError: (error) => {
      if (error.message === "Network Error") {
        toast.error("Impossible de se connecter au serveur!");
      } else {
        toast.error(error.message);
      }
    },
  });

  const [showPassword, setShowPassword] = useState(false);
  const [fieldErrors, setFieldErrors] = useState({
    email: "",
    password: "",
  });

  const [touchedFields, setTouchedFields] = useState({
    email: false,
    password: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Validate field on input change
    if (touchedFields[name]) {
      const newFieldErrors = { ...fieldErrors };
      if (name === "email") {
        newFieldErrors.email = validateEmail(value);
      } else if (name === "password") {
        newFieldErrors.password = validatePassword(value);
      }
      setFieldErrors(newFieldErrors);
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouchedFields((prev) => ({ ...prev, [name]: true }));

    // Validate field on blur
    const newFieldErrors = { ...fieldErrors };
    if (name === "email") {
      newFieldErrors.email = validateEmail(formData.email);
    } else if (name === "password") {
      newFieldErrors.password = validatePassword(formData.password);
    }
    setFieldErrors(newFieldErrors);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    //validate fields befor submit
    const emailError = validateEmail(formData.email);
    const passwordError = validatePassword(formData.password);

    if (emailError || passwordError) {
      setFieldErrors({
        email: emailError,
        password: passwordError,
      });
      setTouchedFields({
        email: true,
        password: true,
      });

      return;
    }

    loginMutation(formData);
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center p-6 justify-center">
      <div className="w-full max-w-md ">
        {/* Header of Page */}
        <div className="text-center mb-8 p-4 rounded-md flex flex-col gap-4 items-center">
          <Logo />

          <div className="flex flex-col items-center justify-center gap-4">
            <h1 className="text-4xl text-indigo-600 font-bold">Connexion</h1>
            <p className="text-gray-600 text-xl font-semibold">
              Bienvenue Sur OdooClone
            </p>
          </div>
        </div>

        {/* Form */}

        <div className="flex flex-col gap-6">
          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-lg font-bold text-gray-900"
            >
              Adresse email
            </label>
            <div className="mt-2 relative">
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
                className={`pl-12 h-12 w-full rounded-md bg-white px-3 text-lg text-gray-900 border 
                  placeholder:text-gray-400 sm:text-lg focus:ring-2 focus:border-transparent outline-none transition-all
                ${
                  fieldErrors.email && touchedFields.email
                    ? "border-red-500 focus:ring-red-500 border-2"
                    : "border-gray-300 focus:ring-indigo-600"
                }`}
              />
            </div>
            {fieldErrors.email && touchedFields.email && (
              <div className="text-red-500 text-sm mt-2 flex items-center gap-2">
                <Info size={16} />
                <p>{fieldErrors.email}</p>
              </div>
            )}
          </div>

          {/* Password */}
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-lg font-bold text-gray-900"
              >
                Mot de passe
              </label>
              <div className="text-sm">
                <a
                  href="/forgot-password"
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  Mot de passe oublié ?
                </a>
              </div>
            </div>
            <div className="mt-2 relative">
              <Lock
                className="absolute text-slate-600 top-1/2 left-3 transform -translate-y-1/2"
                size={20}
              />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="••••••••••••••"
                required
                onKeyDown={(e) => e.key === "Enter" && handleSubmit(e)}
                onChange={handleInputChange}
                onBlur={handleBlur}
                value={formData.password}
                className={`pl-12 h-12 w-full rounded-md bg-white px-3 text-lg text-gray-900 border 
                  placeholder:text-gray-400 sm:text-lg focus:ring-2 focus:border-transparent outline-none transition-all
                ${
                  fieldErrors.password && touchedFields.password
                    ? "border-red-500 focus:ring-red-500 border-2"
                    : "border-gray-300 focus:ring-indigo-600"
                }`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className=" cursor-pointer absolute top-1/2 right-4 transform -translate-y-1/2 text-slate-600"
              >
                {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
              </button>
            </div>
            {fieldErrors.password && touchedFields.password && (
              <div className="text-red-500 text-sm mt-2 flex items-center gap-2">
                <Info size={16} />
                <p>{fieldErrors.password}</p>
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
                  <p>Connexion</p>
                </div>
              ) : (
                <div className="flex flex-row gap-2">
                  <p>Connexion </p>
                  <ArrowRight className="w-6 h-6 font-bold" size={20} />
                </div>
              )}
            </button>
          </div>
        </div>

        {/* Footer */}

        <div className="flex flex-row items-center justify-center mt-6 space-x-2  ">
          <p className="text-slate-600 font-semibold">
            Vous n'avez pas de compte ?{" "}
          </p>
          <a
            href="/sign-up"
            className="text-indigo-600 font-semibold hover:underline"
          >
            S'inscrire
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
