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
    try{
      await this.model.save(comments) 
      return "Comentário criado com sucesso!";
    }
    catch(error){
      return "Erro ao criar comentário!"
    }
  }

  public async UpdateComment(id: number, comments: CommentsDto){
    this.model.update(id, comments);
    return "Comentário atualizado com sucesso!"
  }

  public async DeleteComment(id: number){
    return this.model.delete(id)
  }
}
