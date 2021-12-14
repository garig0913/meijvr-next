import React, { useState } from "react";
import "./styles.css";
import YouTube from "react-youtube";

const Youtube = (props) => {
   return (
      <div className="App">
         <YouTube onReady={this._onReady} />
      </div>
   );
};

export default YouTube;
