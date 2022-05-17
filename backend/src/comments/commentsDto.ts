import { IsString, IsInt, IsArray, IsObject } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CommentsDto{
    @IsString()
    @ApiProperty()
    message: string;

    @IsObject()
    @ApiProperty()
    user: object;
}