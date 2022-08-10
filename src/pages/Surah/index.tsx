import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './style.scss'
import { getDetailSurah } from '../../services/axios'
import { connect } from 'react-redux'
import CardAyat from '../../components/cardAyat'
import Parser from 'html-react-parser';

const Surah = (props: any) => {
    const navigate = useNavigate()
    const [namaLatin, setnamaLatin] = useState('')
    const [namaSurah, setnamaSurah] = useState('')
    const [jumlahayat, setjumlahayat] = useState('')
    const [tempatTurun, settempatTurun] = useState('')
    const [ayat, setayat] = useState([])

    useEffect(() => {
        if (!localStorage.getItem('USER')) {
            navigate('/sign-in')
        }
    }, [])

    useEffect(() => {
        const getData = async () => {
            const response = await getDetailSurah(props.surah);
            setayat(response.data.ayat)
            setnamaLatin(response.data.nama_latin)
            setnamaSurah(response.data.nama)
            setjumlahayat(response.data.jumlah_ayat)
            settempatTurun(response.data.tempat_turun)
        }

        getData()
    }, [])

    // console.log(allData.nama_latin)

    return (
        <div className='container'>
            <div className='ketSurah'>
                <h1>{namaLatin} - {namaSurah}</h1>
                <p>Jumlah Ayat : {jumlahayat}  Tempat Turun : {tempatTurun}</p>
            </div>
            {
                ayat.map((res: any, index) =>
                    <CardAyat key={index + 'surah'} nmr={res.nomor} indo={res.idn} ar={res.ar} tr={Parser(res.tr)} />
                )
            }
        </div>
    )
}

const reduxState = (state: any) => ({
    surah: state.surah
})

export default connect(reduxState, null)(Surah)