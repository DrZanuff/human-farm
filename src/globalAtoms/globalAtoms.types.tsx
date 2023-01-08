import { ReactNode } from 'react'

export type CurrentModalSceneTypeAtom = ReactNode

export interface OpenModalSceneInterfaceAtom {
  openModal: (component: ReactNode) => void
}

export interface CloseModalSceneInterfaceAtom {
  closeModal: () => void
}
