import React,{useState,useEffect} from 'react';
const App = () =>{
    const [Loading,isLoading] = useState(true);
    useEffect(()=>{
        setTimeout(()=>{
            isLoading(!Loading)
        }, 6000)
    })
    return(
        <div>{Loading ? "Loading...": "we are ready"}</div>
    );
}

export default App;
