import { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from "./Router";
import "./styles/styles.sass"

function App() {

  useEffect(() => {
    document.title = "Happy Tails Spa"
  }, []);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
