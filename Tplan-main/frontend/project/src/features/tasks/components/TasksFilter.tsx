import { ESTADOS_TAREA, PRIORIDAD_TAREA } from "../types/TasksType";

interface Props{
    handleOnChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
    valores: { estado: string; prioridad: string };
}

const TasksFilter = ({ handleOnChange, valores }: Props) => {

    return (
        <div style={{ display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap" }}>
            <label>Estado</label>
            <select name="estado" value={valores.estado} onChange={handleOnChange}>
                <option value="">todos</option>
                {ESTADOS_TAREA.map(e => (
                    <option key={e} value={e}>{e}</option>
                ))}
            </select>
            <label>Prioridad</label>
            <select name="prioridad" value={valores.prioridad} onChange={handleOnChange}>
                <option value="">todas</option>
                {PRIORIDAD_TAREA.map(p => (
                    <option key={p} value={p}>{p}</option>
                ))}
            </select>
        </div>
    )

};

export default TasksFilter;