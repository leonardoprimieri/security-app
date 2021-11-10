import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CrimesMap from '../pages/CrimesMap';
import Home from '../pages/Home';
import Login from '../pages/Login';
import NewCrime from '../pages/NewCrime';

// import { Container } from './styles';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/crimes" component={CrimesMap} />
        <Route path="/login" component={Login} />
        <Route path="/crimes/new-crime" component={NewCrime} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
