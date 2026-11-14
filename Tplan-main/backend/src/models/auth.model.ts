export interface AuthDataType{
    expiresIn: string
    cookieOptions: object;
}

export interface LoginInputType {
    email: string;
    password: string;
    recuerdame?: boolean | undefined;
}

export interface LoginReturnType{
    token: string;
    maxAge: number | undefined
}