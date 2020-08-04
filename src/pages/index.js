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
                Watching and thinking on the Clean Code principles. Links: <a target="_blank" href="https://youtu.be/7EmboKQH8lM">lectures on youtube</a>, <a target="_blank" href="https://www.goodreads.com/book/show/3735293-clean-code">Goodreads link</a>
              </li>
              <li>
                Working as a React Developer at <a target="_blank" href="https://www.bidwrangler.com/">BidWrangler</a>
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
          <div style={{marginLeft:"10px", flexGrow:"1", textAlign:"right"}}>
            <a href='https://ko-fi.com/readingwaters'>Support Me on Ko-fi</a>
          </div>
        </div>
      </>
    )
  }
};

export default Index;