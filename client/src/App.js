import React from 'react';
import './App.css';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './global';
import { theme } from './theme';
import Cursor from './components/Cursor';
import MyRoutes from './routes/MyRoutes';


function App() {

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        {/* <Cursor /> */}
        <div className="App">
          
          <MyRoutes />
        </div>
    </>
    </ThemeProvider>
  );
}

export default App;
