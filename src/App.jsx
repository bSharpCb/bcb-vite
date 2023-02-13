import { useState } from 'react'
import './App.css'
import Bcbmidi from './components/bcbmidi'
import Home from './components/home'
import Jeopardy from './components/jeopardy'
import Links from './components/Links'
import Resume from './components/Resume'

function App() {
  const [count, setCount] = useState(1)
  const myComps = [<Resume />, <Home />, <Bcbmidi />, <Jeopardy />];
  return (
    <div className="App">
      <div id='main'>
        <a href="/" target="_blank">
          <img src="/logo-alpha.png" className="logo" alt="bSharpCb logo" />
        </a>
      <h1>Bradley Shaffer</h1>
      <Links />
      <div className="btns">
            <button  onClick={() => setCount(0)}>Home</button>
            <button  onClick={() => setCount(1)}>B#Cb</button>
            <button  onClick={() => setCount(2)}>Jeopardy.gg</button>
        </div>
      {myComps[count]}
      </div>
    </div>
  )
}

export default App
