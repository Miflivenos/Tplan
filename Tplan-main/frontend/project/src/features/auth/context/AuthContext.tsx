import { createContext } from "react";

interface ContextContentType{
    loading: boolean;
    autenticado: boolean;
    userId: number | null;
    authCheck: () => Promise<void>;
    logout: () => Promise<void>;
}

export const AuthContext = createContext<ContextContentType | undefined>(undefined);