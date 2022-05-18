import { IsString, IsInt, IsArray, IsObject } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CommentsDto{
    @IsString()
    @ApiProperty()
    message: string;

    @IsString()
    @ApiProperty()
    photo: string;

    @IsObject()
    @ApiProperty()
    user: object;
}