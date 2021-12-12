import React from "react";
import Form from "./components/form"
import Info from "./components/info"
import Weather from "./components/Weather"


class App extends React.Component{
  render(){
    return (
          

      <div>
      <Form />
      
     
        <div>Hello world!</div>
        <Weather />
        <div>How are you?</div>
      <Info />
      </div>
    );
  }
}

export default App;

