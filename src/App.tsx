import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './shared/routes/Routes';

function App() {
  return (
    <Router>
      <Routes isAuth={false} />
    </Router>
  );
};

export default App;
