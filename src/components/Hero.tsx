import React from 'react'
import styles from './Hero.module.css'
import { ReactNode } from 'react'

type HeroProps = {
    children?: ReactNode
}

const Hero = ({ children }: HeroProps) => {
    return (
        <div>
            HERO!
        </div>
    )
}
export default Hero
