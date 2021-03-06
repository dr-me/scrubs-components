/* @flow */

import React from 'react'
import ItemLinkString from '!raw!..//ItemLink'
import { parse } from 'react-docgen'
import { ItemLink, Text, Row, Action } from '../'

const Example = (): React.Element<*> => {
  return (
    <ItemLink>
      <Row>
        <Text size='h5' bold>Amoxicillin</Text>
        <Action icon="arrowRight" iconSide="right">View</Action>
      </Row>
      <Row>
        <Text size='h5'>5mg capsule</Text>
      </Row>
    </ItemLink>
  )
}

const documentation: Object = parse(ItemLinkString)
export default { Example, documentation }
