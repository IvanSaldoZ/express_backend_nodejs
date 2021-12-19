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

  }

  // Получение одной статьи
  async getOne(req, res) {

  }

  // Редактирование одной статьи
  async update(req, res) {

  }

  // Удаление статьи
  async delete(req, res) {

  }

}


export default new PostController();