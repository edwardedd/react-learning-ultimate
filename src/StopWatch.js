import React, {useState, useEffect} from "react";
import './Stopwatch.css';

const Stopwatch = () => {
    const [time, setTime] = useState(0);
    const [counterActive, setCounterActive] = useState(true);

    useEffect(() => {
        let interval = null;
        if (counterActive){
            interval = setInterval(() => {
                setTime(t => t +1);
                console.log('set time,', time)
            }, 1000);
        }

        return () => {
            clearInterval(interval)
        };
    }, [counterActive])

    const onClickHandler = () => {
        setCounterActive(c => !c)
    }

    const formattedTime = new Date(1000 * time).toISOString().substr(11, 8)

    return(
        <section>
            <h1>Stopwatch</h1>
            <span>{formattedTime}</span>
            <button onClick={onClickHandler} aria-pressed={!counterActive}>stop watch</button>
        </section>
    )
}

export default Stopwatch
