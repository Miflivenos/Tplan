import { Link, Navigate } from "react-router-dom";
import { CreateTaskForm, RenderTasks, TasksFilter, useGetAllTasks, type TaskType } from "../../features/tasks";
import useSearchBar from "../../shared/hooks/useSearchbar";
import useForm from "../../shared/hooks/useForm";
import useAuth from "../../shared/hooks/useAuth";

const TasksView = () => {

    const { logout } = useAuth();
    const { tasks, loading, error, fatalError, getTasks } = useGetAllTasks();
    const { array: buscadas, renderBarra } = useSearchBar<TaskType>({ criterioBusqueda: "titulo", arrayBusqueda: tasks });
    const { valores, handleOnChange, resetForm } = useForm({ estado: "", prioridad: "" });

    const visibles = buscadas.filter(t =>
        (!valores.estado || t.estado === valores.estado) &&
        (!valores.prioridad || t.prioridad === valores.prioridad)
    );

    return (
        <div style={{ maxWidth: 800, margin: "0 auto", display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Link to="/">Página principal</Link>
                <button onClick={logout}>Cerrar sesión</button>
            </div>

            <h1 className="text-2xl font-bold">Mis tareas</h1>

            <CreateTaskForm onCreada={getTasks} />
            {renderBarra()}
            <TasksFilter handleOnChange={handleOnChange} valores={valores} />
            <div><button onClick={resetForm}>Borrar filtros</button></div>

            <RenderTasks tasks={visibles} loading={loading} error={error} fatalError={fatalError} getTasks={getTasks} />
        </div>
    )
};

const TasksPage = () => {

    const { loading, autenticado } = useAuth();

    if(loading) return <p>Cargando...</p>;
    if(!autenticado) return <Navigate to="/users/login" replace />;

    return <TasksView />;
};

export default TasksPage;