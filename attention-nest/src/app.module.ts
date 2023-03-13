import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsController } from './posts/posts.controller';
import { PostsService } from './posts/posts.service';
import { PostsModule } from './posts/posts.module';
import { UsersModule } from './users/users.module';
import { CommentsService } from './comments/comments.service';
import { CommentsController } from './comments/comments.controller';
import { CommentsModule } from './comments/comments.module';

@Module({
  imports: [PostsModule, UsersModule, CommentsModule],
  controllers: [AppController, PostsController, CommentsController],
  providers: [AppService, PostsService, CommentsService],
})
export class AppModule {}
