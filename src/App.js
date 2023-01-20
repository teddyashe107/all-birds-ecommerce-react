import './App.css';
import Main from './Layouts/Main';
import { Outlet } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Main>
         <Outlet />
      </Main>
   </div>
  );
}

export default App;
