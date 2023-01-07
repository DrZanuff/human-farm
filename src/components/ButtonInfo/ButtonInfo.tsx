import { Button } from '@mui/material'
import type { ButtonInfoProps } from './ButtonInfo.types'
import * as S from './ButtonInfo.styles'

export function ButtonInfo({ text, ...rest }: ButtonInfoProps) {
  return (
    <Button {...rest} variant="contained" size="large" sx={{ minWidth: '150px' }}>
      {text}
    </Button>
  )
}
