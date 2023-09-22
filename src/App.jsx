import { useState } from 'react'
import '../dist/output.css'
import '../src/App.css'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Nav from './components/nav'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<Nav></Nav>
    </>
  )
}

export default App
