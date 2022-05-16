import { IsString, IsEmail } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CommentsDto{
    @IsString()
    @ApiProperty()
    message: string;

    @IsString()
    @ApiProperty()
    author: string;
}