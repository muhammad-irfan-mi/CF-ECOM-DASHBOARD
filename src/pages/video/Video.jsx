import React, { useContext } from 'react'
import video1 from '../../assets/video/video1.mp4'
import video2 from '../../assets/video/video2.mp4'
import { ThemeContext } from '../../context/ContextProvider'

function Video() {
    const video = [
        { name: video1 , publisher:"Jack Sparow"},
        { name: video2 , publisher:"The Professor"},
        { name: video2 , publisher:"The Professor"}
    ]
    const context = useContext(ThemeContext)
    return (
        <div className='bg-[#edeeef] h-[89vh] overflow-auto p-5'>
            <h3 className='text-3xl font-semibold'>Order</h3>
            <div className='flex items-center gap-5 my-5'>
                {video.map((video, i) => {
                    return <div className={`${context.colors.boxbg} p-3 rounded-lg `}>
                        <video controls muted  src={video.name} className='w-full '></video>
                        <h3 className='text-lg font-semibold mt-1'>Order</h3>
                        <h3 className='text-lg font-semibold mt-1'>{video.publisher}</h3>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Video
