import { useState } from 'react';
import { useToasts } from 'react-toast-notifications';
import firebase from '../../services/FirebaseConnection';
import { useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import { Container, Content, FormArea, MainArea } from './styles';

import banner from '../../assets/images/warning.svg';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);

  const { addToast } = useToasts();
  const history = useHistory();

  async function handleSignIn(e) {
    e.preventDefault();
    try {
      const response = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
      localStorage.setItem('email', response.user.email);
      addToast('Logado com sucesso!', {
        appearance: 'success',
      });
      return history.push('/crimes');
    } catch (error) {
      return addToast('Email ou senha errados!', {
        appearance: 'error',
      });
    }
  }
  return (
    <Container>
      <Content>
        <MainArea>
          <img src={banner} alt="banner" />
        </MainArea>
        <FormArea>
          <button onClick={() => history.goBack()} className="goBack">
            <FiArrowLeft size={24} />
          </button>
          <h2>Fazer login</h2>
          <form onSubmit={handleSignIn}>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Senha"
            />
            <input
              type="checkbox"
              name="remember"
              value={remember}
              onChange={(state) => setRemember(!state)}
            />
            <button type="submit">Entrar</button>
          </form>
        </FormArea>
      </Content>
    </Container>
  );
}

export default Login;
