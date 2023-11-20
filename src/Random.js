import React, {useState}from "react";
const list = [
    {id: 1,name: 'qwerty 1', topDestination: true},
    {id: 2,name: 'qwerty 2', topDestination: false},
    {id: 3,name: 'qwerty 3', topDestination: true},
    {id: 4,name: 'qwerty 4', topDestination: false},
    {id: 5,name: 'qwerty 5', topDestination: false},
]

const UltiList = () => {
    const [showAll, setShowAll]=useState(true);
    return (
        <section>
            <h1>Ultimate list</h1>
            {list
                .filter(item => (showAll ? true : item.topDestination))
                .map(item => (
                    <li key={item.id.toString()}>{item.name}</li>
                ))
            }
            <button
                onClick={() => {setShowAll(true)}}
                type='button'> Show all</button>
            <button
                onClick={() => {setShowAll(false)}}
                type='button'> Show top destination</button>
        </section>
    )
}

export default UltiList
