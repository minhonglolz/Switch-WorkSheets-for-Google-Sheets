import './App.css'
import { useState } from 'react'
import {
  KBarProvider,
  KBarPortal,
  KBarPositioner,
  KBarAnimator,

  Action,
  createAction,
} from 'kbar'
import RenderResults from '../Components/RenderResults'
import ActionHandler from '../Components/ActionHandler'
import { KBarSearch } from '../Components/KBarSearch'

const animatorStyle = {
  maxWidth: '600px',
  width: '100%',
  borderRadius: '8px',
  overflow: 'hidden',
  background: '#fff',
  boxShadow: '0px 6px 20px rgb(0 0 0 / 20%)',
}

const searchStyle = {
  padding: '16px',
  fontFamily: '\'Source Code Pro\', monospace',
  fontSize: '16px',
  width: '100%',
  outline: 'none',
  border: 'none',
}

function App () {
  const [actions, setActions] = useState<Action[]>()

  const handleOpen = () => {
    const tabsDocument = document.querySelectorAll('.docs-sheet-tab')
    const tabsName = [...tabsDocument].map((item) => item.querySelector('span')?.textContent || '')
    const tabsAction = tabsName.map((tab, index) => createAction({
      name: tab,
      shortcut: [...tab.at(0)?.toLocaleLowerCase() ?? ''],
      keywords: tab.at(0),
      perform: () => tabsDocument[index].dispatchEvent(new MouseEvent('mousedown', { bubbles: true })),
    }))
    setActions(tabsAction)
  }

  return (
    <KBarProvider actions={actions} options={{ callbacks: { onOpen: handleOpen }, toggleShortcut: '$mod+e' }}>
      <KBarPortal>
        <KBarPositioner>
          <KBarAnimator style={animatorStyle}>
            <KBarSearch style={searchStyle} defaultPlaceholder="搜索工作表" />
            <RenderResults />
            {Array.isArray(actions) && actions?.length > 0 &&
              <ActionHandler action={actions} />}
          </KBarAnimator>
        </KBarPositioner>
      </KBarPortal>
    </KBarProvider>
  )
}

export default App
