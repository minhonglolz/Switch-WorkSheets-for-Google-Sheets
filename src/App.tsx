import './App.css'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import produce from 'immer'
import {
  KBarProvider,
  KBarPortal,
  KBarPositioner,
  KBarAnimator,
  KBarSearch,
  useMatches,
  NO_GROUP,
  KBarResults,
} from 'kbar'

const actions = [
  {
    id: 'blog',
    name: 'Blog',
    shortcut: ['b'],
    keywords: 'writing words',
    perform: () => (window.location.pathname = 'blog'),
  },
  {
    id: 'contact',
    name: 'Contact',
    shortcut: ['c'],
    keywords: 'email',
    perform: () => (window.location.pathname = 'contact'),
  },
]

function RenderResults () {
  const { results } = useMatches()
  console.log(results)
  return (
    <KBarResults
      items={results}
      onRender={({ item, active }) =>
        typeof item === 'string'
          ? (
            <div>{item}</div>
            )
          : (<div
              style={{
                background: active ? '#eee' : 'transparent',
              }}
             >
            {item.name}
          </div>)
      }
    />
  )
}

function App () {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount((state) => state)
  }

  return (
    <KBarProvider actions={actions}>
      <KBarPortal>
        <KBarPositioner>
          <KBarAnimator>
            <KBarSearch />
            <RenderResults />
          </KBarAnimator>
        </KBarPositioner>
      </KBarPortal>
      <div className="App">
        <h1 className="text-3xl font-bold underline ">
          Hello world!
        </h1>
        <div>
          <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
            <img src="/vite.svg" className="logo" alt="Vite logo" />
          </a>
          <a href="https://reactjs.org" target="_blank" rel="noreferrer">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={handleClick}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </KBarProvider>
  )
}

export default App
