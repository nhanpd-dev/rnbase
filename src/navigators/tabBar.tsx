import React from 'react'
import { Text, View } from 'react-native'
import { BottomTabBarProps } from '@react-navigation/bottom-tabs'
import styled from 'styled-components'

const Container = styled(View)`
  display: flex;
  flex-direction: row;
  height: 57px;
`

const TabBars: React.FC<BottomTabBarProps> = props => {
  const { state } = props
  return (
    <Container>
      {state.routes.map(route => (
        <View>
          <Text>{route.name}</Text>
        </View>
      ))}
    </Container>
  )
}

export default TabBars
