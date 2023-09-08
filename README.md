# Library (test task for some company)

**A simple library with book's data and categories**

[Try it out!](https://library-test-task.vercel.app/)

### Quick Start

Запустите скрипт [init-db.sql](init-db.sql) (например, через psql), если требуется, поменяйте название базы данных.

Введите порт, на котором запустится сервер,и данные для подключения БД в [server/.env](server/.env)

```
PORT=
POSTGRES_USER=
POSTGRES_DATABASE=
POSTGRES_PASSWORD=
POSTGRES_PORT=
POSTGRES_HOST=
```

Укажите URL сервера (например, `http://localhost:8080/api`) в [client/.env](client/.env)

```
VITE_API_ENDPOINT=
```

Запустите сервер командой `yarn start` и клиент командой `yarn preview` в соответствующих директориях
