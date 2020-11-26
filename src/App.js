import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import './App.css';

const App = () => (
  <ReactFullpage
  //fullpage options
  /* Options here */
  scrollingSpeed = {1000}
  navigation = "true" 
  anchors={['Home', 'AboutMe', 'Contact']}
  navigationTooltips={["Home","About me", "Contact"]}

    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <div className="section s1">
            <p>Section 1 (welcome to fullpage.js)</p>
            <button onClick={() => fullpageApi.moveSectionDown()}>
              Click me to move down
            </button>
          </div>
          <div className="section s2">
            <p>Section 2</p>
          </div>
          <div className="section s3">
            <p>Section 3</p>
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

export default App;
