import { getCustomRepository, Repository } from "typeorm";
import { Setting } from "../entities/Setting";
import { SettingsRepository } from "../repositories/SettingsRepository";

interface ISettingsCreate {
    chat: boolean;
    username: string;
}

class SettingsService {
    private settingsRepository : Repository<Setting>;

    constructor(){
        this.settingsRepository = getCustomRepository(SettingsRepository);
    }

    async create({chat, username}: ISettingsCreate) {
        const UserAlreadyExist = await this.settingsRepository.findOne({
            username
        });

        if(UserAlreadyExist){
            throw new Error ("User Already Exist!");
        }

        const settings = this.settingsRepository.create({
            chat,
            username,
        })

        await this.settingsRepository.save(settings);

        return settings;
    }
}

export { SettingsService }