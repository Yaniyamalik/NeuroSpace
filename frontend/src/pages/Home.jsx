import React from 'react'
import "./Home.css"
import Slideshow from './Slideshow'
export const Home = () => {
  return (
    <div className="home">
        
        <Slideshow/>
        <div className="home-container">
      
      <section className="neurodiversity">
        <h1>Welcome to NeuroSpace</h1>
        <p>
          Neurodiversity embraces the idea that neurological differences such as
          autism, ADHD, dyslexia, and others are natural variations of the human
          brain. Our platform supports neurodiverse individuals by providing
          resources, learning opportunities, and a safe space to connect.
        </p>
      </section>

      
      <section className="features">
        <div className="feature">
          <h2>📚 Courses</h2>
          <p>Explore courses tailored for neurodiverse learning styles.</p>
        </div>

        <div className="feature">
          <h2>💼 Jobs</h2>
          <p>Find inclusive job opportunities that fit your strengths.</p>
        </div>

        <div className="feature">
          <h2>💬 Chatbox</h2>
          <p>Join our listener support, physocologist support and connect with others.</p>
        </div>

        <div className="feature">
          <h2>🛠️ Toolkit</h2>
          <p>
            Access stress management techniques and social skill exercises.
          </p>
        </div>

        <div className="feature">
          <h2>🛒 Shop</h2>
          <p>Browse neurodiverse-friendly products and tools.</p>
        </div>
      </section>
    </div>
   
    </div>
  )
}
