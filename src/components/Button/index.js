import React from 'react'

import { ButtonStyle } from './styles';

export default function Button({label, disabled}) {
  return (
    <ButtonStyle disabled={disabled}>{label}</ButtonStyle>
  )
}
