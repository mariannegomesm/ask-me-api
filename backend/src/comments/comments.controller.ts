import { CommentsDto } from './commentsDto';
import { Body, Controller, Get, ParseIntPipe, Post, Put, Param, Delete } from '@nestjs/common';

import { ApiTags } from '@nestjs/swagger';
import { CommentsEntity } from './comments.entity';
import { CommentsService } from './comments.service';

@Controller("/comments")
@ApiTags("Comments")
export class CommentsController {
  constructor(private readonly userService: CommentsService) {}

  @Get()
  public async GetAllComments(): Promise <CommentsEntity []> {
    return this.userService.GetAllComments();
  }

  @Post()
  public async CreateNewComment(@Body() user: CommentsDto){
    return this.userService.CreateNewComment(user)
  }

  @Put(":id")
  public async UpdateComment(@Param("id", ParseIntPipe) id: number, @Body() userData: CommentsDto){
    return this.userService.UpdateComment(id, userData);
  }

  @Delete(":id")
  public async DeleteComment(@Param("id", ParseIntPipe) id: number){
    return this.userService.DeleteComment(id);
  }
}
