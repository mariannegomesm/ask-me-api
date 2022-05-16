import { Repository } from "typeorm";
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { CommentsEntity } from './comments.entity';
import { CommentsDto } from "./commentsDto";

@Injectable()
export class CommentsService {
  constructor(@InjectRepository(CommentsEntity) private model: Repository<CommentsEntity>) {}

  public async GetAllComments(): Promise<CommentsEntity []> {
    return await this.model.find()
  }

  public async CreateNewComment(comments: CommentsDto){
    await this.model.save(comments) 
    return "Usuário criado com sucesso";
  }

  public async UpdateComment(id: number, comments: CommentsDto){
    return this.model.update(id, comments);
  }

  public async DeleteComment(id: number){
    return this.model.delete(id)
  }
}
