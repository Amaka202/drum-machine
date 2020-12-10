import React, {  useRef, useEffect } from "react";
import "./App.css";

function DrumPad (props){
    const audio = useRef(null);
  
    useEffect(() => {
      document.addEventListener("keydown", handleKeydown);
      window.focus();
  
      return () => document.removeEventListener("keydown", handleKeydown);
    });
  
    const handleKeydown = (event) => {
      if (event.keyCode === props.id.charCodeAt()) {
        audio.current.play();
        audio.current.time = 0;
        return props.handleKeydown();
      } else {
        return true;
      }
    };
  
    const handleClick = event => {
      audio.current.play();
      audio.current.time = 0;
      return props.onClick();
    };
  
    return (
      <div className="drum-pad" id={props.id} onClick={handleClick}>
        {props.id}
        <audio ref={audio} className="clip" src={props.url} id={props.id}></audio>
      </div>
    );

}

export default DrumPad;