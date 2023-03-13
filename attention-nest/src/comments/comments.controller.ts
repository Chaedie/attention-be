import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CommentsService } from './comments.service';

@Controller('comments')
export class CommentsController {
  constructor(private commentsService: CommentsService) {}

  @Get(':postId')
  getCommentsByPostId(@Param() param) {
    return [{}];
  }

  @Post(':postId')
  createCommentByPostId(@Param() Param, @Body() body) {}
}
