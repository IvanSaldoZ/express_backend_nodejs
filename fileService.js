import * as uuid from 'uuid';
import * as path from 'path';

// Класс для работы с файлами
class FileService {

  // Метод для сохранения файла на диск
  saveFile(file) {
    try {
      // Генерим случайное имя картинки
      const fileName = uuid.v4() + '.jpg';
      // Перемещаем загруженный файл в папку static
      const filePath = path.resolve('static', fileName);
      file.mv(filePath)
      return fileName;
    } catch (e) {
      console.log(e)
    }
  }

}


export default new FileService();