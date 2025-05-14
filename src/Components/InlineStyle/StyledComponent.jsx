import React from 'react';
import './StyledComponent.css';

const StyledComponent = () => {
  const inlineStyle = {
    padding: '10px',
    backgroundColor: '#e0f7fa',
    textAlign: 'center',
  };

  return (
    <div style={inlineStyle}>
      <h2 className="heading">Styled Component</h2>
      <p className="paragraph">This component uses both inline and external CSS styles.</p>
    </div>
  );
};

export default StyledComponent;
