import Post from "./Post.js";

// Контроллер статей (постов)
class PostController {

  // Создание статьи
  async create(req, res) {
    try {
      // Распаковываем боди
      const {author, title, content, picture} = req.body
      // Создаем запись в БД
      const post = await Post.create({author, title, content, picture})
      // Возвращаем нужный статус
      res.status(201).json({post})
    } catch (e) {
      // Возвращаем нужный статус
      res.status(400).json(e)
    }
  }

  // Получение всех статей
  async getAll(req, res) {
    try {
      const posts = await Post.find()
      return res.json(posts)
    } catch (e) {
      res.status(400).json(e)
    }
  }

  // Получение одной статьи
  async getOne(req, res) {
    try {
      const {id} = req.params
      if (!id) {
        res.status(400).json({message: 'ID не указан'})
      }
      const post = await Post.findById(id)
      return res.json(post)
    } catch (e) {
      res.status(400).json(e)
    }
  }

  // Редактирование одной статьи
  async update(req, res) {
    try {
      const post = req.body
      if (!post._id) {
        res.status(400).json({message: 'ID не указан'})
      }
      // Обновляем пост и возвращаем ({new: true}) обновленную версию поста
      const updatedPost = await Post.findByIdAndUpdate(post._id, post, {new: true})
      return res.json(updatedPost)
    } catch (e) {
      res.status(400).json(e)
    }
  }

  // Удаление статьи
  async delete(req, res) {
    try {
      const {id} = req.params
      if (!id) {
        res.status(400).json({message: 'ID не указан'})
      }
      const post = await Post.findByIdAndRemove(id)
      return res.status(204).json(post)
    } catch (e) {
      res.status(400).json(e)
    }
  }

}


export default new PostController();