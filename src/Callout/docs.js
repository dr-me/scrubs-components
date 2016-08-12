/* @flow */

import React from 'react'
import { Callout, } from '../'
import CalloutString from '!raw!..//Callout'
import { parse, } from 'react-docgen'
import { Paragraph, PrimaryButton, } from '../'

const example: React.Element<any> = (
  <Callout>
    <Paragraph centered>
      Please select a pharmacy to have your prescription sent to.
    </Paragraph>
    <PrimaryButton>
      Select a Pharmacy
    </PrimaryButton>
  </Callout>
)

const documentation: Object = parse(CalloutString)
export default { example, documentation, }
