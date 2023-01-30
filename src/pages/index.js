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
              Former whitewater river guide, washed up creek boater, was a vaccuum salesman once, painted and fixed houses for money. Now making software using TypeScript. splash, splash and beep, boop
            </p>
          </div>
          <div style={{marginLeft:"10px", flexGrow:"1", textAlign:"left"}}>
            <h2>
              What I'm doing now
            </h2>
						<p>
              Working a day job as a software engineer and building <a href="https://typescriptjobs.io">typescriptjobs.io</a> on the side. :) 
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
