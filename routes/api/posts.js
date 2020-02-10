const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const { check, validationResult } = require("express-validator");

const User = require("../../models/User");
const Post = require("../../models/Post");
const Profile = require("../../models/Profile");

// @route   POST api/posts
// @desc    Create post
// @access  Private
router.post(
  "/",
  [auth, [check("text", "Text is required").notEmpty()]],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const user = await User.findById(req.user.id).select("-password");

      const post = new Post({
        text: req.body.text,
        name: user.name,
        avatar: user.avatar,
        user: req.user.id
      });

      await post.save();
      res.json(post);
    } catch (error) {
      res.status(500).send("Server Error");
    }
  }
);

// @route   GET api/posts
// @desc    Gat all post
// @access  Private
router.get("/", auth, async (req, res) => {
  try {
    const posts = await Post.find().sort({ date: -1 });

    res.json(posts);
  } catch (error) {
    res.status(500).send("Server Error");
  }
});

// @route   GET api/posts/:post_id
// @desc    Gat post by id
// @access  Private
router.get("/:post_id", auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.post_id);
    console.log(post);
    if (!post) {
      return res.status(404).json({ msg: "Post not found" });
    }
    res.json(post);
  } catch (error) {
    if (error.kind == "ObjectId") {
      return res.status(404).json({ msg: "Post not found" });
    }
    res.status(500).send("Server Error");
  }
});

// @route   DELETE api/posts/:post_id
// @desc    Delete post by id
// @access  Private
router.delete("/:post_id", auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.post_id);

    if (!post) {
      return res.status(404).json({ msg: "Post not found" });
    }

    if (post.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "Invalid operation" });
    }

    await post.remove();

    res.json({ msg: "Post has been deleted" });
  } catch (error) {
    if (error.kind == "ObjectId") {
      return res.status(400).json({ msg: "Invalid post" });
    }
    res.status(500).send("Server Error");
  }
});

// @route   PUT api/posts/:post_id/like
// @desc    Like a post
// @access  Private
router.put("/:post_id/like", auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.post_id);
    if (!post) {
      return res.status(404).json({ msg: "Post not found" });
    }
    const like = post.likes.filter(
      like => like.user.toString() === req.user.id
    );
    if (like.length === 0) {
      post.likes.unshift({ user: req.user.id });
    } else {
      post.likes = post.likes.filter(
        like => like.user.toString() !== req.user.id
      );
    }
    await post.save();

    res.json(post.likes);
  } catch (error) {
    res.status(500).send("Server Error");
  }
});

// @route   POST api/posts/:post_id/comment
// @desc    Add comment
// @access  Private
router.post(
  "/:post_id/comment",
  [auth, [check("text", "Text is required")]],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ msg: errors.array() });
    }

    try {
      const post = await Post.findById(req.params.post_id);
      if (!post) {
        return res.status(404).json({ msg: "Post not found" });
      }
      const user = await User.findById(req.user.id);

      const comment = {
        text: req.body.text,
        user: user.id,
        name: user.name,
        avatar: user.avatar
      };
      post.comments.unshift(comment);
      await post.save();

      res.json(post.comments);
    } catch (error) {
      if (error.kind == "ObjectId") {
        return res.status(400).json({ msg: "Invalid post" });
      }
      res.status(500).send("Server Error");
    }
  }
);

// @route   DELETE api/posts/:post_id/comment/:comment_id
// @desc    Delete comment
// @access  Private
router.delete("/:post_id/comment/:comment_id", auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.post_id);
    if (!post) {
      return res.status(404).json({ msg: "Post not found" });
    }

    const comment = post.comments.find(
      comment => comment.id.toString() === req.params.comment_id
    );

    if (!comment) {
      return res.status(404).json({ msg: "Comment not found" });
    }

    if (comment.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "Invalid operation" });
    }

    console.log("aqui");

    post.comments = post.comments.filter(
      comment => comment.id.toString() !== req.params.comment_id
    );

    await post.save();

    res.json(post.comments);
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
