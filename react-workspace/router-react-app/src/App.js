import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Navbar from './Navbar';
import User from './user';
import UserProfile from './UserProfile';
import Dashboard from './Dashboard';
import NotFound from './NotFound';
import PrivateRoute from './PrivateRoute';
import Login from './Login';

function App() {
  //실제로는 사용자 인증 상태를 확인해야 한다.
  const isAuthenticated = false;


  return (
    <div className='App'>
      {/* <Navbar /> */}
      <Routes>
        {/* Routes : 모든 라우트를 그룹화하며, URL 경로에 따라 적절한 라우트를 렌더링한다 */}
        
        {/* Route : URL 경로와 컴포넌트를 매핑하여 특정 경로에 맞는 컴포넌트를 렌더링하는 역할을 한다. */}
        
        {/* <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} /> */}

        {/* <Route path='/' element={<User />}/>
        <Route path='/users/:id' element={<UserProfile />}/> */}

        {/* <Route path='/dashboard/*' element={<Dashboard />} /> */}
        {/* / : root 경로 */}
        {/* <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} /> */}

        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<PrivateRoute element= {<Dashboard />} isAuthenticated = {isAuthenticated} />} />

        
      </Routes>
    </div>
    
  );
}

export default App;
