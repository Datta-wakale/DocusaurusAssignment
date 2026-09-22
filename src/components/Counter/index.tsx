import { useState } from "react"

interface CounterProps {
    initialCount?: number,
}


export default function Counter({initialCount=0}: CounterProps) {

    const [count,setCount]= useState<number>(initialCount);

    const increament = ()=> {
        setCount(count=>count+1);
    }
    const decreament = ()=> {
        if(count > 0){
            setCount((prev)=> prev-1);
        }
    }
    return(
        <>
                <div>
                    <button onClick={increament}>++</button>
                    <span>{count}</span>
                    <button onClick={decreament}>--</button>
                </div>
        </>
    )
}