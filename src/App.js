import Side from './component/side';
import './main.scss';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Top from './component/top';
import Home from './pages/home';
import Patients from './pages/patients';
import Doctors from './pages/doctors';
import Rooms from './pages/rooms';

function App() {
  return (
    <BrowserRouter>
      <div className='main'>
        <Side/>
        <div className='main__right'>
          <Top/>
          <div className='main__route'>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/patients' element={<Patients/>}/>
              <Route path='/rooms' element={<Rooms/>}/>
              <Route path='/doctors' element={<Doctors/>}/>
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;
