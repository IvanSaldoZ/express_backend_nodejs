import express from 'express'
import mongoose from 'mongoose'

// URL подключения к БД:
const DB_URL = 'mongodb+srv://user:user@cluster0.lgikb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

//Номер порта
const PORT = 5000;

// Создаем объект Express-а
const app = express()

// Для того, чтобы Express понимал JSON-формат, отправляемый ему от пользователя в BODY
app.use(express.json())

// Эндпоинт / - главная страница
app.post('/', (req, res) => {
  console.log(req.params)
  console.log(req.path)
  console.log(req.baseUrl)
  console.log(req.body)
  console.log(req.hostname)
  console.log(req.ip)
  console.log(req.protocol)
  console.log(req.query)
  console.log(req.originalUrl)
  console.log(req.method)
  console.log(req.mode)
  res.status(200).json('Сервер работает3333')
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