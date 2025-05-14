import React from 'react';
import StyledComponent from './Components/InlineStyle/StyledComponent';
import StyledComponentCSSMODULE from './Components/CSSModule/StyledComponent';


const App = () => {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>React App with Styling and Redux Toolkit</h1>
      <StyledComponent />
      <StyledComponentCSSMODULE />
    </div>
  );
};

export default App;
