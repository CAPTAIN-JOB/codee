import '../App.css'
import Main from './Main'
import NavigationBar from './NavigationBar'
import Details from './Details'
import Intro from './Intro'

function App() {
  return (
    <div className='app'>
      <NavigationBar />
      <Main />
      <Details />
      <Intro />
    </div>
  )
}

export default App
