import { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from "./Router";
import { servicios } from './context';

import "./styles/styles.sass"

function App() {

  useEffect(() => {
    document.title = "Happy Tails Spa"
  }, []);

  return (
    <>
      <servicios.ServiciosProvider>
        <RouterProvider router={router} />
      </servicios.ServiciosProvider>
    </>
  );
}

export default App;
