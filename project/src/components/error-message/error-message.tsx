import './error-message.css';

function ErrorMessage(): JSX.Element | null {
  // const error =
  const error = 'fdfdf';
  return (error)
    ? <div className='error-message'>{error}</div>
    : null;
}

export default ErrorMessage;
