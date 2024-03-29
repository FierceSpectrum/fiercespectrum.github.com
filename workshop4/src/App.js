import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import UserName from './Patrones/Singleton/UserName';
import UserAge from './Patrones/Singleton/UserAge';
import Archivo from './Patrones/Decorator/Archivo';
import ArchivoSin from './Patrones/Decorator/ArchivoSin';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path="/" element={
              <>
                <div>{'hola listo?'}</div>
              </>
            } />
            <Route path="/Singleton" element={
              <>
                <UserName />
                <UserAge />
              </>
            } />
            <Route path="/Decorator" element={
              <>
                <Archivo/>
                <ArchivoSin/>
              </>
            } />

          </Routes>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
