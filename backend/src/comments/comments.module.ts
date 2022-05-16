import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { CommentsEntity } from "./comments.entity";
import { CommentsService } from "./comments.service";
import { CommentsController } from "./comments.controller";

@Module({
    imports: [ TypeOrmModule.forFeature([ CommentsEntity ])],
    controllers: [CommentsController],
    providers: [CommentsService ]
})

export class CommentsModule {};