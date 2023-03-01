import { useState } from 'react'
import userAvatar from './assets/sree.jpeg'
import mail from './assets/mail-142.svg'
import './App.css'
import  Footer  from './components/Footer/Footer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <section className="main-card">
        <div class="card w317">
            <div>
              <img src={userAvatar} className="avatar" alt="React logo" />
            </div>
            <div>
              <h2 className="name">Manchala Sreekanth</h2>
              <h3 className="designation">Software Engineer</h3>
              <h4 className="website"><a href="https://sree.ninja/" target="_blank">sree.ninja</a></h4>
              <button><a href="mailto:norpely@donotspam.com"><img src={mail} className="emailIcon" /><span class="btntext">Email</span></a></button>
              <h2 class="remove-space">About</h2>
              <p>I am a software Engineer with a particular interest in making things simple. I try to keep up with frontend technologies and best practices, and am always looking for new things to learn.</p>
              <h2 class="remove-space">Interests</h2>
              <p class="remove-space">Web Developer. Music scholar. Reader. </p>
            </div>
            <Footer />
          </div>
      </section>
    </div>
  )
}

export default App
