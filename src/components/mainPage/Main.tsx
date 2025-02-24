import React from 'react'
import RecommendedList from './recommendedList'
import RecentlyPlayedList from './RecentlyPlayedList'

const Main = () => {
  
  return (
    
    <div className="@container w-full min-w-[400px] rounded-lg h-full bg-gradient-to-b from-gray-600 to-black !bg-black text-gray-200" >
      <RecentlyPlayedList/>
      <RecommendedList/>
  
  </div>
  )
}

export default Main
