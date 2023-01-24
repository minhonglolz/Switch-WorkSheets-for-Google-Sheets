import { Action, useRegisterActions } from 'kbar'

type Props = {action: Action[] }

export default function ActionHandler ({ action }: Props) {
  useRegisterActions(action)
  return null
}
