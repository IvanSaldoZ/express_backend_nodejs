import express from 'express'
import mongoose from 'mongoose'
import fileUpload from 'express-fileupload';

// Маршруты (роутеры) управления статьями
import router from "./router.js";

// URL подключения к БД:
const DB_URL = 'mongodb+srv://user:user@cluster0.lgikb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

//Номер порта
const PORT = 5000;

// Создаем объект Express-а
const app = express()

// Для того чтобы Express понимал JSON-формат, отправляемый ему от пользователя в BODY
app.use(express.json())

// Регистрируем роутер
app.use('/api', router)

// Регистрируем аплоадер для загрузки файлов на сервер
app.use(fileUpload({}))

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