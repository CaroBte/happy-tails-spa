import { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from "./Router";
import { servicios, usuario } from './context';

import "./styles/styles.sass"

function App() {

  useEffect(() => {
    document.title = "Happy Tails Spa"
  }, []);

  return (
    <>
      <usuario.UsuariosProvider>
        <servicios.ServiciosProvider>
          <RouterProvider router={router} />
        </servicios.ServiciosProvider>
      </usuario.UsuariosProvider>
    </>
  );
}

export default App;
