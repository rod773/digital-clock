import React, { useState, useEffect } from "react";
import "./App.css";
import { IonGrid, IonRow, IonCol, IonTitle } from "@ionic/react";

function App() {
  const [time, updateTime] = useState(new Date());
  useEffect(() => {
    // timer updation logic
    const timer = setInterval(() => {
      updateTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  return (
    <>
      <IonGrid className="App">
        <IonRow className="elementcontainer">
          <IonCol size="12">
            <h1>Digital Clock</h1>
          </IonCol>

          <IonCol size="12" className="timeparent">
            <IonTitle className="timecontainer">
              {/* print the string prettily */}
              <span className="time">{time.toLocaleTimeString()}</span>
            </IonTitle>
          </IonCol>
        </IonRow>
      </IonGrid>
    </>
  );
}

export default App;
