import React, {Component} from 'react'
import Biodata from './Biodata'
import Coba2 from './Coba2'

const Coba3 = () => {
    const mahasiswa = ['budi', 'andi', 'joko', 'susi']
    const mahasiswa2 = [
        { nama: 'budi', alamat: 'Surabaya'},
        { nama: 'andi', alamat: 'Madiun'},
        { nama: 'joko', alamat: 'Jogja'},
        { nama: 'susi', alamat: 'Bandung'}]
    const show = true
    // (show ?)
        return (
        <div> 
            Coba 1
            <Biodata nama="Budi" alamat="Surabaya" umur={20}/>
            <hr/>
            <Coba2 data={mahasiswa2} tampil={show}/>
            <ul>
            {mahasiswa.map((nama, index) => {
                return <li key={index}>{nama}
                </li>
            })}
            </ul>
        </div>
    )
}
export default Coba3