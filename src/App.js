
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Pages/Home';
import SingleView from './Pages/SingleView';



function App() {
  return (
    <div className="App">
      
        <Header></Header>
        <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/view/:id' element={<SingleView></SingleView>}></Route>
      </Routes>
      <Footer></Footer>


    </div>
  );
}

export default App;
