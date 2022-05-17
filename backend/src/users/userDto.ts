import { IsString, IsArray, IsBoolean } from "class-validator";

export class UserDto{
    @IsString()
    name: string;

    @IsString()
    email: string;

    @IsString()
    password: string;

    @IsBoolean()
    isAdmin: boolean;
}