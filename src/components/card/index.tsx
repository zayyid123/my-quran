/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { Link } from 'react-router-dom'
import './style.scss'

const CardSurah = ({ nomor, nama, turun, ayat, arab, onClick }: { nomor: any, nama: any, turun: any, ayat: any, arab: any, onClick: any }) => {
    return (
        <Link className='linkSurah' to={'/surah'} onClick={onClick}>
            <div className='cardSurah'>
                <div className='innerCard'>
                    <div className='ayatSurah'>{nomor}</div>

                    <div className='dataSurah'>
                        <div className='nameSurah'>{nama}</div>
                        <div className='detailSurah'>{turun} - {ayat} ayah</div>
                    </div>
                </div>

                <div className='arabText'>{arab}</div>
            </div>
        </Link>
    )
}

export default CardSurah