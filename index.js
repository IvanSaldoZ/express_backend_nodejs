import express from 'express'
import mongoose from 'mongoose'
import Post from "./Post.js";

// URL подключения к БД:
const DB_URL = 'mongodb+srv://user:user@cluster0.lgikb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

//Номер порта
const PORT = 5000;

// Создаем объект Express-а
const app = express()

// Для того, чтобы Express понимал JSON-формат, отправляемый ему от пользователя в BODY
app.use(express.json())

// Эндпоинт / - главная страница
app.post('/', async (req, res) => {
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

async function startApp() {
  try {
    // Подключаемся к Монге
    await mongoose.connect(DB_URL, {useUnifiedTopology: true, useNewUrlParser: true, })
    // Запускаем сервер
    app.listen(PORT, () => console.log('SERVER STARTED AT ' + PORT))
  } catch (e) {
    // Выводим лог ошибок
    console.log(e)
  }
}

startApp()