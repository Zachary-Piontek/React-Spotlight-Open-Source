import { Link, Route, Switch } from 'react-router-dom';
import './App.css';
import Charts from './components/Chart';
import Table from './components/Table';

function App() {
  return (
    <div className="App">
      <nav>
        <Link className="text-3xl font-bold underline" to="/table">Table</Link>
        <Link className="text-3xl font-bold underline" to="/charts">Charts</Link>
      </nav>
      <Switch>
        <Route path="/table">
          <h1 className="text-3xl font-bold">Table Library</h1>
          <Table />
        </Route>
        <Route path="/charts">
          <h1 className="text-3xl font-bold">Chart Library</h1>
          <Charts />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
