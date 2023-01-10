import { UpgradeItem } from '../UpgradeItem'
import { closeModalSceneAtom } from '../../../globalAtoms'
import { useRecoilValue } from 'recoil'
import { ModalComponent } from '../../_modal/ModalComponent'
import * as S from './UpgradeScreen.styles'

const UpgradeScreen = () => {
  return (
    <S.UpgradeScreenContainer>
      <h1>Upggrades</h1>
      <S.UpgradeItemList>
        <S.UpgradeGroup>
          <UpgradeItem cost={50} level={1} name={'Basic'} />
          <UpgradeItem cost={80} level={2} name={'Basic II'} />
          <UpgradeItem cost={120} level={3} name={'Basic III'} />
          <UpgradeItem cost={1700} level={1} name={'Basic IV'} />
        </S.UpgradeGroup>

        <S.UpgradeGroup>
          <UpgradeItem cost={50} level={1} name={'Basic'} />
          <UpgradeItem cost={80} level={2} name={'Basic II'} />
          <UpgradeItem cost={120} level={3} name={'Basic III'} />
          <UpgradeItem cost={1700} level={1} name={'Basic IV'} />
        </S.UpgradeGroup>

        <S.UpgradeGroup>
          <UpgradeItem cost={50} level={1} name={'Basic'} />
          <UpgradeItem cost={80} level={2} name={'Basic II'} />
          <UpgradeItem cost={120} level={3} name={'Basic III'} />
          <UpgradeItem cost={1700} level={1} name={'Basic IV'} />
        </S.UpgradeGroup>

        <S.UpgradeGroup>
          <UpgradeItem cost={50} level={1} name={'Basic'} />
          <UpgradeItem cost={80} level={2} name={'Basic II'} />
          <UpgradeItem cost={120} level={3} name={'Basic III'} />
          <UpgradeItem cost={1700} level={1} name={'Basic IV'} />
        </S.UpgradeGroup>

        <S.UpgradeGroup>
          <UpgradeItem cost={50} level={1} name={'Basic'} />
          <UpgradeItem cost={80} level={2} name={'Basic II'} />
          <UpgradeItem cost={120} level={3} name={'Basic III'} />
          <UpgradeItem cost={1700} level={1} name={'Basic IV'} />
        </S.UpgradeGroup>
      </S.UpgradeItemList>
    </S.UpgradeScreenContainer>
  )
}

export function UpgradeScreenModal() {
  const { closeModal } = useRecoilValue(closeModalSceneAtom)

  return <ModalComponent handleCloseModalComponent={closeModal} component={<UpgradeScreen />} />
}
