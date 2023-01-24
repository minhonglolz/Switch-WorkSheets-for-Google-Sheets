import { ActionImpl, ActionId } from 'kbar'
import { Ref, useMemo, Fragment, forwardRef } from 'react'

type Props = {
  action: ActionImpl,
  active: boolean,
}

function ResultItem ({ action, active }: Props,
  ref: Ref<HTMLDivElement>) {
  return (
    <div
      ref={ref}
      style={{
        margin: '2px 8px',
        padding: '8px 8px',
        color: active ? 'white' : 'black',
        background: active ? '#ff641e' : '#fff',
        borderRadius: '8px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        cursor: 'pointer',
      }}
    >
      <div
        style={{
          display: 'flex',
          gap: '8px',
          alignItems: 'center',
          fontSize: 14,
        }}
      >
        {action.icon && action.icon}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span>{action.name}</span>
          {action.subtitle && <span style={{ fontSize: 12, opacity: 0.75 }}>{action.subtitle}</span>}
        </div>
      </div>
      {action.shortcut?.length && (
        <div style={{ display: 'grid', gridAutoFlow: 'column', gap: '4px' }}>
          {action.shortcut.map((sc) => (
            <kbd
              key={sc}
              style={{
                padding: '4px 6px',
                background: 'rgba(0 0 0 / .1)',
                borderRadius: '4px',
                fontSize: 14,
              }}
            >
              {sc}
            </kbd>
          ))}
        </div>
      )}
    </div>
  )
}

export default forwardRef(ResultItem)
