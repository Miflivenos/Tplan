// Ejemplo completo de la estructura que debe tener tasks.service.ts

const tasksService = {
    async create(body: any, userId: any) {
        // Tu lógica de creación aquí usando userId y body
    },

    async getAll(userId: any) {
        // Tu lógica para obtener todas las tareas del usuario
    },

    async updateContent(body: any, userId: any) {
        // Tu lógica para actualizar contenido usando userId y body
    },

    async delete(taskId: number, userId: any) {
        // Tu lógica para eliminar la tarea del usuario
    },

    async updateEstado(taskId: number, userId: any, estado: any) {
        // Tu lógica para actualizar el estado usando taskId, userId y estado
    }
};

export default tasksService;