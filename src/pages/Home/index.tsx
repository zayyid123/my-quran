/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import CardSurah from '../../components/card'
import { getAllSurah } from '../../services/axios'
import './style.scss'

const Home = (props: any) => {
  const navigate = useNavigate()
  const [allData, setallData] = useState([])
  const [valueSearch, setvalueSearch] = useState("");

  useEffect(() => {
    if (!localStorage.getItem('USER')) {
      navigate('/sign-in')
    }
  }, [])

  useEffect(() => {
    const getAllData = async () => {
      const getData = await getAllSurah();
      setallData(getData.data)
    }

    getAllData()
  }, [])

  const handleChange = (event: any) => {
    const value = event.target.value;
    setvalueSearch(value);
  };

  const handleChangeSurah = (noSurah: any) => {
    props.changeSurah(noSurah)
  }

  return (
    <div className='container'>
      <div className='homeDetail'>
        <div>My Quran</div>
        <div>~ Al - Quran Online ~</div>
        <div>Read Al-Qur'an Online anywhere and anytime easily.</div>
      </div>

      <div className='homeQuran'>
        <div className='titleInner'>Search Surah</div>

        <input className='searchSurah' onChange={handleChange} type='text' placeholder='Find your surah' ></input>

        <div className='allSurah'>
          {
            allData
              .filter((data: any) => data.nama_latin.toLowerCase().includes(valueSearch.toLowerCase()))
              .map((res: any, index) =>
                <CardSurah key={index} nomor={res.nomor} nama={res.nama_latin} turun={res.tempat_turun} ayat={res.jumlah_ayat} arab={res.nama} onClick={() => handleChangeSurah(res.nomor)} />
              )
          }
        </div>
      </div>
    </div>
  )
}

const reduxState = (state: any) => ({
  surah: state.surah
})

const reduxDispatch = (dispatch: any) => ({
  changeSurah: (noSurah: any) => dispatch({ type: 'CHANGE_SURAH', value: noSurah })
})

export default connect(reduxState, reduxDispatch)(Home)