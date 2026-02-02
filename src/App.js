import React from 'react';
import {BroswerRouter, Routes, Route} from 'react-router-dom';
import {Box} from '@mui/material'

const App = () => {
  return (
    <BroswerRouter>
    <Box sx={{backgroundColor: '#000'}}>
      
     <Navbar/>
      <Routes>
        <Route path="/" exact element = {<Feed />} />
        <Route path="/video/:id" element={<VideoDetail/>}></Route>
        <Route path="/channel/:id" element={<ChannelDetail/>}></Route>
        <Route path="/search/:searchTerm" element={<SearchFeed/>}></Route>
        <Route path="/video/ :id" element={<VideoDetail/>}></Route>

      </Routes>
    </Box>
    </BroswerRouter>
  )
}

export default App
