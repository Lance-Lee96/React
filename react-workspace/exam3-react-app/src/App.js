import logo from './logo.svg';
import './App.css';
import { useContext } from 'react';
import ThemeSwitcher from './theme/ThemeSwitcher';
import { ThemeContext } from './theme/ThemeContext';

function App() {
const { isDarkMode } = useContext(ThemeContext)

return (
  <div
  style={{
    backgroundColor: isDarkMode ? '#333' : '#fff',
    color: isDarkMode ? '#fff' : '#000',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
 }}>
    <h1>{isDarkMode ? '다크 모드' : '라이트 모드'}</h1>
    <ThemeSwitcher />
  </div>
);

}

export default App;
