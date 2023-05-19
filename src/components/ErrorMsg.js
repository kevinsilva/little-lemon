import '../styles/ErrorMsg.css';

function ErrorMsg({ children, error }) {
  return (
    <p className={error ? 'error-msg visible' : 'error-msg hidden'}>
      {children}
    </p>
  );
}

export default ErrorMsg;
