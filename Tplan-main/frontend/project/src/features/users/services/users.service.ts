import { apiClient } from "../../../shared/lib/apiClient";
import type { UserInputType } from "../types/UserType";

const usersService = {
    register: async (userInput: UserInputType) => {
        // apiClient.post ya te devuelve el JSON directamente, sin .data
        const result = await apiClient.post("/users/api/register", userInput);
        return result;
    }
};

export default usersService;