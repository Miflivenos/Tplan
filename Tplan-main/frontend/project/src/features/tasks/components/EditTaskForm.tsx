import useUpdateContentTask from "../hooks/useUpdateContentTask";
import useForm from "../../../shared/hooks/useForm";
import type { TaskType, TaskUpdateType } from "../types/TasksType";
import { PRIORIDAD_TAREA } from "../types/TasksType";

interface Props{
    task: TaskType;
    onSaved: () => void;
    onCancel: () => void;
}

const EditTaskForm = ({ task, onSaved, onCancel }: Props) => {

    const { loading, error, fatalError, updateTask } = useUpdateContentTask();
    const { valores, handleOnChange } = useForm<TaskUpdateType>({
        "titulo": task.titulo,
        "descripcion": task.descripcion,
        "fechaVencimiento": task.fechaVencimiento,
        "prioridad": task.prioridad,
        "id": task.id
    });

    const handleSubmit = async(e: React.SubmitEvent<HTMLFormElement>) => {

        e.preventDefault();

        const exito = await updateTask(valores);
        if(exito) onSaved();
    }

    if (fatalError) return <h2>{fatalError}</h2>

    return (
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 8, maxWidth: 400 }}>
            <input type="text" name="titulo" required value={valores.titulo} onChange={handleOnChange} />
            <textarea name="descripcion" required value={valores.descripcion} onChange={handleOnChange} />
            <input type="date" name="fechaVencimiento" required value={valores.fechaVencimiento} onChange={handleOnChange} />
            <select disabled={loading} name="prioridad" value={valores.prioridad} onChange={handleOnChange}>
                {PRIORIDAD_TAREA.map(p => (
                    <option key={p} value={p}>{p}</option>
                ))}
            </select>

            {error && <p role="alert">{error}</p>}

            <div style={{ display: "flex", gap: 8 }}>
                <button type="submit" disabled={loading}>{loading ? "Aplicando..." : "Guardar cambios"}</button>
                <button type="button" onClick={onCancel} disabled={loading}>Cancelar</button>
            </div>
        </form>
    )

};

export default EditTaskForm;