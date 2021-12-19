import {Router} from "express";
import PostController from "./PostController.js";

const router = new Router()

// Создание статьи
router.post('/posts', PostController.create)

// Получение статей
router.get('/posts')

// Получение статьи по ID-шнику
router.get('/posts/:id')

// Редактирование статьи
router.put('/posts/:id')

// Удаление статьи
router.delete('/posts/:id')

export default router;