import './App.css';
import Posts from './components/Posts'
import Form from './components/Form'
import { Provider } from 'react-redux'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <Form />
      <hr />
      <Posts />
    </Provider>
  );
}

export default App;
