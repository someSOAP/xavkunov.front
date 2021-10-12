import React, { FC } from 'react'
import photo from './assets/photo.jpeg'

const App: FC = () => {
    return (
        <div>
            <h1>Hello React!</h1>
            <img src={photo} alt="photo" />
        </div>
    )
}

export default App
