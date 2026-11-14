import type { Request, Response } from "express";
import usersService from "../services/users.service.js";

const usersController = {

    async register(req: Request, res: Response){

        const user = await usersService.createUser(req.body);

        res.status(201).json({
            ok: true,
            user
        });

    },

    async login(req: Request, res: Response){

        const { token, maxAge } = await usersService.createSesion(req.body);

        res.cookie("token", token, {
            httpOnly: true,
            sameSite: "lax",
            ...(maxAge !== undefined ? { maxAge } : {})
        });

        res.status(200).json({
            ok: true
        })
    },

    async logout(_req: Request, res: Response){

        res.clearCookie("token", { httpOnly: true, sameSite: "lax" });

        res.status(200).json({
            ok: true
        });
    },

    async authCheck(req: Request, res: Response){
        const userId = req.userId;
        res.status(200).json({
            ok: true,
            autenticado: true,
            userId
        });
    }

};

export default usersController;