import React, { FC, Suspense } from 'react'
import Main from './components/Main'
import Header from '@/components/Header'

const App: FC = () => {
    return (
        <Suspense fallback={<div>Loading</div>}>
            <Header />
            <Main />
        </Suspense>
    )
}

export default App
