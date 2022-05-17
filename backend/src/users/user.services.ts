import { Repository } from 'typeorm';
import { UserEntity } from './user.entity';
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";


@Injectable()
export class UserServices{
    constructor(@InjectRepository(UserEntity) private model: Repository<UserEntity>){}

    public async GetAllUsers():Promise<UserEntity[]>{
        return await this.model.find();
    }

    public async GetUser(id){
        const user = this.model.findOneBy({ id: id})
        return user;        
    }

    public async CreateNewUser(user: UserEntity):Promise<UserEntity>{
        return await this.model.save(user);
    }

    public async UpdateUser(id: number, user: UserEntity){
        return await this.model.update(id, user)
    }

    public async DeleteUser(id: number){
        return await this.model.delete(id)
    }
}