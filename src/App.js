import './App.css';
import Main from './Layouts/Main';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';


function App() {
  return (
    <div className="App">
      <Main>
        <Suspense fallback={<div>loading...</div>} >
         <Outlet />
        </Suspense>
      </Main>
   </div>
  );
}

export default App;
