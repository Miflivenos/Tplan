import useForm from "../../../shared/hooks/useForm";
import useRegisterUser from "../hooks/useRegisterUser";
import type { UserInputType } from "../types/UserType";
import { useNavigate } from "react-router-dom";

const RegisterUserForm = () => {

    const navigate = useNavigate();

    const { valores, handleOnChange, resetForm } = useForm<UserInputType>({"username": "", "email": "", "password": ""});
    const { register, loading, error, fatalError } = useRegisterUser();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault();

        const exito = await register(valores);
        if(exito){
            resetForm();
            alert("Usuario registrado correctamente");
            navigate("/users/login");
        }
    }

    if(fatalError) return <h2>{fatalError}</h2>

    return (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', maxWidth: 320 }}>
            <input type="text" name="username" required placeholder="Usuario" value={valores.username} onChange={handleOnChange} />
            <input type="email" name="email" required placeholder="Email" value={valores.email} onChange={handleOnChange} />
            <input type="password" name="password" required placeholder="Contraseña" value={valores.password} onChange={handleOnChange} />

            {error && <p role="alert">{error}</p>}

            <button type="submit" disabled={loading}>{loading ? "Registrando..." : "Registrate"}</button>
        </form>
    )
};

export default RegisterUserForm;