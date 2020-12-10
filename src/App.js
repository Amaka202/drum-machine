import React, { useState, StyleSheet, } from "react";
import {data} from "./Data"
import Drum from "./Drum"

export default function App() {
  const [sound, setSound] = useState("");

  const handleClick = animal => {
    setSound(animal);
  };

  return (
    <div >
      <div id="drum-machine">
        <div >
          <strong id="display" >
            {sound}
          </strong>
        </div>
        <div >
          {data.map((val, i) => (
            <Drum
              key={val.id + i}
              id={val.id}
              url={val.url}
              handleKeydown={() => handleClick(val.animal)}
              onClick={() => handleClick(val.animal)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}


