import React,{useState} from "react";

function Toggle() {
  const [isOFF, setOFF]= useState("OFF")
const color = isOFF ? "Red": "Blue";
  function ClickButton(){
    setOFF(!isOFF)
  }
  return <button style= {{background:color}} onClick={ClickButton}>{isOFF ? "OFF" : "ON"}</button>;
}

export default Toggle;
