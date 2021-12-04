import React, { useState, useRef } from 'react';
import './App.css';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './global';
import { theme } from './theme';
import Cursor from './components/Cursor';
import MyRoutes from './routes/MyRoutes';
import Menu from './components/Menu/Menu';
import Burger from './components/Burger/Burger';
import {useOnClickOutside} from './hooks'

function App() {
  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        {/* <Cursor /> */}
        <div className="App">
          
          <MyRoutes />
        </div>
    </>
    <div ref={node}>
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
    </div>
    </ThemeProvider>
  );
}

export default App;
