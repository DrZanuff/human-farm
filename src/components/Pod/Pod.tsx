import type { PodProps } from './Pod.types'
import { Button } from '@mui/material'
import * as S from './Pod.styles'

export function Pod({ value }: PodProps) {
  return (
    <S.PodContainer>
      <Button
        variant="contained"
        color="success"
        size="large"
        sx={{ maxHeight: '180px', minWidth: '120px', minHeight: '180px' }}>
        POD
      </Button>
    </S.PodContainer>
  )
}
