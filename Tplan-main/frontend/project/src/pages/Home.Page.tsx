import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState([
    { id: 1, title: "Completar la autenticación de Tplan", completed: false },
    { id: 2, title: "Diseñar el panel principal de notas", completed: true },
  ]);
  const [newTaskText, setNewTaskText] = useState("");

  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTaskText.trim()) return;

    const newTask = {
      id: Date.now(),
      title: newTaskText,
      completed: false,
    };

    setTasks([newTask, ...tasks]);
    setNewTaskText("");
  };

  const toggleTask = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleLogout = () => {
   
    navigate("/login");
  };

  return (
    <div className="min-h-[90vh] max-w-4xl mx-auto px-4 py-8 flex flex-col space-y-8">
      
      <header className="flex justify-between items-center bg-gray-900/80 backdrop-blur-2xl border border-gray-800 px-6 py-4 rounded-2xl shadow-xl shadow-indigo-500/5">
        <h1 className="text-3xl font-extrabold tracking-tight text-white">
          T<span className="text-indigo-500">plan</span>
        </h1>
        <button
          onClick={handleLogout}
          className="px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 bg-red-600/20 text-red-400 border border-red-800/50 hover:bg-red-600 hover:text-white"
        >
          Cerrar Sesión
        </button>
      </header>

      
      <main className="bg-gray-900/80 backdrop-blur-2xl border border-gray-800 p-6 sm:p-8 rounded-3xl shadow-2xl shadow-indigo-500/10 space-y-6">
        <div className="space-y-1">
          <h2 className="text-2xl font-bold text-white">Panel de Tareas</h2>
          <p className="text-gray-400 text-sm">
            Organiza tus pendientes y notas del día de manera rápida y fluida.
          </p>
        </div>

        
        <form onSubmit={handleAddTask} className="flex gap-3">
          <input
            type="text"
            value={newTaskText}
            onChange={(e) => setNewTaskText(e.target.value)}
            placeholder="Escribe una nueva tarea o nota..."
            className="flex-1 px-4 py-3 rounded-xl border border-gray-700 bg-[#161b22] text-white focus:outline-none focus:border-indigo-500 text-sm"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 active:scale-[0.98] text-white font-medium rounded-xl transition-all shadow-lg shadow-indigo-600/30 text-sm"
          >
            Añadir
          </button>
        </form>

        {/* Lista de tareas */}
        <div className="space-y-3 pt-2">
          {tasks.length === 0 ? (
            <p className="text-center text-gray-500 py-8 text-sm">
              No tienes tareas pendientes. ¡Agrega una para empezar!
            </p>
          ) : (
            tasks.map((task) => (
              <div
                key={task.id}
                className="flex items-center justify-between p-4 rounded-xl border border-gray-800 bg-[#161b22]/60 hover:border-gray-700 transition-all"
              >
                <div className="flex items-center space-x-3 cursor-pointer" onClick={() => toggleTask(task.id)}>
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleTask(task.id)}
                    className="w-4 h-4 rounded border-gray-700 bg-[#161b22] text-indigo-600 focus:ring-indigo-500 cursor-pointer"
                  />
                  <span
                    className={`text-sm ${
                      task.completed ? "line-through text-gray-500" : "text-gray-200"
                    }`}
                  >
                    {task.title}
                  </span>
                </div>
                <button
                  onClick={() => deleteTask(task.id)}
                  className="text-gray-500 hover:text-red-400 text-sm px-2 py-1 transition-colors"
                >
                  Eliminar
                </button>
              </div>
            ))
          )}
        </div>
      </main>
    </div>
  );
}