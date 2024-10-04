import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from 'react-redux'
import Tabla from './components/tabla';
import Detalles from "./components/detalles";
import Episodios from "./components/episodios";
import { store } from './store/store'
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Tabla/>}/>
          <Route path="/detalles" element={<Detalles/>}/>
          <Route path="/episodios" element={<Episodios/>}/>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
