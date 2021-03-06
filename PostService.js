import Post from "./Post.js";
import FileService from "./fileService.js";

class PostService {

  // Создание статьи с картинкой
  async create(post, picture) {
    const fileName = FileService.saveFile(picture)
    return await Post.create({...post, picture: fileName});
  }

  // Получение всех статей
  async getAll(req, res) {
    return Post.find()
  }

  // Получение одной статьи
  async getOne(id) {
    if (!id) {
      throw new Error('Не указан ID')
    }
    return Post.findById(id);
  }

  // Редактирование одной статьи
  async update(post) {
    if (!post._id) {
      throw new Error("Не указан ID")
    }
    // Обновляем пост и возвращаем ({new: true}) обновленную версию поста
    return Post.findByIdAndUpdate(post._id, post, {new: true})
  }

  // Удаление статьи
  async delete(id) {
    if (!id) {
      throw new Error("Не указан ID")
    }
    return Post.findByIdAndRemove(id)
  }

}


export default new PostService();