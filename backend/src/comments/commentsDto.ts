import { IsString, IsInt, IsArray } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CommentsDto{
    @IsString()
    @ApiProperty()
    message: string;
}