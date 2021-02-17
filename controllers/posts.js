import Post from '../models/post.js'

export const getPosts = async (req, res) => {
    try {
        const posts = await Post.find();
        res.status(200).json(posts);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createPost = async (req, res) => {
    const post = req.body;
    const newPost = new Post(post);
    try {
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const getPost = async (req, res) => {
    const { id } = req.params;
    try {
        const foundPost = await Post.findById(id);
        res.status(200).json(foundPost);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const deletePost = async (req, res) => {
    const { id } = req.params;
    try {
        await Post.deleteOne({_id: id });
        res.status(200).json(`Post ${id} deleted`);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const updatePost = async (req, res) => {
    const { id } = req.params;
    const content = req.body;
    try {
        await Post.updateOne({_id: id }, {$set: content });
        res.status(200).json(`Post ${id} updated`);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}