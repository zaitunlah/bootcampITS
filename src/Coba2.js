import React, {Component} from 'react'
import { Biodata2 } from './Biodata'

export default function Coba2({data, tampil}) {
    console.log(data)
    return (
        <div>Coba2
            <Biodata2 />
            {tampil ? (
                <ol>
                {data.map((value,index)=> {
                    return (<li key={index}>
                    {value.nama} {value.alamat}
                    </li>
                    )
                })}
                </ol>
                ) : (
                    <div> Show is {tampil ? 'true' : 'false'}</div>
                ) }
                
            </div>
            )}