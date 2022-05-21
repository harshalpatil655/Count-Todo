import React from "react";
import styles from "./todo.module.css"


const Counter=()=>{
    const [count,setCount]= React.useState(0);

    return <div className={styles.hola}>
        <h1 className={count%2!==0 ? styles.hola1: styles.hola2}>Counter App {count}</h1>

        <button onClick={()=>setCount(count+1)}>Increment</button>
        <button onClick={()=>setCount(count-1)}>Decrement</button>
        <button onClick={()=>{
            setCount(count*2)
        }}>double</button>
    </div>
}

export default Counter;