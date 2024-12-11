import React from 'react';
import { TextInputProps as RNTextInputProps, Text, ImageURISource, TextInput as RNTextInput } from 'react-native';

import { useController, useFormContext, UseControllerProps } from 'react-hook-form';
import styled from 'styled-components/native';
import { translate } from '@/localization/translate';
import { TxKeyPath } from '@/localization/types';

interface TextInputProps extends RNTextInputProps, UseControllerProps {
  defaultValue?: string;
}

const Wrapper = styled.View`
  border-width: 1px;
  border-radius: ${({ theme }) => theme.spacing.md};
  height: 42px;
  padding-left: ${({ theme }) => theme.spacing.sm};
  padding-right: ${({ theme }) => theme.spacing.sm};
  justify-content: center;
`;

export const TextInput: React.FC<TextInputProps> = props => {
  const { control } = useFormContext();
  const { name, rules, defaultValue, ...inputProps } = props;

  const {
    field: { onChange, value },
    fieldState: { error },
  } = useController({ name, control, rules, defaultValue });
  if (!control || !name) {
    const msg = !control ? 'TextInput must be wrapped by the FormProvider' : 'Name must be defined';
    console.error(msg);
    return null;
  }
  return (
    <>
      <Wrapper>
        <RNTextInput onChangeText={onChange} value={value} placeholderTextColor="rgba(0, 0, 0, 0.5)" {...inputProps} />
      </Wrapper>
      {error && <Text style={{ marginTop: 4, color: 'red' }}>{translate(error.message as TxKeyPath)}</Text>}
    </>
  );
};
