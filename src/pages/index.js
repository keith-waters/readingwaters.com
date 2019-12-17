import { Component } from 'react';

class Index extends Component {

  render() {
    return (
      <>
        <div style={{padding:"10px", textAlign:"center"}}>
          <img src="/keith-waters-headshot.jpg" alt="Keith Waters" component="img" style={{display:"inline", width:"200px", borderRadius:"4px"}} />
          <div style={{marginLeft:"10px", flexGrow:"1", textAlign:"center"}}>
            <h1>
              Hi, I'm Keith
            </h1>
            <p>
              I build stuff for the web.
            </p>
          </div>
          <div style={{marginLeft:"10px", flexGrow:"1", textAlign:"left"}}>
            <h2>
              About
            </h2>
            <p>
              I started learning web development in the winter of 2016 and got a job in January of the next year. 
              Since then I've been coding every day. Most of my learning has involved figuring out what needs to 
              be done for the task at hand. This leaves me feeling like there are lot's of holes in my knowledge.
            </p>
            <p>
              In comes this site. Inspired 
              by <a href="https://www.taniarascia.com/">Tania Rascia's blog</a> and <a href="https://www.swyx.io/writing/learn-in-public">this</a> article 
              from Swyx. The goal is to 
              learn in public and get better every day.
            </p>
          </div>
          <div style={{marginLeft:"10px", flexGrow:"1", textAlign:"left"}}>
            <h2>
              What I'm doing now
            </h2>
            <ul>
              <li>
                Studying Data Structures and Algorithms on Coursera
              </li>
              <li>
                Listening to the Mistborn Trilogy by Brandon Sanderson
              </li>
              <li>
                Working as a Web Dev Team Lead
              </li>
            </ul>
          </div>
          <div style={{marginLeft:"10px", flexGrow:"1", textAlign:"left"}}>
            <h2>
              Want to contact me?
            </h2>
            <p>
              Send an email to <a href="mailto:readingwaters@gmail.com">readingwaters@gmail.com</a>
            </p>
          </div>
        </div>
      </>
    )
  }
};

export default Index;