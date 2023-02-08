import { useState } from 'react'
import reactLogo from './assets/pritisolanki.png'
import './App.css'
import  Footer  from './components/Footer/Footer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <section className="main-card">
        <div class="card w317">
            <div>
              <img src={reactLogo} className="avatar" alt="React logo" />
            </div>
            <div>
              <h2 className="name">Priti Solanki</h2>
              <h3 className="designation">Solution Architect</h3>
              <h4 className="website"><a href="https://pritisolanki.com/" target="_blank">pritisolanki.com</a></h4>
              <button>Email</button>
              <h2>About</h2>
              <p class="remove-space">I am a solution architect with a particular interest in making things simple. I try to keep up with frontend technologies and best practices, and am always looking for new things to learn.</p>
              <h2>Interests</h2>
              <p class="remove-space">Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic. [Copied ;)]</p>
            </div>
          </div>
          <Footer />
      </section>
    </div>
  )
}

export default App
