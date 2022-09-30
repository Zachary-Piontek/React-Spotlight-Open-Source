import { Link, Route, Switch } from 'react-router-dom';
import './App.css';
import Charts from './components/Chart';
import Table from './components/Table';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/table">Table</Link>
        <Link to="/charts">Charts</Link>
      </nav>
      <Switch>
        <Route path="/table">
          <h1>Table Libary</h1>
          <Table />
        </Route>
        <Route path="/charts">
          <h1>Chart Library</h1>
          <Charts />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
