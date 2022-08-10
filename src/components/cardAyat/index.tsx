/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import './style.scss'

const CardAyat = ({ nmr, indo, ar, tr }: { nmr: any, indo: any, ar: any, tr: any }) => {
    return (
        <div className='cardAyat'>
            <div className='ayatSurah'>
                <div>{nmr}</div>
                <div>{indo}</div>
            </div>

            <div className='arabSurah'>
                <div className='arabInner1'>{ar}</div>
                <div className='arabInner2'>{tr}</div>
            </div>
        </div>
    )
}

export default CardAyat