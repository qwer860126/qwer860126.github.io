import { Calendar, Home, Inbox, Search, Settings } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem, SidebarProvider, SidebarTrigger
} from "@/components/ui/sidebar"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import AppSidebar from "./components/Sidebar"
import { faker } from "@faker-js/faker"
import RecentlyPlayedList from "./components/mainPage/RecentlyPlayedList"
import Main from "./components/mainPage/Main"
import PlayingPage from "./components/playingPage/PlayingPage"
import { useState,createContext } from "react"




export const PlayingContext = createContext(null)

export function App() {
  
  const [playingSong,setPlayingSong] = useState({})
  
  return (

    <SidebarProvider>
        <PlayingContext.Provider value={{playingSong,setPlayingSong}}>
          <AppSidebar />
          <main className="w-full h-full flex gap-6 bg-gray-700">
              <Main/>
              {playingSong.isPlaying&& <PlayingPage/>}
          </main>

        </PlayingContext.Provider>
      
    </SidebarProvider>
  )
}

function ApppSidebar() {
  return (
    <Sidebar collapsible="icon">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}







export default App
