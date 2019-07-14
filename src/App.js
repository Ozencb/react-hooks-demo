/*
This project aims to simply demonstrate the new hooks feature of React, which is used to store state in functional components.
*/

import React, { useState, useEffect } from "react"; // You have to import hook methods in order to use them
import { useFetch } from "./components/fetchHook"; 
import { Icon, Descriptions } from "antd";
import Profiles from "./components/profiles"; // Components can be import like this
import Repos from "./components/repos";
import "./styles.less";

function App() {
  const [count, setCount] = useState(0);  
  // A "useState" hook takes exactly two parameters. One to store state, one to set state.
  // In this one, "count" preserves the state between re-renders
  // "setCount" is used to update the "count" state when needed.
  // We give it an initial value by passing a method argument. In this case, the initial state is "0".
  // The initial state is only used during the first render, which can be set to another state by calling "setCount"
  // A state can be any variable; a string, an integer, an object.
  
  const [users, loading] = useFetch("https://api.github.com/users");  
  // useFetch is a custom hook method that takes a URL as an argument and returns data from URL and loading state.
  // Its details can be found in "components/fetchHook.js".

  useEffect(() => {       // The useEffect effect hook gives us the ability to perform operations between renders.
    if (count === -1) {   // It serves the same purpose as "componentDidMount", "componentDidUpdate", and "componentWillUnmount" but in a single method.
      setCount(0);        // This useEffect method makes sure that our counter does not go below 0, which might break things.
    }
  }, [count]);            // Everything passed in the array causes the effect to re-run. In this case, we want to run this effect whenever "count" changes so we pass it in.
                          // An empty array should still be passed in to prevent infinite-loops even if we do not need a dependency array.
  
  function counter(direction) { // This method is used to navigate through "users" object and takes arguments that's been sent from navigation buttons
    if (direction === "next") {
      setCount((count + 1) % JSON.parse(JSON.stringify(users)).length);
    } else if (direction === "previous") {
      if (count === 0) {
        setCount(count + JSON.parse(JSON.stringify(users)).length - 1);
      } else {
        setCount(count - 1);
      }
    }
  }

  /*
  This is where our main App function returns JSX a template that injects itself into root.
  I have used a simple ternary operation to control which element to display depending on loading state.

  Ternary operation works like this: condition ? expressionToRunIfTrue : expressionToRunIfFalse

  If useFetch's loading state is true, meaning data hasn't been returned from that useFetch hook yet,
  the div element in between the first set of brackets will be returned, which is a loading animation.
  However, once useFetch updates the "loading" state to false, meaning data has successfully been extracted from URL,
  the other div element will be rendered in the second set of brackets, which contains all the useful components.
  
  I have found this loading logic to be very useful because when I have spent a good two days trying to render the app
  with no luck because all the components and functions depended on data to work, which takes some time to retrieve,
  resulting in errors and application not running/rendering at all. Halting all other stuff until loading phase is done resolves these issues.
  React does not even check if the functions in the second set of brackets has any error beforehand because our ternary operator hands React only
  a loading animation, not all those functional components that relies on data.

  Our second div has a Profile component, two Icons from Antd library that act like buttons, and a component named Repos. 
  You might have noticed that we are passing some variables inside components that are not part of standart HTML/CSS instruction set.
  Those are called props, and they send values to their related component. 
  Syntax of this expression looks like: nameInChildComponent={nameInMainFunction}
  In JSX, curly braces are used to specify variables.
  */

  return loading ? (                                                               
    <div className="App">
      <Icon
        style={{ color: "white", fontSize: "200px", verticalAlign: "middle" }}
        type="loading"
      />
    </div>
  ) : (
    <div className="App">
      <Profiles users={users} count={count} />
      <Icon
        style={{
          color: "white",
          fontSize: "50px",
        }}
        type="caret-left"
        onClick={() => counter("previous")}
      />{" "}
      <Icon
        style={{
          color: "white",
          fontSize: "50px",
        }}
        type="caret-right"
        onClick={() => counter("next")}
      />{" "}
      <Repos className="span-col-3 center" users={users} count={count} />
    </div>
  );
}

export default App;
