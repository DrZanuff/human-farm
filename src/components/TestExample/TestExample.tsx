import type { TestExampleProps } from './TestExample.types'
import { Button } from '@mui/material'
import { SaveAlt } from '@mui/icons-material'
import * as S from './TestExample.styles'

export function TestExample({ value }: TestExampleProps) {
  return (
    <S.TestExampleContainer>
      <h1>TestExample</h1>
      <h2>{value}</h2>
      <Button>
        <SaveAlt />
      </Button>
    </S.TestExampleContainer>
  )
}
