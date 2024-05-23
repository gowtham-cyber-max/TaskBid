import React from 'react'
import {Route,Routes} from 'react-router-dom';
import BidList from './Frontend/BidList';
import BidUpload from './Frontend/BidUpload';
function Pathing() {
  return (
    <>
        <Routes>
            <Route path='/' element={<BidList/>}/>
            <Route path='/upLoad' element={<BidUpload/>}/>
        </Routes>
    </>
  )
}

export default Pathing;