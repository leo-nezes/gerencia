import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Admin } from './pages/Admin';

import './styles/global.scss';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Admin} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
