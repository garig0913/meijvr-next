import React, { useState } from "react";
import "./styles.css";
import YouTube from "react-youtube";
var getYouTubeID = require("get-youtube-id");

const Youtube = (props) => {
   const [id, setId] = useState("ZjJYqDjmGkI");

   function handleChange(e) {
      console.log(e.target.value);

      setId(getYouTubeID(e.target.value));
   }
   return (
      <div className="App">
         <YouTube onReady={this._onReady} />
      </div>
   );
};

export default YouTube;
