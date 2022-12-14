
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Pages/Routes/Router';

function App() {
  return (
    <div className='App text-center'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
