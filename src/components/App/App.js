import React, { useState, useEffect } from 'react'
import Header from '../Header/Header'
import ColorsList from '../ColorsList/ColorsList'
import generateColors from '../../utils/generateColors'
import styles from './App.module.scss'

const App = () => {
    const [colors, setColors] = useState(generateColors())

    useEffect(() => {
        const handleKeyDown = e => {
            if (e.which === 32) {
                setColors(generateColors())
            }
        }

        window.addEventListener('keydown', handleKeyDown)

        return () => {
            window.removeEventListener('keydown', handleKeyDown)
        }
    }, [])

    return (
        <div className={styles.App}>
            <Header />
            <ColorsList colors={colors} />
        </div>
    )
}

export default App
