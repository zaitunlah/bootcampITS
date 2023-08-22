import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Button from './components/Button'
import Template from './components/Template'
import { IoPencil,  } from 'react-icons/io5'

export default function FormAPI() {
  const [data, setdata] = useState([])
  const [edit, setedit] = useState(null)
  const getData = () => {
    console.log('get data')
    axios.get('http://localhost:3001/cars')
      .then(hasil => {
        setdata(hasil.data)
      })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    const value = e.target.car.value
    axios.post('http://localhost:3001/cars', { name: value })
      .then(() => {
        console.log('post')
        getData()
      })

    e.target.car.value = ''
  }
  const handleDelete = (id) => {
    axios.delete(`http://localhost:3001/cars/${id}`).then(() => {
      console.log('delete')
      getData()
    })
  }
  const handleEdit = (e) => {
    e.preventDefault()
    console.log('index edit', edit, data[edit].id)
    axios.patch(`http://localhost:3001/cars/${data[edit].id}`, { name: e.target.car.value })
      .then(() => {
        getData()
        setedit(null)
      })
  }
  useEffect(() => {
    getData()
  }, [])
  
  return (
    <Template>
      <div className='container mx-auto px-4 space-y-4 my-4 overflow-auto'>
        <form onSubmit={handleSubmit} className="p-5 grid grid-cols-2 gap-4 border rounded-lg drop-shadow-2xl bg-white">
          <input type="text" className="border-2 form-input px-2" name="car" placeholder='Input Merk Mobil' />
          <Button type="submit" text="Tambah" />
        </form>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-3 items-center'>
          {data.map((car, i) => {
            return (
                <div key={i} className='drop-shadow-2xl bg-white border rounded-lg overflow-hidden p-4'>
                    {edit === i ?
                        <form   className='w-full flex space-x-2' 
                            onSubmit={(event) => handleEdit(event)}>
                            <input className="border-2 form-input w-4/5" 
                            name="car" 
                            defaultValue={car.name} />
                        <button className='bg-blue-500 text-white px-2 rounded-lg w-1/3'>
                          Save</button>
                        </form>
                    : <div className="p-4 text-black rounded-lg w-1/1 mx-auto text-center">
                       <div className='bg-blue-200'> {car.name} </div>
                        <div className='flex py-4 gap-4 text-center'>
                            <div  className="cursor-pointer bg-green-500 text-white px-2 rounded-lg w-1/2" 
                                  onClick={() => setedit(i === edit ? null : i)}>
                                  Edit</div>
                            <div className="cursor-pointer bg-red-500 text-white px-2 rounded-lg w-1/2" 
                            onClick={() => handleDelete(car.id)}>
                            Hapus</div>
                        </div>
                </div>    
              }
            </div>
          )})}
        </div>
      </div>
    </Template>
  )
}