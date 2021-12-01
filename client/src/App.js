import logo from './logo.svg';
import './App.css';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './global';
import { theme } from './theme';
import Home from './pages/Home';
import Cursor from './components/Cursor';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        {/* <Cursor /> */}
        <div className="App">
          
          <Home />
        </div>
    </>
    </ThemeProvider>
  );
}

export default App;
