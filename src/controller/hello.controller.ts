import {Request,Response} from "express";
import * as helloService from "../service/hello.service";

export const getHello = async(_req: Request,res: Response) => {
        const hello : string = await helloService.findHello()
        return res.status(200).json(hello);
}