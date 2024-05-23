import React from 'react'
import {HashRouter, Route,Routes} from 'react-router-dom';
import BidList from './Frontend/BidList';
import BidUpload from './Frontend/BidUpload';
function Pathing() {
  return (
    <>
    <h1>hi</h1>
        <Routes>
            <Route path='/' element={<BidList/>}/>
            <Route path='/upLoad' element={<BidUpload/>}/>
        </Routes>
    </>
  )
}

export default Pathing;