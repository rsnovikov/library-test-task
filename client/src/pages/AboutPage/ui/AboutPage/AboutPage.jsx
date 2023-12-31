const AboutPage = () => {
  return (
    <div>
      <h1 className="font-medium text-2xl mb-4">О реализации тестового задания</h1>
      <div>
        <p className="mb-4 text-gray-800">
          При возникновении некоторых ошибок пользователь не получает уведомление или
          &quot;Непредвиденная серверная ошибка&quot;, также лоадер в некоторых случаях не
          отображается, не успел обработать все случаи в рамках тестового.
        </p>
        <section className="mb-4">
          <h2 className="font-medium text-lg mb-2">Server</h2>
          <p className="my-2 text-gray-800">
            Для взаимодействия с БД решил использовать pg-promise (впервые с ним работал), так как
            таблицы нужно создавать при помощи sql запросов и часть запросов писать самостоятельно,
            поэтому не sequelize, хотя обычно всегда использую либо его, либо typeOrm. Запросы решил
            не выносить в sql файлы, потому что часть запросов все равно генерируется при помощи
            pgp.helpers, но некоторые запросы стали трудночитаемыми, поэтому, если бы дальше
            разрабатывал проект, вынес бы все-таки sql в файлы и использовал QueryFile.
          </p>
        </section>

        <section>
          <h2 className="font-medium text-lg mb-2">Client</h2>
          <p className="my-2 text-gray-800">
            Приложение реализовано в соответствии с методологией{" "}
            <a
              href="https://feature-sliced.design/"
              target="_blank"
              rel="noreferrer"
              className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
            >
              Feature-Sliced Design
            </a>
            .
          </p>
          <p className="my-2 text-gray-800">
            Для запросов и хранения данных использовал Redux toolkit, до этого не работал с ag-grid
            и не думал, что у него свое собственное состояние. После добавления RTK и реализации все
            запросов прочитал внимательно документацию ag-grid, но redux toolkit решил оставить,
            хотя в принципе можно заменить его react-query или просто axios. Главная таблица по ТЗ
            сделана как Infinite Row Model. Связанная таблица сделана как Client-Side, state
            хранится и изменяется при помощи Redux. Лучше в таком случае использовать Server-Side,
            но в ТЗ уточнений не было. Мне, если честно, удобнее было через redux, так как с ag-grid
            впервые работал.
          </p>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
