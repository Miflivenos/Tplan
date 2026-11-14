import { RegisterUserForm } from "../../features/users";
import { Link } from "react-router-dom";

const RegisterUserPage = () => {
    return (
        <div className="min-h-[85vh] flex items-center justify-center px-4">

            
            <div className="w-full max-w-md bg-[#0d1117] border border-gray-800/80 p-8 rounded-3xl shadow-2xl shadow-indigo-500/10">

              
                <div className="text-center space-y-2 mb-6">
                    <h1 className="text-3xl font-extrabold tracking-tight text-white">
                        Crea tu cuenta en <span className="text-indigo-500">Tplan</span>
                    </h1>

                    <p className="text-gray-400 text-sm">
                        Regístrate para empezar a organizar tus tareas
                    </p>
                </div>

                
                <div className="w-full py-2 [&_input:not([type='checkbox'])]:!bg-[#161b22] [&_input:not([type='checkbox'])]:!text-white [&_input:not([type='checkbox'])]:!border-gray-700">
                    <div className="w-full max-w-none mx-auto flex flex-col items-stretch gap-3 [&_form]:!w-full [&_form]:!max-w-none [&_form]:!flex [&_form]:!flex-col [&_form]:!items-stretch [&_form]:!gap-3 [&_input:not([type='checkbox'])]:!w-full [&_input:not([type='checkbox'])]:!box-border [&_button]:!w-full [&_button]:!box-border">

                        <RegisterUserForm />

                    </div>
                </div>

                
                <div className="text-center mt-6 pt-4 border-t border-gray-800/60">
                    <Link
                        to="/"
                        className="text-sm font-medium text-indigo-400 hover:text-indigo-300 transition-colors"
                    >
                        ← Volver a la página principal
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default RegisterUserPage;