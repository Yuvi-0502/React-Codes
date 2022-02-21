import React from 'react';
import Button from "./Button";
const App=() => {
    return(
        <div>
        <h1>Hello World</h1>
        {/* <button className="button">App Store</button>
        <button className="button">Play Store</button> */}
        <Button title="App Store"/>
        <Button title="Play Store"/>
        <Button />
        </div>
    )
}
export default App;
