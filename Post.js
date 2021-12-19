import mongoose from "mongoose";

// Пост - статья с картинкой
const Post = new mongoose.Schema({
  author: {type: String, required: true, },
  title: {type: String, required: true, },
  content: {type: String, required: true, },
  picture: {type: String, }

})

// Экспортирум в качестве модели и называем эту модель Post
export default mongoose.model('Post', Post)