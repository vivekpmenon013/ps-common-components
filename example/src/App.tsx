import React from 'react'

import { Button, ColoredHeadingOne } from 'ps-common-components'
import 'ps-common-components/dist/index.css'

const App = () => {
  return (
    <>
      <ColoredHeadingOne text="Colored Heading one is working" color={"red"} />
      <Button label='hello'></Button>
    </>
  )
}

export default App
