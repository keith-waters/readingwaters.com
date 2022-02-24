import { Component } from 'react';
import About from '../components/About'

class Index extends Component {

  render() {
    return (
      <>
        <div style={{padding:"10px", textAlign:"center"}}>
          <About/>
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
