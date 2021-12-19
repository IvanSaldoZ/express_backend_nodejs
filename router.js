import {Router} from "express";
import Post from "./Post.js";

const router = new Router()

// Создание статьи
router.post('/posts', async (req, res) => {
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
})
// Получение статей
router.get('/posts')

// Получение статьи по ID-шнику
router.get('/posts/:id')

// Редактирование статьи
router.put('/posts/:id')

// Удаление статьи
router.delete('/posts/:id')

export default router;