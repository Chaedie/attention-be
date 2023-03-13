import { Injectable } from '@nestjs/common';

@Injectable()
export class PostsService {
  async getAllPosts() {
    return [
      {
        id: 1,
        title: '가짜 데이터',
        content: '가짜데이터입니다.',
        created_at: new Date(),
        updated_at: new Date(),
        user_id: 1,
      },
      {
        id: 2,
        title: '가짜 데이터2',
        content: '가짜데이터입니다.222',
        created_at: new Date(),
        updated_at: new Date(),
        user_id: 1,
      },
    ];
  }

  async getTodaysPost() {
    return {
      todaysPost: {
        id: 1,
        title: '가짜 데이터',
        content: '가짜데이터입니다.',
        created_at: new Date(),
        updated_at: new Date(),
        user_id: 1,
      },
      totalPostCount: 2,
    };
  }

  async createPost({ title, content }) {
    return `제목: ${title}, 내용: ${content}으로 생성됨`;
  }

  async updatePostById({}) {}
  async deletePostById({}) {}
}
