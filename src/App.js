import React, { useState } from 'react';
import Splash from './components/Splash'
import Lobby from './components/Lobby'

function App() {
  const [splashVisible, setSplashVisible] = useState(true)

  const splashShow = (boo) => {
    setSplashVisible(boo)
  }
  return (
    <div className="App">
      {
        splashVisible ? <Splash splashShow={splashShow} /> : <Lobby />
      }

    </div>
  );
}

export default App;
