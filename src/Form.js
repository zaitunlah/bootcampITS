import React, {useState} from 'react'
import {Modal, Button, Form, Table} from 'react-bootstrap'
import { IoTrashOutline, IoPencil} from 'react-icons/io5'
export default function Form1() {
    const [mahasiswa, setMahasiswa] = useState([{
        nama: 'Zaitun', 
        birthDate: '1999-06-22', 
        gender: 'L', 
        jurusan: 'Matematika'
    }]);
    const [show, setShow] = useState(false);
    const [edit, setEdit] = useState(null);
    const [newData, setNewData] = useState({});
    const handleClose = () => setShow(false);
    
    const handleTambah = () => {
        setShow(true)
        setEdit(null)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const detail = {
            nama:       e.target.nama.value,
            birthDate:  e.target.birthDate.value,
            gender:     e.target.gender.value,
            jurusan:    e.target.jurusan.value
        }
        const newMahasiswa = [...mahasiswa]
        console.log(edit)
        if (edit !== null) {
            //update
            console.log('update')
            // setEdit(null)
        } else {
            console.log('add')
            newMahasiswa.push(detail)
            setShow(false)
            setMahasiswa(newMahasiswa)
            setNewData(null)
        }
    }

    const handleDelete = (index) => {
        console.log(index)
        const newMahasiswa = [...mahasiswa]
        newMahasiswa.splice(index, 1)
        setMahasiswa(newMahasiswa)
    }

    const handleEdit = (index) => {
        setShow(true)
        setEdit(index)
        // setEditdata(mahasiswa[index])
    }

    const handleInput = (e) => {
        console.log(edit, e.target.name, e.target.value)
        if (edit == null){
            console.log('tambah')
            const addNewData = {...newData}
            addNewData[e.target.name] = e.target.value
            setNewData(addNewData)
        } else {
            console.log('update')
            const newMahasiswa = [...mahasiswa]
            newMahasiswa[edit][e.target.name] = e.target.value
            setMahasiswa(newMahasiswa)
        }
    }
    console.log('render mahasiswa', mahasiswa[edit])
    const dataEdit = mahasiswa[edit]
    return (
    <div>
        <h1> Form Mahasiswa Baru</h1>
        {/* <div> {nama}</div> 
        <input type="text"
        onChange={(e) => {
            console.log(e.target.value)
            gantiNama(e.target.value)
        }} /> */}

    <Button variant="primary" onClick={handleTambah}>
        Tambahkan Mahasiswa
    </Button>
    <Modal show={show} onHide={handleClose}>
          <form onSubmit={handleSubmit}>
            <Modal.Header closeButton>
            <h2> Form Mahasiswa Baru</h2>
            </Modal.Header>
        <Modal.Body>
            <div>
                <Form.Label htmlFor="nama"> 
                Nama 
                </Form.Label>
                <Form.Control 
                type="text" 
                id="nama" 
                name="nama" 
                value={mahasiswa[edit]?.nama || newData?.nama} 
                onChange={handleInput}/>
            </div>
            <div>
                <Form.Label htmlFor="Tanggal lahir">
                Tanggal Lahir
                </Form.Label>
                <Form.Control 
                type="date" 
                id="birthDate" 
                name="birthDate" 
                value={mahasiswa[edit]?.birthDate || newData?.birthDate} 
                onChange={handleInput} />
            </div>
            <div>
            <Form.Label htmlFor="gender">Gender</Form.Label>
              <Form.Check
                    type="radio"
                    id="gender"
                    name="gender"
                    label="Laki-laki"
                    value="L"
                    checked={(mahasiswa[edit]?.gender || newData?.gender) === 'L'}
                    onChange={handleInput}
                  />
                  <div className="form-check">
                    <input 
                    name="gender" 
                    type="radio" 
                    id="gender" 
                    className="form-check-input" 
                    value="P" 
                    checked={(mahasiswa[edit]?.gender || newData?.gender) === 'P'} 
                    onChange={handleInput} />
                    <label  title="" 
                            htmlFor="gender" 
                            className="form-check-label">Perempuan</label>
                  </div>
                </div>
            <div>
                <Form.Label htmlFor="Jurusan"> Jurusan </Form.Label>
                <Form.Select 
                name="jurusan" 
                value={mahasiswa[edit]?.jurusan || newData?.jurusan} 
                onChange={handleInput}>
                    <option> Pilih Jurusan Anda</option>
                    <option value="Matematika"> Matematika </option>
                    <option value="Fisika"> Fisika </option>
                    <option value="Kimia"> Kimia </option>
                    <option value="Biologi"> Biologi</option>
                    </Form.Select>
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Tutup
          </Button>
          <Button type="submit" variant="primary">
            Benar
          </Button>
        </Modal.Footer>
        </form>
      </Modal>
      <TableMahasiswa 
      data={mahasiswa} 
      remove={handleDelete} 
      edit={handleEdit}/>
        </div>
  )
}

function TableMahasiswa({data, remove, edit}) {
    console.log(data)
  return (
    <div className='mt-6'>
        <center><h1> Daftar Mahasiswa </h1>
            </center>
        <Table striped bordered hover>
  <thead>
    <tr>
      <th>No.</th>
      <th>Nama Mahasiswa</th>
      <th>Tanggal Lahir</th>
      <th>Gender</th>
      <th>Jurusan</th>
      <th>Tindakan</th>
    </tr>
  </thead>
  <tbody>
                {data.map((value, index) => {
                    console.log(value)
                    return (
                    <tr key={index}>
                        <td>{index+1}</td>
                        <td>{value.nama}</td>
                        <td>{value.birthDate}</td>
                        <td>{value.gender}</td>
                        <td>{value.jurusan}</td>
                        <td>
                            <button className='btn btn-danger' 
                            onClick={() => remove(index)} >
                            <IoTrashOutline /> Hapus
                            </button>
                            <button className='btn btn-success' 
                            onClick={() => edit(index)} >
                            <IoPencil /> Edit
                            </button>
                        </td>
                    </tr>)
                })}
                <tr>
                    <td></td>
                </tr>
            </tbody>

</Table>
    </div>
  )
}