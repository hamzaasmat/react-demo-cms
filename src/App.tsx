import React from 'react';
import { ToastContainer } from 'react-toastify';

import './App.scss';
import 'react-toastify/dist/ReactToastify.css';
import AppRouting from './routes/app.routes';
import AppSidebar from './core/components/sidebar/sidebar.component';

function App() {
  return (
    <div>
      <ToastContainer />
      <AppSidebar />
      {/* <AppHeader /> */}
      <div className="app">
        <AppRouting />
      </div>
    </div>
  );
}

export default App;
