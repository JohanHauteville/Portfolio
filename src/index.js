import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.scss';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import { createTheme, ThemeProvider } from '@mui/material/styles';

let theme = createTheme({
    palette: {
        kaki: {
            main: '#678d7c', // Définition de la couleur kaki
        },
    },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <ThemeProvider theme={theme}>
          <Router>
              <Routes>
                  <Route path={'/'} element={<Home />} />
              </Routes>
          </Router>
          <Footer />
      </ThemeProvider>


  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
