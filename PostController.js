import PostService from "./PostService.js";

// Контроллер статей (постов)
class PostController {

  // Создание статьи
  async create(req, res) {
    try {
      const post = await PostService.create(req.body)
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
      const posts = await PostService.getAll()
      return res.json(posts)
    } catch (e) {
      res.status(400).json(e)
    }
  }

  // Получение одной статьи
  async getOne(req, res) {
    try {
      const post = await PostService.getOne(req.params.id)
      return res.json(post)
    } catch (e) {
      res.status(400).json(e)
    }
  }

  // Редактирование одной статьи
  async update(req, res) {
    try {
      const updatedPost = await PostService.update(req.body)
      return res.json(updatedPost)
    } catch (e) {
      res.status(400).json({error: e.message})
    }
  }

  // Удаление статьи
  async delete(req, res) {
    try {
      const post = await PostService.delete(req.params.id)
      return res.status(204).json(post)
    } catch (e) {
      res.status(400).json(e)
    }
  }

}


export default new PostController();