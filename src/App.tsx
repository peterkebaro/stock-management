import './App.css'
import SignIn from './components/SignIn'

interface Users {
  name: string
  password: string
}

function App() {
  return (
    <div className="App">
      <SignIn/>
    </div>
  )
}

export default App
