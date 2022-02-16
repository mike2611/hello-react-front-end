import './App.css';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import { Route } from 'react-router';
import Greeting from './components/Greeting';
import configureStore from './redux/configureStore';

const store = configureStore;

const App = () => (
  <Provider store={store}>
    <Router>
      <Routes>
        <Route exact path="/" element={<Greeting />} />
      </Routes>
    </Router>
  </Provider>
);

export default App;
