import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import {
  validateEmail,
  validatePassword,
  validateName,
  validateConfirmPassword,
} from "../../utils/helper";
import { toast } from "react-hot-toast";
import { register } from "../../utils/apiPaths";
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

const SignUp = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { mutate: registerMutation, isPending: loading } = useMutation({
    mutationFn: register,
    onSuccess: (data) => {
      toast.success(data.data.message);
      navigate(`/activate/${data.data.user.id}`, { replace: true });
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
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [touchedFields, setTouchedFields] = useState({
    name: false,
    email: false,
    password: false,
    confirmPassword: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Validate field on input change
    if (touchedFields[name]) {
      const newFieldErrors = { ...fieldErrors };
      if (name === "userName") {
        newFieldErrors.name = validateName(value);
      } else if (name === "email") {
        newFieldErrors.email = validateEmail(value);
      } else if (name === "password") {
        newFieldErrors.password = validatePassword(value);
      } else if (name === "confirmPassword") {
        newFieldErrors.confirmPassword = validateConfirmPassword(
          formData.password,
          value
        );
      }
      setFieldErrors(newFieldErrors);
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouchedFields((prev) => ({ ...prev, [name]: true }));

    // Validate field on blur
    const newFieldErrors = { ...fieldErrors };
    if (name === "name") {
      newFieldErrors.name = validateName(formData.name);
    } else if (name === "email") {
      newFieldErrors.email = validateEmail(formData.email);
    } else if (name === "password") {
      newFieldErrors.password = validatePassword(formData.password);
    } else if (name === "confirmPassword") {
      newFieldErrors.confirmPassword = validateConfirmPassword(
        formData.password,
        formData.confirmPassword
      );
    }
    setFieldErrors(newFieldErrors);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    //validate fields befor submit
    const nameError = validateName(formData.name);
    const emailError = validateEmail(formData.email);
    const passwordError = validatePassword(formData.password);
    const confirmPasswordError = validateConfirmPassword(
      formData.password,
      formData.confirmPassword
    );

    if (emailError || passwordError || nameError || confirmPasswordError) {
      setFieldErrors({
        email: emailError,
        password: passwordError,
        name: nameError,
        confirmPassword: confirmPasswordError,
      });
      setTouchedFields({
        email: true,
        password: true,
        name: true,
        confirmPassword: true,
      });

      return;
    }

    registerMutation(formData);
  };
  return (
    <div className="min-h-screen w-full flex flex-col items-center p-6 justify-center">
      <div className="w-full max-w-md ">
        {/* Header of Page */}
        <div className="text-center mb-8 p-4 rounded-md flex flex-col gap-4 items-center">
          <div className="w-12 h-12 bg-linear-to-t from-indigo-500 to to-indigo-700 rounded-md flex items-center justify-center">
            <Fingerprint className="text-white" size={30} />{" "}
          </div>

          <div className="flex flex-col items-center justify-center gap-4">
            <h1 className="text-4xl text-indigo-600 font-bold">Inscription</h1>
            <p className="text-gray-600 text-xl font-semibold">
              Bienvenue Sur OdooClone
            </p>
          </div>
        </div>

        {/* Form */}

        <div className="flex flex-col gap-6">
          {/* Name */}
          <div>
            <label
              htmlFor="email"
              className="block text-lg font-bold text-gray-900"
            >
              Nom & Prénoms
            </label>
            <div className="mt-2 relative">
              <User
                className="absolute text-slate-600 top-1/2 left-3 transform -translate-y-1/2"
                size={20}
              />
              <input
                type="text"
                name="name"
                required
                onChange={handleInputChange}
                onBlur={handleBlur}
                value={formData.name}
                onKeyDown={(e) => e.key === "Enter" && handleSubmit(e)}
                placeholder="Entrez votre nom & prénoms"
                className={`pl-12 h-12 w-full rounded-md bg-white px-3 text-lg text-gray-900 border 
                  placeholder:text-gray-400 sm:text-lg focus:ring-2 focus:border-transparent outline-none transition-all
                ${
                  fieldErrors.name && touchedFields.name
                    ? "border-red-500 focus:ring-red-500 border-2"
                    : "border-gray-300 focus:ring-indigo-600"
                }`}
              />
            </div>
            {fieldErrors.name && touchedFields.name && (
              <p className="text-red-500 text-sm mt-1">{fieldErrors.name}</p>
            )}
          </div>

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
              <p className="text-red-500 text-sm mt-1">{fieldErrors.email}</p>
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
              <p className="text-red-500 text-sm mt-1">
                {fieldErrors.password}
              </p>
            )}
          </div>

          {/* Confirm Password */}
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="confirmPassword"
                className="block text-lg font-bold text-gray-900"
              >
                Confirmer le mot de passe
              </label>
            </div>
            <div className="mt-2 relative">
              <Lock
                className="absolute text-slate-600 top-1/2 left-3 transform -translate-y-1/2"
                size={20}
              />
              <input
                type={showPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="••••••••••••••"
                required
                onChange={handleInputChange}
                onBlur={handleBlur}
                value={formData.confirmPassword}
                className={`pl-12 h-12 w-full rounded-md bg-white px-3 text-lg text-gray-900 border 
                  placeholder:text-gray-400 sm:text-lg focus:ring-2 focus:border-transparent outline-none transition-all
                ${
                  fieldErrors.confirmPassword && touchedFields.confirmPassword
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
            {fieldErrors.confirmPassword && touchedFields.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">
                {fieldErrors.confirmPassword}
              </p>
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
                  <p>Inscription</p>
                </div>
              ) : (
                <div className="flex flex-row gap-2">
                  <p>Inscription </p>
                  <ArrowRight className="w-6 h-6 font-bold" size={20} />
                </div>
              )}
            </button>
          </div>
        </div>

        {/* Footer */}

        <div className="flex flex-row items-center justify-center mt-6 space-x-2  ">
          <p className="text-slate-600 font-semibold">
            Vous avez déja un compte ?{" "}
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

export default SignUp;
