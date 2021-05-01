import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../repositories/UsersRepository";

class UsersService {
    async create( email: string ) {
        const userRepository = getCustomRepository(UsersRepository);

        const userExist = await userRepository.findOne({
            email
        });

        if(userExist){
            return userExist;
        }

        const user = userRepository.create({
            email,
        })

        await userRepository.save(user);

        return user;
    }
}

export { UsersService }