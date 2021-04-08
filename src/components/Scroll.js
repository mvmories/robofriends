import React from 'react';

const Scroll = (props) => {
  return(
    <div style={{overflowY: 'scroll', borderTop: '3px solid black', height: '74vh'}}>
      {props.children}
    </div>
  );
}

export default Scroll;