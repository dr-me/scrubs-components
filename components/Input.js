import React from 'react'
import Base from './Base'

const Input = (props) => {
  return (
    <Base
      tagName='input' textBlueDark borderGrey border={1}
      padding={2} sans rounded fontSize={5} fillWidth
      antialiased lineHeight={3} bgGrey {...props}
    />
  )
}

export default Input
