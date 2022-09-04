import { Component } from 'react';
import Link from 'next/link'

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
              I've been working on websites and writing software since January of 2017. It's been a fun and wild ride since then! I have learned a ton along the way. Everything from WordPress, PHP, JQuery, HTML, CSS to Node.js, React.js, TypeScript, AWS.... the list goes on. :)
            </p>
          </div>
          <div style={{marginLeft:"10px", flexGrow:"1", textAlign:"left"}}>
            <h2>
              What I'm doing now
            </h2>
						<p>
							Building 3 SaaS products in 3 months! <Link href={"/notes/3-projects-in-3-months"}><a>(read more about it here)</a></Link> I'm starting in September and finishing up at the end of November.
						</p>
          </div>
          <div style={{marginLeft:"10px", flexGrow:"1", textAlign:"left"}}>
            <h2>
              Have questions or want to chat?
            </h2>
            <p>
							Reach out to me on Twitter <a href="https://twitter.com/readingwaters">@readingwaters</a>
            </p>
          </div>
        </div>
      </>
    )
  }
};

export default Index;
