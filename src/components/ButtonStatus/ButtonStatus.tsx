import { ButtonInfo } from '../ButtonInfo'
import { useRecoilValue } from 'recoil'
import { openModalSceneAtom } from '../../globalAtoms'
import { SpyDataModal } from '../SpyData'
import { MessageScreenModal } from '../MessageScreen'
import type { ButtonStatusProps } from './ButtonStatus.types'
import * as S from './ButtonStatus.styles'

export function ButtonStatus({ value }: ButtonStatusProps) {
  const { openModal } = useRecoilValue(openModalSceneAtom)

  return (
    <S.ButtonStatusContainer>
      <ButtonInfo text={'Energy: 10'} />
      <ButtonInfo text={'Pods: 2'} />
      <ButtonInfo text={'Machines: 1'} />
      <ButtonInfo text={'Agents: 0'} />
      <ButtonInfo text={'Spy: 0'} onClick={() => openModal(<SpyDataModal />)} />
      <ButtonInfo text={'Messages: 1'} onClick={() => openModal(<MessageScreenModal />)} />
    </S.ButtonStatusContainer>
  )
}
