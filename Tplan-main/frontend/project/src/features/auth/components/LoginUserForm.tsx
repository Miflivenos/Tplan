import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useLoginUser from "../hooks/useLoginUser";

export const LoginUserForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [recuerdame, setRecuerdame] = useState(false);
    
    const { login, loading, error } = useLoginUser();
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            // Ejecutamos el login con los campos requeridos por AuthInputType
            await login({ email, password, recuerdame });

            // Si la petición es exitosa y no lanza error, redirigimos a tareas
            navigate("/tasks");
        } catch (err) {
            // Si hay error, el hook de errores se encarga de mostrarlo
            console.error("Error al iniciar sesión", err);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
                <div className="p-3 text-sm text-red-400 bg-red-950/50 border border-red-800 rounded-xl">
                    {error}
                </div>
            )}

            <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Correo electrónico</label>
                <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="tucorreo@email.com" 
                    required
                    className="w-full px-4 py-2 rounded-xl border border-gray-700 bg-[#161b22] text-white focus:outline-none focus:border-indigo-500" 
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Contraseña</label>
                <input 
                    type="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••" 
                    required
                    className="w-full px-4 py-2 rounded-xl border border-gray-700 bg-[#161b22] text-white focus:outline-none focus:border-indigo-500" 
                />
            </div>

            <div className="flex items-center space-x-2">
                <input 
                    type="checkbox" 
                    id="recuerdame"
                    checked={recuerdame}
                    onChange={(e) => setRecuerdame(e.target.checked)}
                    className="rounded border-gray-700 bg-[#161b22] text-indigo-600 focus:ring-indigo-500"
                />
                <label htmlFor="recuerdame" className="text-sm text-gray-300">Recuérdame</label>
            </div>

            <button 
                type="submit" 
                disabled={loading}
                className="w-full py-2.5 px-4 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white font-medium rounded-xl transition-colors shadow-lg shadow-indigo-600/30"
            >
                {loading ? "Iniciando sesión..." : "Iniciar Sesión"}
            </button>
        </form>
    );
};