import * as React from 'react'
import photo from './assets/photo'

const App: React.FC = () => {

    return <div>
        <h1>Hello React!</h1>
        <img src={photo} alt="photo"/>

    </div>
}

export default App