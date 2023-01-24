import { useMatches, KBarResults } from 'kbar'
import ResultItem from './ResultItem'

const groupNameStyle = {
  padding: '8px 16px',
  fontSize: '12px',
}

export default function RenderResults () {
  const { results } = useMatches()
  return (
    <KBarResults
      items={results}
      onRender={({ item, active }) =>
        typeof item === 'string'
          ? <div style={groupNameStyle}>{item}</div>
          : <ResultItem action={item} active={active} />
    }
    />
  )
}
