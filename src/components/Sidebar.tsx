import React, { useContext } from 'react'
import {
  Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent,
  SidebarGroupLabel, SidebarMenu, SidebarMenuButton,
  SidebarMenuItem,useSidebar 
} from "@/components/ui/sidebar"
import { faker } from '@faker-js/faker';
import { BookHeadphones } from 'lucide-react';
import { PlayingContext } from '@/App';

const urls = ["https://images.unsplash.com/photo-1543416862-d16de5c6909a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1737961755792-4175df6444b2?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1738763152586-38bcbb2024b2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI1fGhtZW52UWhVbXhNfHxlbnwwfHx8fHw%3D", "https://images.unsplash.com/photo-1738402431249-c463ce6c407b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://plus.unsplash.com/premium_vector-1689096738203-f70b160b4640?q=80&w=2362&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"]
const initialSongs = urls.map(url=>({url,title:faker.book.title()}))
const AppSidebar = () => {
  const {
    state,
   
  } = useSidebar()
  const {setPlayingSong} = useContext(PlayingContext)
  
  return (
    <Sidebar collapsible='icon' className='bg-black'>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
             <CustomTrigger />
              {initialSongs.map(song => {
                
                return(
                <><SidebarMenuItem key={song.url} className='mb-4' onClick={()=>setPlayingSong({isPlaying:true,song})}>
                  <SidebarMenuButton asChild className='h-20'
                
                 >
                    <a href="#" className='inline-flex py-0'>
                      <div className='w-[80px] h-20  rounded-md shrink-0'>
                        <img src={song.url} className='object-cover w-full h-full  rounded-md' />
                      </div>
                      <div className='inline-block w-[140px] align-top h-full relative'>
                    
                    <div className='inline-block w-[140px]'>
                      <span>{song.title}</span>
                    </div>
                    <div className='inline-block w-[140px]'>
                      <span className='text-gray-400'>播放清單</span>
                    </div>
                  </div>
                    </a>
                  </SidebarMenuButton>
                  {/* <div className='inline-block w-[140px] align-top py-2 relative'>
                    
                    <div className='inline-block w-[140px]'>
                      <span>{faker.book.title()}</span>
                    </div>
                    <div className='inline-block w-[140px]'>
                      <span className='text-gray-400'>播放清單</span>
                    </div>
                  </div> */}
                </SidebarMenuItem></>
              )})}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}



export function CustomTrigger() {
  const { toggleSidebar,state } = useSidebar()

  return <button onClick={toggleSidebar} className='text-left'>
    {state==='expanded'?
    (<>
    <BookHeadphones size={32} className='inline text-left'/>
    <div className='align-top inline-block ml-2 text-lg'>
    <span className='text-gray-400 hover:text-white'>你的音樂庫</span>
    </div>
    </>):<BookHeadphones size={64} className=''/>}
    </button>
}

export default AppSidebar
