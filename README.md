<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>
# 🛒 Online Market API

![NestJS](https://img.shields.io/badge/NestJS-API-red?style=for-the-badge&logo=nestjs)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Database-blue?style=for-the-badge&logo=postgresql)
![Prisma](https://img.shields.io/badge/Prisma-ORM-black?style=for-the-badge&logo=prisma)

## Описание

Проект представляет собой **бэкенд интернет-магазина** с возможностью:
- регистрации и авторизации пользователей (JWT)
- управления товарами, категориями и брендами
- добавления товаров в избранное и корзину
- разграничения доступа по ролям (`USER`, `ADMIN`)

## 🧰 Технологии

- **NestJS** — backend framework
- **PostgreSQL** — реляционная СУБД
- **Prisma** — ORM для работы с базой данных
- **JWT** — аутентификация
- **Docker** 

---

## 🏁 Быстрый старт

### 1. Клонируй репозиторий

```bash
git clone https://github.com/твоя-ссылка/online-market-backend.git
cd online-market-backend

```

2. Установи зависимости
```
npm install
```

3. Настрой .env файл
Создай файл .env в корне проекта:
```
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/shop_db?schema=public"
JWT_SECRET="секретный_ключ"
```

4. Применение миграций
```
npx prisma migrate dev --name init
```
(если база пустая — сначала npx prisma migrate reset)

5. Запуск сервера
```
npm run start:dev
```



🗂️ Структура проекта
```
src/
├── auth/             # Авторизация и регистрация
├── users/            # Пользователи
├── products/         # CRUD товаров
├── categories/       # Категории товаров
├── brands/           # Бренды товаров
├── favorites/        # Избранные товары
├── cart/             # Корзина
├── prisma/           # Подключение Prisma
└── main.ts           # Точка входа
```


🔑 Роли и авторизация
Роль	Доступ
USER	Просмотр товаров, добавление в корзину/избранное
ADMIN	Полный доступ (CRUD товаров, брендов, категорий и т.д.)

Авторизация реализована через JWT. После логина пользователь получает токен:

```
Authorization: Bearer <ваш_токен>
```

📦 Примеры API-запросов
Регистрация
```
POST /auth/register
```
```
{
  "email": "test@mail.com",
  "password": "123456"
}
```


Авторизация
```
POST /auth/login
```

```{
  "email": "test@mail.com",
  "password": "123456"
}
```

Получить все товары
```
GET /products
```

Добавить товар (admin)
```
POST /products
Authorization: Bearer <TOKEN>
```

```
{
  "name": "iPhone 14",
  "price": 1200,
  "description": "Смартфон Apple",
  "categoryId": 1,
  "brandId": 2
}
```
