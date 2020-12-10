import React, { useState, StyleSheet, } from "react";
import {data} from "./Data"
import Drum from "./Drum"

export default function App() {
  const [sound, setSound] = useState("");

  const styles = (StyleSheet = {
    container: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      alignItems: "center"
    }
  })

  const handleClick = animal => {
    setSound(animal);
  };

  return (
    <div style={styles.container}>
      {/* <h1>Drum machine</h1> */}
      <div id="drum-machine">
        <div id="dspl">
          <strong id="display" style={{ letterTransform: "capitalize" }}>
            {sound}
          </strong>
        </div>
        <div style={styles.container}>
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


