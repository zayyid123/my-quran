import React from 'react';
import list from "../../config/route/listRoute";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from "../../config/redux";
import Navbar from '../../components/navbar';

function App() {
  return (
    <Provider store={store} >
      <Router>

        <Navbar/>
        <Routes >
          {
            list.map((item) =>
              <Route key={item.name} path={item.path} element={<item.component />} />
            )
          }
        </Routes>
      </Router>

    </Provider>
  );
}

export default App;
