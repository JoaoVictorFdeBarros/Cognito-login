import { useAuth } from "react-oidc-context";
import './App.css';
import { FaGithub } from "react-icons/fa";

function App() {
  const auth = useAuth();

  if (auth.isLoading) {
    return <div className="container">Loading...</div>;
  }

  if (auth.error) {
    return (
      <div className="container">
        <div className="error-message">
          Encountering error... {auth.error.message}
        </div>
      </div>
    );
  }

  if (auth.isAuthenticated) {
    return (
      <div className="container">
        <h1>Welcome</h1>
        <div className="user-info">
          <pre>Email: {auth.user?.profile.email}</pre>
          <pre>ID Token: {auth.user?.id_token}</pre>
          <pre>Access Token: {auth.user?.access_token}</pre>
          <pre>Refresh Token: {auth.user?.refresh_token}</pre>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
            <div className="cognito-info">
        <h2>Faça LogIn utilizando o Amazon Cognito</h2>
        <p>
          Para acessar a aplicação você precisa estar logado, entre ou crie uma conta no botão abaixo
        </p>
      </div>
      <button onClick={() => auth.signinRedirect()}>Entrar</button>
      <div className="Footnote">
        <a href='https://github.com/JoaoVictorFdeBarros/Cognito-login'><FaGithub /> Repositório</a>
        <p>Desenvolvido por João Victor F. Barros - Dezembro 2024</p>
      </div>
    </div>
  );
}

export default App;
