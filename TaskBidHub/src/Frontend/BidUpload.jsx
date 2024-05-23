import React, { useRef, useState } from 'react'
import { db } from '../Backend/firebase';
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
function BidUpload() {
    const bidName=useRef("");
    const biddesc=useRef("");
    const bidLastDate=useRef();
    const [latitude,updateLatitude]=useState();
    const [altitude,updateAltitude]=useState();
    const collection_Ref=collection(db,"BidUpload");
    const upLoading=async()=>{
        try{
            
            getLocation();
            console.log(bidName.value)
            if(bidName.value){
                await addDoc(collection_Ref,{
                    Name:bidName.current,
                    Description:biddesc,
                    LastDate:bidLastDate,
                    latitude:latitude,
                    altitude:altitude,
                    date:serverTimestamp});
            }
            else{
                alert("hello please give the details");
            }

        }
        catch(e){
            console.log(e);
        }
    }
    const getLocation=()=>{
        if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position)=>{
           updateLatitude(position.coords.latitude);
             updateAltitude(position.coords.altitude);
            });
        }
        else{
            alert("Please allow the location for the task Location");
        }
    }
  return (
    <div className="BidUpload">
        <h1>BidUpload</h1>
        <form onSubmit={upLoading}>
        <input type='text' ref={bidName} placeholder='name'></input>
        <textarea itemRef={biddesc}></textarea>
        <input type='date' ref={bidLastDate} placeholder='Last date'></input>
        <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default BidUpload