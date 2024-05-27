import React, { useRef, useState } from 'react'
import { db } from '../Backend/firebase';
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { storage } from '../Backend/firebase';
import { ref, uploadBytes } from 'firebase/storage';
import {v4} from "uuid";
function BidUpload() {
    const [data, setData] = useState({
        bidName: '',
        latitude:'',
        longitude:'',
        bidDescription: '',
        LastDate:'',
    });
    const [image, setImage] = useState(null);
    const collection_Ref=collection(db,"BidUpload");
    const upLoading=async(event)=>{
        try{
            event.preventDefault();
            getLocation();
            if(data.bidName.length>2){
                 await addDoc(collection_Ref,{
                    data,
                     cur_date:serverTimestamp()});
                     
             }
             else{
                 alert("hello please give the details");
             }
             if(image==null){
                alert("upload the image of task for reference")}
             else{
                    const img_ref=ref(storage,`Bid-image/${ data.bidName  }`);
                    uploadBytes(img_ref,image).then(()=>{
                        alert("submit sucess");
                    })
             }

        }
        catch(e){
            console.log(e);
        }
    }
    const getLocation=()=>{
        if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position)=>{
           setData({...data, latitude:position.coords.latitude});
             setData({...data, longitude:position.coords.longitude});
            });
        }
        else{
            alert("Please allow the location for the task Location");
        }
    }
    const uploadImage=()=>{

    }
  return (
    <div className="BidUpload">
        <h1>BidUpload</h1>
        <form onSubmit={upLoading}>
        <input type='text' onChange={(e)=>{setData({...data,bidName:e.target.value})}} value={data.bidName} placeholder='name'></input>
        <textarea onChange={(e)=>{setData({...data,bidDescription:e.target.value})}} value={data.bidDescription}></textarea>
        <input type='date' onChange={(e)=>{setData({...data,LastDate:e.target.value})}} value={data.LastDate} placeholder='Last date'></input> 
        <input type='file' onChange={(e)=>{setImage(e.target.files[0])}} ></input>     
        <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default BidUpload