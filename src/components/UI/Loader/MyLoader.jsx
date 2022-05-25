import React from 'react'
import classes from './MyLoader.module.css'

export default function MyLoader() {
    return (
        <div className={classes.loader__mask}>
            <div className={classes.loader}></div>
        </div>
    )
}
