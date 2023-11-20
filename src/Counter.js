import React, {Fragment, useEffect, useState} from "react";


const Counter = () => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        document.title = `Counter set to ${counter} | Ultimate`;
        console.log('Title was set')
    }, [counter])

    useEffect(() => {
        const saveCounter = localStorage.getItem('counter');
        if (saveCounter !== null){
            setCounter(parseInt(saveCounter, 10))
        }
    }, [])

    const ocCountClickHandler = () => {
        setCounter(c => c + 1)
    }


    const onSaveClickHandler = () => {
        localStorage.setItem('counter', counter)
    }


    return (
        <Fragment>
            <h1>testy</h1>
            <p>{counter}</p>
            <button onClick={ocCountClickHandler}>Increment</button>
            <button onClick={onSaveClickHandler}>Save</button>
        </Fragment>
    )
}

export default Counter;
