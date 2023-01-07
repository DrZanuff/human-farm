import type { LinearBarProps } from './LinearBar.types'
import { LinearProgress, Box } from '@mui/material'
import * as S from './LinearBar.styles'

export function LinearBar({ value }: LinearBarProps) {
  return (
    <S.LinearBarContainer>
      <Box sx={{ width: '90%' }}>
        <LinearProgress variant="determinate" value={40} />
      </Box>
    </S.LinearBarContainer>
  )
}
