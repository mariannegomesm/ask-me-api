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

  public async GetComment(id: number){
    const element = await this.model.findOneBy({
      id: id
    })

    return element;
  }

  public async CreateNewComment(comments: CommentsDto){
    await this.model.save(comments) 
    return "Comentário criado com sucesso!";
  }

  public async UpdateComment(id: number, comments: CommentsDto){
    this.model.update(id, comments);
    return "Comentário atualizado com sucesso!"
  }

  public async DeleteComment(id: number){
    return this.model.delete(id)
  }
}
