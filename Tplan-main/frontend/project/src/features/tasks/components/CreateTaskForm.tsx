import { useState } from "react";
import useForm from "../../../shared/hooks/useForm";
import useCreateTask from "../hooks/useCreateTask";
import { PRIORIDAD_TAREA, type prioridadTarea, type TaskInputType } from "../types/TasksType";

interface Props{
    onCreada: () => Promise<void>
}

const CreateTaskForm = ({ onCreada }: Props) => {

    const { loading, create, error, fatalError } = useCreateTask();
    const { valores, handleOnChange, resetForm } = useForm<TaskInputType>({"titulo": "", "descripcion": "", "fechaVencimiento": "", "prioridad": "" as prioridadTarea});
    const [creando, setCreando] = useState(false);

    const handleSubmit = async(e: React.SubmitEvent<HTMLFormElement>) => {

        e.preventDefault();

        const exito = await create(valores);

        if(exito){
            await onCreada();
            resetForm();
            setCreando(false);
        }
    }

    if(fatalError) return <h2>{fatalError}</h2>

    if(!creando){
        return <button onClick={() => setCreando(true)}>Crear tarea</button>
    }

    return (
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 8, maxWidth: 400 }}>
            <input type="text" name="titulo" required placeholder="Título" value={valores.titulo} onChange={handleOnChange} />
            <textarea name="descripcion" required placeholder="Descripción" value={valores.descripcion} onChange={handleOnChange} />
            <input type="date" name="fechaVencimiento" required value={valores.fechaVencimiento} onChange={handleOnChange} />
            <select disabled={loading} name="prioridad" required value={valores.prioridad} onChange={handleOnChange}>
                <option value="">Prioridad...</option>
                {PRIORIDAD_TAREA.map(p => (
                    <option key={p} value={p}>{p}</option>
                ))}
            </select>

            {error && <p role="alert">{error}</p>}

            <div style={{ display: "flex", gap: 8 }}>
                <button type="submit" disabled={loading}>{loading ? "Creando..." : "Crear la tarea"}</button>
                <button type="button" onClick={() => { setCreando(false); resetForm(); }} disabled={loading}>Cancelar</button>
            </div>
        </form>
    )

};

export default CreateTaskForm;