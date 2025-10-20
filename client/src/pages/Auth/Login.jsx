import LoginForm from '../../components/auth/LoginForm';
import Logo from '../../components/layout/Logo';

const Login = () => {
  return (
    <>
      <div className="w-full">
        <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 ">
          <Logo />
          <div className="flex flex-col items-center mb-8 mt-5">
            <p className="text-blue-950 text-2xl font-bold items-center ">
              Connexion à votre compte
            </p>
            <p className="text-gray-500 text-sm  mt-2">
              Bienvenue Dans votre espace de travail , veuillez saisir vos
              identifiants pour vous connecter
            </p>
          </div>

          <LoginForm />

          <div className="mt-6 pt-4 border-t border-gray-200 text-center">
            <p className="my-4 text-center sm:text-left text-sm dark:text-[#f1f7feb5] ">
              Vous n&rsquo;avez pas de compte ?{' '}
              <button
                className="text-blue-600 hover:underline text-base cursor-pointer dark:text-[#f1f7feb5]"
                onClick={() => navigate('/signup')}
              >
                S'inscrire
              </button>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
