// backend/src/repositories/tasks.repository.ts

export const taskRepository = {
    create: async (taskInput: any) => {
        // Implementa aquí tu consulta a la base de datos para crear
    },

    getAll: async () => {
        // Implementa aquí tu consulta para obtener todas las tareas
    },

    updateContent: async (taskInput: any) => {
        // Implementa aquí tu consulta para actualizar el contenido
    },

    updateEstado: async (id: number, estado: string) => {
        // Implementa aquí tu consulta para actualizar el estado
    },

    delete: async (id: number) => {
        // Implementa aquí tu consulta para eliminar la tarea
    }
};

export default taskRepository;