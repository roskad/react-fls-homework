# 📘 EMR API: Довідка для фронтенду

## Пацієнти (`/patients`)

| Метод  | Роут                  | Опис                    |
| ------ | --------------------- | ----------------------- |
| GET    | `/patients`           | Отримати всіх пацієнтів |
| GET    | `/patients/:id`       | Деталі пацієнта         |
| POST   | `/patients`           | Додати нового пацієнта  |
| PUT    | `/patients/:id`       | Оновити пацієнта        |
| DELETE | `/patients/:id`       | Видалити пацієнта       |
| GET    | `/patients?name=іван` | Фільтр за ПІБ           |

---

## Записи (`/appointments`)

| Метод  | Роут                             | Опис                   |
| ------ | -------------------------------- | ---------------------- |
| GET    | `/appointments`                  | Отримати всі записи    |
| GET    | `/appointments/:id`              | Один запис             |
| POST   | `/appointments`                  | Створити новий запис   |
| PUT    | `/appointments/:id`              | Оновити запис          |
| DELETE | `/appointments/:id`              | Видалити запис         |
| GET    | `/appointments?date=2025-08-01`  | Фільтр за датою        |
| GET    | `/appointments?patientName=іван` | Фільтр за ПІБ пацієнта |

---

## Лікарі (`/admin/doctors`)

| Метод  | Роут                 | Опис                    |
| ------ | -------------------- | ----------------------- |
| GET    | `/admin/doctors`     | Отримати список лікарів |
| POST   | `/admin/doctors`     | Додати нового лікаря    |
| PUT    | `/admin/doctors/:id` | Оновити лікаря          |
| DELETE | `/admin/doctors/:id` | Видалити лікаря         |
