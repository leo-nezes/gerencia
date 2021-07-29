import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { DataProvider } from './hooks/data';
import { Admin } from './pages/Admin';

import './styles/global.scss';

function App() {
  return (
    <BrowserRouter>
      <DataProvider>
        <Switch>
          <Route path="/" exact component={Admin} />
        </Switch>
      </DataProvider>
    </BrowserRouter>
  );
}

export default App;
