
import './App.css';
import MiniDrawer from './components/navbar';
import Design from './components/design';
import Register from './components/dummy';
import CustomizedTables from './components/table';
import {BrowserRouter , Routes ,Route} from 'react-router-dom';
import Dashhome from './components/dashhome';
import Signup from './components/signup';
import Login from './components/login';
//import Torender from './components/rendering';


<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
/>

function App() {
  return (
    <div className="App">
       
      <BrowserRouter>
      {/* <Design /> */}
      {/* <MiniDrawer />  */}
      <Routes>
      <Route path='/' element ={ <Design />}></Route>

       <Route path='/navbar' element ={<MiniDrawer />}></Route>
        <Route path='/dummy' element ={<Register />}></Route>
        <Route path='/table' element ={<CustomizedTables />}></Route>
        <Route path='/dashhome' element={<Dashhome />}></Route>
        <Route path='/signup' element ={<Signup />}></Route>
        <Route path='/login' element ={<Login />}></Route>
       </Routes>
     
      </BrowserRouter>
     
    </div>
  );
}

export default App;
