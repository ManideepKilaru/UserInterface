const mongoose = require("mongoose")


const postSchema = new mongoose.Schema({
    posttype: String,
    postcontent: { type: String, required: true, unique: true }
})

const newPost = mongoose.model("newPost", postSchema)


async function getPostContent(postId) {
    return await newPost.findOne({ "_id": postId })
}

async function deletePost(postId) {
    await newPost.deleteOne({ "_id": postId })
}

async function createPost(posttype, postcontent) {
    const newUserPost = await newPost.create({
        posttype: posttype,
        postcontent: postcontent
    })
    return newUserPost
}

async function updatePost(postId, postcontent) {
    const updatedPost = await newPost.updateOne({ "_id": postId }, { $set: { postcontent: postcontent } })
    return updatedPost;
}



module.exports = {
    getPostContent, updatePost, createPost, deletePost
}