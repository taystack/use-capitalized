import React from 'react'
import { useMyHook } from 'use-capitalized'

const App = () => {
  const example = useMyHook()
  return (
    <div>
      {example}
    </div>
  )
}
export default App