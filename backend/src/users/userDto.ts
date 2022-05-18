import { IsString, IsArray, IsBoolean } from "class-validator";

export class UserDto{
    @IsString()
    name: string;

    @IsString()
    email: string;

    @IsString()
    password: string;

    @IsString()
    data: string;

    @IsString()
    photo: string;

    @IsBoolean()
    isAdmin: boolean;
}