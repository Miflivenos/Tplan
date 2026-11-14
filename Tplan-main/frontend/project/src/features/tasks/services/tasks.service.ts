import type { estadosTarea, TaskInputType, TaskType } from "../types/TasksType";

// Definimos DataType aquí mismo para evitar errores de rutas externas
export interface DataType<T> {
    data: T;
    message?: string;
    success?: boolean;
}

const API_BASE_URL = "http://localhost:3000";

const tasksService = {

    create: async (taskInput: TaskInputType): Promise<TaskType> => {
        const response = await fetch(`${API_BASE_URL}/tasks/api/create`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(taskInput),
        });

        if (!response.ok) {
            throw new Error("Error al crear la tarea en el servidor");
        }

        const data = await response.json();
        return data.data || data;
    },

    getAll: async (): Promise<TaskType[]> => {
        const response = await fetch(`${API_BASE_URL}/tasks/api/getAll`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            throw new Error("Error al obtener las tareas del servidor");
        }

        const data = await response.json();
        if (data && data.data) {
            return data.data;
        }
        return data;
    },

    updateContent: async (taskInput: TaskInputType) => {
        const response = await fetch(`${API_BASE_URL}/tasks/api/updateContent`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(taskInput),
        });
        if (!response.ok) throw new Error("Error al actualizar la tarea");
        return response.json();
    },

    updateEstado: async (id: number, estado: estadosTarea) => {
        const response = await fetch(`${API_BASE_URL}/tasks/api/updateEstado`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ id, estado }),
        });
        if (!response.ok) throw new Error("Error al actualizar el estado");
        return response.json();
    },

    delete: async (id: number) => {
        const response = await fetch(`${API_BASE_URL}/tasks/api/delete/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        });
        if (!response.ok) throw new Error("Error al eliminar la tarea");
        return response.json();
    }

};

export default tasksService;