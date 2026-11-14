import { useState } from "react";
import useUpdateEstado from "../hooks/useUpdateEstado";
import { ESTADOS_TAREA, type estadosTarea } from "../types/TasksType";

interface Props{
    id: number;
    estado: estadosTarea;
    onUpdate: () => Promise<void>;
}

const EstadoSelect = ({ id, estado, onUpdate }: Props) => {

    const [nuevo, setNuevo] = useState<estadosTarea>(estado);
    const { updateEstado, loading, error, fatalError } = useUpdateEstado();

    const guardar = async() => {
        const exito = await updateEstado(id, nuevo);
        if(exito) await onUpdate();
    }

    return (
        <>
            <select value={nuevo} onChange={(e) => setNuevo(e.target.value as estadosTarea)}>
                {ESTADOS_TAREA.map(e => (
                    <option key={e} value={e}>{e}</option>
                ))}
            </select>
            {nuevo !== estado && (
                <button onClick={guardar} disabled={loading}>{loading ? "Guardando..." : "Guardar estado"}</button>
            )}
            {(error || fatalError) && <span role="alert">{error || fatalError}</span>}
        </>
    )

};

export default EstadoSelect;