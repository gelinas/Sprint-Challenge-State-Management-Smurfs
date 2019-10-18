import React from "react";

import SmurfList from './SmurfList';
import SmurfForm from './SmurfForm';

function App() {
  return (
    <div className="App">
      <div className="container">
        <SmurfList />
        <div className="form-container">
          <SmurfForm />
        </div>
      </div>
    </div>
  );
}

export default App;
