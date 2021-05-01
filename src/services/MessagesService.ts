import { getCustomRepository } from "typeorm"
import { MessageRepository } from "../repositories/MessagesRepository";

interface IMessageCreate{
    admin_id?: string,
    text: string,
    user_id: string
}

class MessageService {

    async create({admin_id, text, user_id}: IMessageCreate){
        const messagesRepository = getCustomRepository(MessageRepository);

        const message = messagesRepository.create({
            admin_id,
            text,
            user_id
        })

        await messagesRepository.save(message);

        return message;
    }
}

export { MessageService }