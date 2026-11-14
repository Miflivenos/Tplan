export interface AuthInputType{
    email: string;
    password: string;
    recuerdame: boolean;
}

export interface AuthResponseType{
    ok: boolean;
    autenticado?: boolean;
    userId?: number;
}