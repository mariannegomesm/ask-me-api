import { Body, Controller, Get, Param, ParseIntPipe, Post, Put, Delete } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";

import { UserEntity } from "./user.entity";
import { UserServices } from "./user.services";

@Controller("/users")
@ApiTags("Users")

export class UserController{
    constructor(private readonly userService: UserServices){}

    @Get()
    public async GetAllUsers(): Promise<UserEntity[]>{
        return this.userService.GetAllUsers()
    }

    @Get(":id")
    public async GetUser(@Param("id", ParseIntPipe) id: number){
        return this.userService.GetUser(id);
    }

    @Post()
    public async CreateNewUser(@Body() user: UserEntity): Promise<UserEntity>{
        return this.userService.CreateNewUser(user)
    }

    @Put(":id")
    public async UpdateUser(@Param("id", ParseIntPipe) id: number,  @Body() user: UserEntity){
        return this.userService.UpdateUser(id, user);
    }

    @Delete(":id")
    public async DeleteUser(@Param("id", ParseIntPipe) id: number){
        return this.userService.DeleteUser(id);
    }
}