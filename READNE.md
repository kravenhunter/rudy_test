### Docker контенер-сборка MYSQL + NUXT 3

- Файл .env.example переименовать в .env

## Запуск

- Зайти в необходимую директорию с файлом docker-compose.yml
- Запустить команду docker-compose up / docker-compose up -d
- При работе в с папкой dev-config при внесении изменений файлы docker-compose.yml и docker-compose.yml запускать команду docker-compose up --build чтобы пересобрать образы
