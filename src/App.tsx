import Card, {CardVariant} from './components/Cards';
import EventsExample from './components/EventsExample';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import UsersPage from './page/UsersPage';
import TodosPage from './page/TodosPage';
import { NavLink } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <div id="NavBar">
        <NavLink to={"/users"} style={{padding: "0 10px"}}>Users</NavLink>
        <NavLink to={"/card"} style={{padding: "0 10px"}}>Card</NavLink>
        <NavLink to={"/todos"} style={{padding: "0 10px"}}>Todos</NavLink>
        <NavLink to={"/event"} style={{padding: "0 10px"}}>Event</NavLink>
      </div>
      <Routes> 
        <Route path={'/card'} element={
          <Card 
            variant={CardVariant.primary} 
            height='200px' width='100px' 
            onClick={() => {alert("БУ!")}}
          >
            КОТ
          </Card>
        }/>
        <Route path={'/users'} element={<UsersPage/>}/>
        <Route path={'/todos'} element={<TodosPage/>}/>
        <Route path={'/event'} element={<EventsExample/>}/>
        <Route path={'/'} element={<Navigate to={'/users'}/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
