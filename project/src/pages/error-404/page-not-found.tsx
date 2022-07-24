import { Link } from 'react-router-dom';

function PageNotFound(): JSX.Element {
  return (
    <div>
      <h1>
        Ошибка 404.
        <br />
        <small>Страница не существует.</small>
      </h1>
      <Link to="/">Главная страница</Link>
    </div>
  );
}

export default PageNotFound;
