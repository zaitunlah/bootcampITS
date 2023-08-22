import React from 'react'
export function Biodata2({ data }) {
  return ( <div>Biodata 2</div>
  )
}
export default function Biodata(props) {
  const { nama, alamat, umur } = props
  console.log(props.nama)
  return (
    <div>
      Biodata 1 {props.nama} {alamat} {umur}
    </div>
  )
}
