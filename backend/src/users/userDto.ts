import { IsString, IsArray } from "class-validator";

export class UserDto{
    @IsString()
    name: string;

    @IsString()
    email: string;

    @IsString()
    password: string;
}