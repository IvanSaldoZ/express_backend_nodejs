import {Router} from "express";
import PostController from "./PostController.js";

const router = new Router()

// Создание статьи
router.post('/posts', PostController.create)

// Получение статей
router.get('/posts', PostController.getAll)

// Получение статьи по ID-шнику
router.get('/posts/:id', PostController.getOne)

// Редактирование статьи
router.put('/posts', PostController.update)

// Удаление статьи
router.delete('/posts/:id', PostController.delete)

export default router;