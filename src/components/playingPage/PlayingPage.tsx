import { PlayingContext } from '@/App'
import { X } from 'lucide-react'
import React,{useContext} from 'react'


const PlayingPage = () => {
  const url = "https://images.unsplash.com/photo-1729796546683-7130bf7e26ab?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D"
  const style = {
    background:`url(${url})`,
    
  }
  const {playingSong,setPlayingSong} = useContext(PlayingContext)
return (
    <div className='bg-black rounded-lg h-full'>
      <div className='relative  w-[400px] h-full'>
        <div className='rounded-lg w-full h-[533px] absolute top-0 left-0 bg-gradient-to-t from-black/80 via-black/40 to-black/80 hover:from-black/40 hover:via-transparent hover:to-black/40'></div>
          <header className='rounded-lg flex justify-between absolute top-0 left-0 w-full text-white p-2'>
            <h2>{playingSong.song.title}</h2>
            <X className='cursor-pointer' onClick={()=>setPlayingSong({isPlaying:false})}/>
          </header>
          <img src={playingSong.song.url} alt="" className='rounded-lg w-full h-[533px] object-cover' />
          
      </div>

      
      
      
      
    </div>
  )
}

export default PlayingPage
