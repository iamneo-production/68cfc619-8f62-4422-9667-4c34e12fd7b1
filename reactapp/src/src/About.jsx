import React from 'react'
import './About.css';
import img from './assets/bglogo.png';

function About() {
  return (
    <div className='key'>
<div className="sections">
    <div className='hero'>
        <article>
            <h1 className='intro'>ABOUT US</h1>
            <img src={img} className='pos'></img>
            <content>
            At TO-DO SPRINT, we believe that effective task management is the key in
            achieving personal and professional success. We understand the challenges of juggling multiple
             responsibilities, deadlines, and priorities. That's why we've created a powerful and intuitive
              task management app to help you stay organized, focused, and in control.With our app, you can 
              easily capture, organize, and prioritize your tasks all in one place.
               Whether you're managing a complex project, planning your daily to-do list,
                or simply keeping track of your personal goals, our app has got you covered.
            </content>
            <h5>Almitha Dency</h5>
            <p className='demo'>727721EUIT009-APP DEVELOPMENT</p>
        </article>
    </div>
</div>
    </div>
  )
}

export default About