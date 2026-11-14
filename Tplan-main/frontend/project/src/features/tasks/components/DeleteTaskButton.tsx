import useDeleteTask from "../hooks/useDeleteTask";

interface Props{
    id: number;
    onDelete: () => Promise<void>;
}

const DeleteTaskButton = ({ id, onDelete }: Props) => {

    const { deleteTask, error, fatalError, loading } = useDeleteTask();

    const handleOnClick = async() => {

        if(!window.confirm("¿Borrar esta tarea?")) return;

        const exito = await deleteTask(id);
        if(exito) await onDelete();
    }

    return (
        <>
            <button onClick={handleOnClick} disabled={loading}>{loading ? "Borrando..." : "Borrar"}</button>
            {(error || fatalError) && <span role="alert">{error || fatalError}</span>}
        </>
    )
};

export default DeleteTaskButton;