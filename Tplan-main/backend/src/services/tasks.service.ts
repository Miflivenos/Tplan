import taskRepository from "../repositories/tasks.repository.js";
import type { TaskInputType, TaskUpdateType, estadosTarea } from "../models/tasks.model.js";

const tasksService = {
    create: async (taskInput: TaskInputType) => {
        return await taskRepository.create(taskInput);
    },

    getAll: async () => {
        return await taskRepository.getAll();
    },

    updateContent: async (taskInput: TaskUpdateType) => {
        // Asegúrate de que el repositorio tenga este método creado
        return await taskRepository.updateContent(taskInput);
    },

    updateEstado: async (id: number, estado: estadosTarea) => {
        // Asegúrate de que el repositorio tenga este método creado
        return await taskRepository.updateEstado(id, estado);
    },

    delete: async (id: number) => {
        // Asegúrate de que el repositorio tenga este método creado
        return await taskRepository.delete(id);
    }
};

export default tasksService;