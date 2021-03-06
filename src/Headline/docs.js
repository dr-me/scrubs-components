/* @flow */

import React from 'react'
import HeadlineString from '!raw!..//Headline'
import { parse } from 'react-docgen'
import { Headline, } from '../'

const Example = (): React.Element<*> => {
  return <Headline>Consultation with Dr Mark Edmin</Headline>
}

const documentation: Object = parse(HeadlineString)
export default { Example, documentation }
