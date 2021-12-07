import React from 'react'
import {
  Box,
  Loader
} from './styles'

interface LoadingProps {
  hasLoading?: boolean
  size?: string
}

export const Loading = ({ hasLoading, size }: LoadingProps) => {
  return (
    <Box>
      {
        hasLoading ? <p>Loading</p> : <></>
      }
      <Loader size={size}>
      </Loader>
    </Box>
  )
}
