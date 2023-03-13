import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(private postsService: PostsService) {}
  @Get()
  getAllPosts() {
    return this.postsService.getAllPosts();
  }

  @Post()
  createPost(@Body() body) {
    return this.postsService.createPost({
      title: body.title,
      content: body.content,
    });
  }

  @Get('today')
  getTodaysPost() {
    return this.postsService.getTodaysPost();
  }

  @Put(':id')
  updatePostById(@Param() param) {
    return this.postsService.updatePostById({});
  }

  @Delete(':id')
  deletePostById(@Param() param) {
    return this.postsService.deletePostById({});
  }
}
