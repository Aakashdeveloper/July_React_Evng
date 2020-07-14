import React,{useState} from 'react';

function HooksComponent(){
    const [title] = useState('DeveloperFunnel');
    const [subheading] = useState('React Hooks');
    const [counter,setCount] = useState(0);

    return(
        <div>
            <h1>{title}</h1>
            <h2>{subheading}</h2>
            <h2>{counter}</h2>
            <button onClick={() => {setCount(counter+1)}}>
                Counter
            </button>
        </div>
    )
}

export default HooksComponent;
