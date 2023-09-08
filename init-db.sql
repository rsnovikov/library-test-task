CREATE DATABASE test_task_library;

\c test_task_library;

CREATE TABLE categories(
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
	description VARCHAR(255) NOT NULL,
	created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE books(
	id SERIAL PRIMARY KEY,
	title VARCHAR(255) NOT NULL,
	author VARCHAR(255) NOT NULL,
	publisher VARCHAR(255) NOT NULL,
	year INTEGER NOT NULL,
	rating NUMERIC(3, 2) NOT NULL,
	created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
	category_id INTEGER NOT NULL,
	FOREIGN KEY (category_id) REFERENCES categories(id)
);

INSERT INTO categories (name, description) VALUES
('Frontend', 'Разработка пользовательских интерфейсов'),
('Backend', 'Разработка серверной части'),
('Операционные системы', 'Обеспечивает взаимодействие между пользователем и аппаратными устройствами'),
('Алгоритмы', 'Алгоритмы'),
('Структуры данных', 'Структуры данных'),
('Базы данных', 'Базы данных'),
('Русская классика', 'Русская классика'),
('Проза', 'Проза'),
('Мемуары', 'Мемуары'),
('Детектив', 'Детектив'),
('Финансы', 'Финансы'),
('Саморазвитие', 'Саморазвитие');

INSERT INTO books (title, author, publisher, year, rating, category_id) VALUES
('Изучаем программирование на JavaScript', 'Эрик Фримен', 'ДМК Пресс', 2016, 4.7, 1),
('Vue.js в действии', 'Эрик Шмидт', 'Питер', 2018, 4.8, 1),
('Современный учебник JavaScript', 'Илья Кантор', 'Питер', 2012, 4.2, 1),
('Node.js в действии', 'Майкл Микашевич', 'ДМК Пресс', 2013, 4.4, 2),
('Java. Справочник', 'Патрик Наура', 'ООО И.Д. Вильямс', 2018, 4.5, 2),
('Операционные системы. Принципы и практика', 'Андрю Таненбаум', 'Вильямс', 2017, 5, 3);


