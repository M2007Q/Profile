import { useState } from "react"
import "./comment.css"
export default function comment(){
    const [text, settext]=useState('');
    return(
 
     
    <div className="comecontainer">
    <textarea  className="area" value={text} onChange={(e)=>settext(e.target.value)} placeholder="Type your message here..."></textarea>
    <button className="sendcome" onClick={async()=>{
     const res=await fetch("http://localhost:2026/comment", { method:"POST",headers:{'Content-Type':'application/json'}, body:JSON.stringify({text:text})}

     );
     const data= await res.json();
     alert(data.message); setText('');
    }}  >Comment</button>
    </div>

    )
}