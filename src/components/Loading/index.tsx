import React from 'react'
import {
  Box
} from './styles'

export const Loading = () => {
  return (
    <Box>
      <div className='loader'>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </Box>
  )
}
