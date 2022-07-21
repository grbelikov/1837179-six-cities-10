import MainPage from '../../pages/main-page/main-page';

type MainPageProps = {
  suggestionsAmount: number;
}

function App({suggestionsAmount}: MainPageProps): JSX.Element {
  return (
    <MainPage suggestionsAmount={suggestionsAmount} />
  );
}

export default App;
