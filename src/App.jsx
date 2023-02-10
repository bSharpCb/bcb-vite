import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div id='main'>
        <a href="/" target="_blank">
          <img src="/logo-alpha.png" className="logo" alt="bSharpCb logo" />
        </a>
      <h1>Bradley Shaffer</h1>
        <div id='my-links'>
        <a href="https://github.com/bSharpCb" target="_blank">
          <img src="/bcb-logo.png" className="logo bcb-links" alt="Github logo" />
        </a>
        <a href="https://jeopardy.gg" target="_blank">
          <img src="/jgg-logo.png" className="logo bcb-links" alt="LinkedIn logo" />
        </a>
        <a href="https://www.linkedin.com/in/bradley-shaffer-9a8b5772/" target="_blank">
          <img src="/li-logo.png" className="logo bcb-links" alt="LinkedIn logo" />
        </a>
        </div>
      </div>

    </div>
  )
}

export default App
