import React from 'react'
import { USER_IMG } from '../utils/constants'

const ChatMessage = ({name, message}) => {
  return (
    <div>
    <div className='flex items-center'>
        <img
        className="w-10 h-10 mx-2"
        alt="user"
        src= {USER_IMG}
        />
        <div>
            <span className='ms-1 me-1.5 font-bold'>{name}</span>
            <span>{message}</span>
        </div>
    </div>
    </div>
  )
}

export default ChatMessage