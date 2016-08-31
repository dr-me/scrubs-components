import React from 'react'
import Base from './Base'

const Text = (props) => {
  return (
    <Base
      fontFamily='sans' textColour='blueDark' antialiased fontSize={4}
      lineHeight={1} {...props}
    />
  )
}

export default Text
