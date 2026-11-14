import { useCallback, useEffect, useState } from "react";
import authService from "../services/auth.service";
import { AuthContext } from "./AuthContext";

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [autenticado, setAutenticado] = useState(false);
    const [userId, setUserId] = useState<number | null>(null);
    const [loading, setLoading] = useState(true);

    const authCheck = useCallback(async () => {
        try {
            const data = await authService.authCheck();
            setAutenticado(data.autenticado ?? false);
            setUserId(data.userId ?? null);
        } catch (err) {
            console.error(err);
            setAutenticado(false);
            setUserId(null);
        } finally {
            setLoading(false);
        }
    }, []);

    const logout = useCallback(async () => {
        try {
            await authService.logout();
        } catch (err) {
            console.error(err);
        } finally {
            setAutenticado(false);
            setUserId(null);
        }
    }, []);

    useEffect(() => {
        const initAuth = async () => {
            await authCheck();
        };

        void initAuth();
    }, [authCheck]);

    return (
        <AuthContext.Provider value={{ loading, userId, autenticado, authCheck, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;