import { Link } from "react-router-dom";

export default function Index() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      
      <div className="max-w-md w-full bg-gray-900/80 backdrop-blur-2xl border border-gray-800 p-8 rounded-3xl shadow-2xl shadow-indigo-500/10 text-center space-y-8">
        
        
        <div className="space-y-3">
          <h1 className="text-5xl font-extrabold tracking-tight text-white">
            T<span className="text-indigo-500">plan</span>
          </h1>
          <p className="text-gray-400 text-sm leading-relaxed">
            Organiza tus tareas, proyectos y metas de manera fluida, rápida y con un diseño profesional.
          </p>
        </div>

        
        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <Link
            to="/users/register"
            className="flex-1 inline-flex items-center justify-center px-5 py-3 rounded-xl font-medium text-sm transition-all duration-200 bg-gray-800 text-gray-200 border border-gray-700/80 hover:bg-gray-700 hover:text-white hover:border-gray-600 shadow-sm"
          >
            Regístrate
          </Link>
          
          <Link
            to="/users/login"
            className="flex-1 inline-flex items-center justify-center px-5 py-3 rounded-xl font-medium text-sm transition-all duration-200 bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 hover:bg-indigo-500 active:scale-[0.98]"
          >
            Inicia sesión
          </Link>
        </div>

      </div>
    </div>
  );
}