import React from 'react'

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"


const RecommendedList = () => {
    
    const urls = ["https://images.unsplash.com/photo-1739212513268-f07e6c7f5172?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMwfGhtZW52UWhVbXhNfHxlbnwwfHx8fHw%3D","https://images.unsplash.com/photo-1737961755792-4175df6444b2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM4fGhtZW52UWhVbXhNfHxlbnwwfHx8fHw%3D","https://images.unsplash.com/photo-1738705466275-1f94be26c5bd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQ1fGhtZW52UWhVbXhNfHxlbnwwfHx8fHw%3D","https://images.unsplash.com/photo-1738612543590-b93b261dbd8f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDU0fGhtZW52UWhVbXhNfHxlbnwwfHx8fHw%3D","https://images.unsplash.com/photo-1509628061459-1328d06c2ced?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQ4fEpwZzZLaWRsLUhrfHxlbnwwfHx8fHw%3D"]
    
    return (
        <div className="w-full my-10 p-2">
<h2 className='font-bold mb-4'>專為你打造</h2>
        <div className='w-5/6 mx-auto'>
            
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}>
                <CarouselContent className="">
                    {urls.map((url,index)=>
                    <CarouselItem className="basis-1/3 @2xl:basis-1/4  aspect-square  pl-2 @2xl:pl-4 text-white cursor-pointer  flex justify-center items-center" key={index}>
                        
                           <div  className=' w-[95%] h-[95%] rounded-lg flex justify-center items-center hover:bg-gray-700'>

                           <img src={url} className='object-cover w-[95%] h-[95%] rounded-lg'/>
                           </div>
                        
                        
                        </CarouselItem>)}
                    
                </CarouselContent>
                <CarouselPrevious className='text-black'/>
                <CarouselNext className='text-black'/>
            </Carousel>

        </div>
        </div>
    )
}

export default RecommendedList
