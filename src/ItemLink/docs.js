/* @flow */

import React from 'react'
import ItemLinkString from '!raw!..//ItemLink'
import { parse } from 'react-docgen'
import { ItemLink, Text, Row, Action, } from '../'

const example: React.Element<any> = (
  <ItemLink>
    <Row>
      <Text small bold>Amoxicillin</Text>
      <Action icon="arrowRight" iconSide="right">View</Action>
    </Row>
    <Row>
      <Text small>5mg capsule</Text>
    </Row>
  </ItemLink>
)

const documentation: Object = parse(ItemLinkString)
export default { example, documentation, }
