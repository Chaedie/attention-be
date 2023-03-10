const { getAllPosts, createPost, updatePost, deletePost, getPostCount } = require("./post.dao");

class PostService {
  async getPosts({ user_id, page, pageSize }) {
    console.log("page, pageSize", page, pageSize);

    const offset = (page - 1) * pageSize;

    const todos = await getAllPosts({ user_id, offset, pageSize });

    return todos;
  }

  async getTodaysPost() {
    const todos = await getAllPosts({ offset: 0, pageSize: 1 });
    const postCount = await getPostCount();

    return { ...todos[0], ...postCount[0] };
  }

  async createPost({ user_id, title, content }) {
    const postItem = await createPost({ user_id, title, content });

    return postItem;
  }

  async updatePost({ post_id, title, content }) {
    const postItem = await updatePost({ post_id, title, content });

    return postItem;
  }

  async deletePost(post_id) {
    const postItem = await deletePost(post_id);

    return postItem;
  }
}

module.exports = PostService;
