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
              I'm hanging out and writing code.
            </p>
          </div>
          <div style={{marginLeft:"10px", flexGrow:"1", textAlign:"left"}}>
            <h2>
              What I'm doing now
            </h2>
            <ul>
              <li>
                Reading Extreme Ownership Links:  <a target="_blank" href="https://echelonfront.com/extreme-ownership/">Echelon Front's book page</a>
                <ul>
                  <li>
                    I'm not a military fanboy, but the story telling is great and the stories amazing. Highly recommend.
                  </li>
                </ul>
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
        </div>
      </>
    )
  }
};

export default Index;
