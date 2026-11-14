import useChangeEditando from "../hooks/useChangeEditanto";
import EditTaskForm from "./EditTaskForm";
import EstadoSelect from "./EstadoSelect";
import DeleteTaskButton from "./DeleteTaskButton";
import type { TaskType } from "../types/TasksType";

interface Props {
    tasks: TaskType[];
    loading: boolean;
    error: string;
    fatalError: string;
    getTasks: () => Promise<void>;
}

const TaskItem = ({ task, getTasks }: { task: TaskType; getTasks: () => Promise<void> }) => {

    const { editando, change } = useChangeEditando();

    if (editando) {
        return (
            <li style={{ marginBottom: 8 }}>
                <EditTaskForm
                    task={task}
                    onSaved={async () => { change(); await getTasks(); }}
                    onCancel={change}
                />
            </li>
        );
    }

    return (
        <li style={{ border: "1px solid #374151", borderRadius: 8, padding: 12, marginBottom: 8 }}>
            <h3 style={{ fontWeight: 600 }}>{task.titulo}</h3>
            <p>{task.descripcion}</p>
            <p>Vence: {task.fechaVencimiento} · Prioridad: {task.prioridad}</p>
            <div style={{ display: "flex", gap: 8, alignItems: "center", marginTop: 8 }}>
                <EstadoSelect id={task.id} estado={task.estado} onUpdate={getTasks} />
                <button onClick={change}>Editar</button>
                <DeleteTaskButton id={task.id} onDelete={getTasks} />
            </div>
        </li>
    );
};

const RenderTasks = ({ tasks, loading, error, fatalError, getTasks }: Props) => {

    if (loading) return <p>Cargando tareas...</p>;
    if (fatalError) return <p role="alert">{fatalError}</p>;
    if (error) return <p role="alert">{error}</p>;
    if (tasks.length === 0) return <p>No hay tareas.</p>;

    return (
        <ul style={{ listStyle: "none", padding: 0 }}>
            {tasks.map(t => <TaskItem key={t.id} task={t} getTasks={getTasks} />)}
        </ul>
    );
};

export default RenderTasks;