import './App.css';
import CakeContainer from './components/CakeContainer'
import { Provider } from 'react-redux';
import store from './redux/store';
import IceCreamContainer from './components/iceCreamContainer'

function App() {
  return (
    <Provider store={store}>
    <div>
      <CakeContainer />
      <IceCreamContainer/>
    </div>
    </Provider>
  );
}

export default App;
