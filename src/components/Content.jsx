import React from 'react';

function Content() {
  return (
    <React.Fragment>
      <div className="container">
        <div className="form">
          <div className="formTitle">Operation</div>
          <div className="formWrapper">
            <input className="inputStyle" type="text" />
            <input className="inputStyle" type="text" />
            <button className="ButtonStyle">Generate Stealth Address</button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export { Content };
