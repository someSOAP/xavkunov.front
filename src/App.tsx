import React, { FC } from 'react'
import photo from './assets/photo.jpeg'
import dream from './assets/dream.jpeg'

const App: FC = () => {
    return (
        <main>
            <h1>Добро пожаловать на мою страничку</h1>
            <figure>
                <img src={photo} alt="photo of me" />
                <figcaption>это я</figcaption>
            </figure>
            <figure>
                <img src={dream} alt="photo of my dream" />
                <figcaption>а это моя мечта</figcaption>
            </figure>
        </main>
    )
}

export default App
