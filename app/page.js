"use client"
import Image from "next/image";
import { useState } from "react";
// import { logServerMessage } from "./actions";

export default function Home() {

  const[count, setCount] = useState(1);
  const increment=()=>{
    setCount(count+1);
    console.log(count)
  }

  const handleClick = async () => {
    let data = {
      name: 'pranav',
      role: 'coder'
    };
  
    let response = await fetch("/api/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
  
    let result = await response.json();
    console.log(result); 
  };
  

  return (
    <div>
      <h1>This is home page</h1>
      <p>Count is {count}</p>
      <button onClick={increment}>Click here</button>

      <button  className="border-2" onClick={handleClick}>API Click</button>
    </div>
  );
}
