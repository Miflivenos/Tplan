import { LoginUserForm } from "../../features/auth/components/LoginUserForm";
import { Link } from "react-router-dom";

const LoginUserPage = () => {
    return (
        <div className="min-h-[85vh] flex items-center justify-center px-4">
           
            <div className="max-w-md w-full bg-[#0d1117] border border-gray-800/80 p-8 rounded-3xl shadow-2xl shadow-indigo-500/10 space-y-6">
                
                
                <div className="text-center space-y-2">
                    <h1 className="text-3xl font-extrabold tracking-tight text-white">
                        Bienvenido a <span className="text-indigo-500">Tplan</span>
                    </h1>
                    <p className="text-gray-400 text-sm">
                        Ingresa tus credenciales para continuar
                    </p>
                </div>

               
                <div className="py-2 [&_input:not([type='checkbox'])]:!bg-[#161b22] [&_input:not([type='checkbox'])]:!text-white [&_input:not([type='checkbox'])]:!border-gray-700">
                    <LoginUserForm />
                </div>

               
                <div className="text-center pt-2 border-t border-gray-800/60">
                    <Link 
                        to="/" 
                        className="text-sm font-medium text-indigo-400 hover:text-indigo-300 transition-colors inline-block pt-2"
                    >
                        ← Volver a la página principal
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default LoginUserPage;