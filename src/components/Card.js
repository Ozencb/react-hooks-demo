import React, { useState } from 'react';
import useKey from 'use-key-hook';
import { useFetch } from './FetchHook';
import Profiles from './Profiles'; // Components can be import like this
import Repos from './Repos';

// Styles
import '../styles/Card.css';
import '../styles/Ripple.css';
import 'font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

function Card(){
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

    let userCount = loading ? 0 : Number(JSON.parse(JSON.stringify(users)).length);

    const navigateNext = () => {
        setCount(count => count === userCount - 1 ? 0 : count + 1);
    }

    const navigateBack = () => {
        setCount(count => count === 0 ? userCount - 1 : count - 1);
    }

    useKey((pressedKey) => { // Keypress effect hook. Triggered with left/right keypress
        if (pressedKey === 39) {
            navigateNext();
        } else if (pressedKey === 37) {
            navigateBack();
        }
        
    }, {detectKeys: [39, 37]},
    {dependencies: [userCount]});

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
        <div className="loading">
            <div></div>
        </div> 
        ) : (
        <div className="card animate-bottom">
            <FontAwesomeIcon className="left-arrow button" icon={faAngleLeft} size="3x" onClick={() => navigateBack()} />{" "}
            <div className="content">
                <Profiles users={users} count={count} />
                <Repos users={users} count={count} />
            </div>
            <FontAwesomeIcon className="right-arrow button" icon={faAngleRight} size="3x" onClick={() => navigateNext()} />{" "}
        </div>
    );
}

export default Card;