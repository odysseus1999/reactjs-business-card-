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
              <h4 className="website"><a href="https://manchala.me/" target="_blank">Potfolio</a></h4>
              <button><a href="mailto:hackedinsolutions@gmail.com"><img src={mail} className="emailIcon" /><span class="btntext">Email</span></a></button>
              <h2 class="remove-space">About</h2>
              <p align="justify" >As the Founder and CEO of HackedIn Solutions, I am a passionate software engineer dedicated to simplifying complex processes. With a keen interest in frontend technologies and best practices, I continuously strive to expand my knowledge and explore new avenues for growth.</p>
              <h2 class="remove-space">Interests</h2>
              <p class="remove-space">Software Developer. Freelancer. Entrepreneur. </p>
            </div>
            <Footer />
          </div>
      </section>
    </div>
  )
}

export default App
