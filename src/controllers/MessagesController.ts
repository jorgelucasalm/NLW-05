import { Request, Response } from "express";
import { MessageService } from "../services/MessagesService";
import { SettingsService } from "../services/SettingsService";

class MessagesController {
    async create(req: Request, res: Response) {
        const { admin_id, text, user_id } = req.body
        const messagesService = new MessageService;


        const message = await messagesService.create({ admin_id, text, user_id })
        return res.json(message);

    }
}

export { MessagesController };