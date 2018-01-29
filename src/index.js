import React from 'react';
import ReactDOM from 'react-dom';
//se crea el store donde se mantendran los datos
import { createStore } from 'redux';
//el provider conecta redux con react
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
//importa el reducer
import reducer from './store/reducer';
//sse conecta el reducer con el store, el reducer regresara los datos al store para que los almacene
const store = createStore(reducer);
//conecta reducer y react
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
