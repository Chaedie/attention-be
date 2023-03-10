const PostService = require("./post.service");
const postService = new PostService();

exports.getPosts = async (req, res, next) => {
  // const { user_id } = req.session.user;

  // console.log("page, pageSize", page, pageSize);
  // const posts = await postService.getPosts({ user_id, page });
  const posts = await postService.getPosts({
    page: req.query?.page || 1,
    pageSize: req.query?.pageSize || 10,
  });

  res.status(200).json(posts);
};

exports.createPost = async (req, res, next) => {
  // const { user_id } = req.session.user;
  const { title, content } = req.body;

  // const postItem = await postService.createPost({ user_id, title, content });
  const postItem = await postService.createPost({ title, content });

  res.status(201).json(postItem);
};

exports.updatePost = async (req, res, next) => {
  const { id: post_id, title, content } = req.body;
  // const updatedPost = await postService.updatePost({ post_id, title, content });
  const updatedPost = await postService.updatePost({ title, content });

  res.status(201).json(updatedPost);
};

exports.deletePost = async (req, res, next) => {
  const { id: post_id } = req.params;
  await postService.deletePost(post_id);

  res.status(204).json({ message: "delete Post" });
};

exports.getTodaysPost = async (req, res, next) => {
  const post = await postService.getTodaysPost();

  res.status(200).json(post);
};
