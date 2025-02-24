import React, { useContext, useEffect, useState } from 'react'
import { faker } from '@faker-js/faker';
import { PlayingContext } from '@/App';

const urls = ["https://images.unsplash.com/photo-1729796546683-7130bf7e26ab?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D","https://images.unsplash.com/photo-1729864210133-aaee297d61c3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8OXx8fGVufDB8fHx8fA%3D%3D","https://images.unsplash.com/photo-1727640851509-0aad71367678?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTN8fHxlbnwwfHx8fHw%3D","https://images.unsplash.com/photo-1730062758028-bc8c44efd14f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjZ8fHxlbnwwfHx8fHw%3D","https://images.unsplash.com/photo-1713687552551-94354afc0231?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjV8fHxlbnwwfHx8fHw%3D","https://images.unsplash.com/photo-1730099364672-7d9238114698?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mjd8fHxlbnwwfHx8fHw%3D","https://images.unsplash.com/photo-1730196343100-1d3e4e5dd492?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MzF8fHxlbnwwfHx8fHw%3D","https://images.unsplash.com/photo-1730136804782-27c6a7d149f3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NDJ8fHxlbnwwfHx8fHw%3D"]
const initialSongs = urls.map(url=>({url,title:faker.book.title()}))
const RecentlyPlayedList = () => {
  
  
  
  const {setPlayingSong} = useContext(PlayingContext)
    return (
    <div className='inline-blcok p-2 bg-transparent transparent-parent '>
      <h2 className='font-bold mt-10 mb-4'>最近播放</h2>
      
      <ul className='@[840px]:grid-cols-4 grid-cols-2 grid gap-2 cursor-pointer text-xs @lg:text-base'>
        {initialSongs.map(song=>{
          const title = song.title
          const renderedTitle = title.length > 16?title.substring(0,15) + '...' : title
          return(
            <li className='h-10  align-top flex !bg-gray-200/10 hover:!bg-gray-200/30 rounded-md gray'
                onClick={()=>setPlayingSong({isPlaying:true,song})}
            >
                <div className='h-10 w-10'>
                    <img src={song.url} alt="" className='object-cover w-full h-full rounded-md'/>
                </div>
                <span className='p-2'>{renderedTitle}</span>
                
            </li>
        )})}
      </ul>
    </div>
  )
}

export default RecentlyPlayedList
