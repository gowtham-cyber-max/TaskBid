import React, { useState } from 'react'
import { db } from '../Backend/firebase';
import { collection, addDoc } from "firebase/firestore";
function BidUpload() {
    const [bidName,upName]=useState("");
    const collection_Ref=collection(db,"BidUpload")
    const upLoading=async(event)=>{
        try{
            event.preventDefault();
            if(bidName!=""){
                await addDoc(collection_Ref,{Name:bidName});
            }

        }
        catch(e){
            console.log(e);
        }
    }
  return (
    <div className="BidUpload">
        <h1>BidUpload</h1>
        <form onSubmit={upLoading}>
        <input type='text' ref={bidName}></input>
        <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default BidUpload