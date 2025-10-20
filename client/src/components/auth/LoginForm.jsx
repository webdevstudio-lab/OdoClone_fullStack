import {
  Mail,
  Lock,
  EyeOff,
  Eye,
  ArrowRight,
  Loader2,
  OctagonX,
} from 'lucide-react';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import axios from 'axios';
import { BASE_PATH } from '../../main.jsx';

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setisLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const submitHandler = async e => {
    e.preventDefault();
    setisLoading(true);
    try {
      const { data } = await axios.post(
        `${BASE_PATH}/auth/sign-in`,
        {
          email,
          password,
        },
        {
          withCredentials: true,
        }
      );
      toast.success(data.message);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
      setError(error.response.data.message);
    } finally {
      setisLoading(false);
    }
  };

  return (
    <>
      <div className="space-y-4">
        {/* from */}
        <form onSubmit={submitHandler} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <div className="relative">
              <Mail className=" absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="email"
                id="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                placeholder="Entrez votre email"
                className="w-full pl-12 pr-12 py-2 border rounded-lg focus:ring-2 outline-none transition-all focus:border-transparent"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Mot de passe
            </label>
            <div className="relative">
              <Lock className="absolute  left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                placeholder="Entrez votre mot de passe"
                type={showPassword ? 'text' : 'password'}
                value={password}
                id="password"
                onChange={e => setPassword(e.target.value)}
                // required
                className="w-full  pl-12 pr-12 py-2 border rounded-lg focus:ring-2 outline-none transition-all focus:border-transparent"
              />
              <button
                type="button"
                className=" cursor-pointer absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors w-5 h-5"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          {/* Error/success message */}
          {error && (
            <div className=" p-3 bg-red-50 border border-red-200 rounded-lg duration-100 transition-opacity">
              <p className=" text-red-600 text-sm">
                {' '}
                <OctagonX className="w-5 h-5 inline-block" /> {error}
              </p>
            </div>
          )}

          {/* Submit button */}
          <button
            disabled={isLoading}
            type="submit"
            className="w-full  flex items-center justify-center space-x-1  bg-gradient-to-r from-blue-950 to-blue-800 text-white py-3 px-4 rounded-lg hover:bg-gray-800 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors group"
          >
            {isLoading ? (
              <Loader2 className="animate-spin w-5 h-5" />
            ) : (
              <>
                <span>Se connecter</span>
                <ArrowRight className=" w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </button>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
