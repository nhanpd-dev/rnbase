import React, { useState } from 'react'
import {
  TextInputProps as RNTextInputProps,
  Text,
  ImageURISource,
} from 'react-native'

import { useController, useFormContext, UseControllerProps } from 'react-hook-form'
import styled from 'styled-components/native'

interface TextInputProps extends RNTextInputProps, UseControllerProps {
  label?: string
  defaultValue?: string
  icon?: ImageURISource
}

const Wrapper = styled.View``;
const RNTextInput = styled.TextInput`
  width: 100px;
  height: 36px;
  border-radius: ${({theme}) => theme.spacing.medium};
`;

export const TextInput: React.FC<TextInputProps> = props => {
  const { control } = useFormContext()
  const { label, name, rules, defaultValue, icon, ...inputProps } = props

  const {
    field: { onChange, value },
    fieldState: { error },
  } = useController({ name, control, rules, defaultValue })
  if (!control || !name) {
    const msg = !control ? 'TextInput must be wrapped by the FormProvider' : 'Name must be defined'
    console.error(msg)
    return null
  }
  return (
    <Wrapper>
      <RNTextInput
        onChangeText={onChange}
        value={value}
        placeholderTextColor="rgba(0, 0, 0, 0.5)"
        {...inputProps}
      />
      {error && <Text style={{ marginTop: 4, color: 'red' }}>{error.message}</Text>}
    </Wrapper>
  )
}
