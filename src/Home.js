import React, {useState} from 'react'
import Template from './components/Template'


export default function Home() {
    const [show, setshow] = useState(false)
    // function openModal(modalId) {
    //     modal = document.getElementById(modalId)
    //     modal.classList.remove('hidden')
    // }
    
    // function closeModal() {
    //     modal = document.getElementById('modal')
    //     modal.classList.add('hidden')
    // }
  return (
      <Template>
        <button className="btn btn-primary" onClick={() => setshow(!show)} >Show/Hide</button>
        <div>Home</div>
        {show ? <div > 
        <div className="max-h-48 overflow-y-scroll p-4">
            <p>Scrollable modal body</p>
            <p>Scrollable modal body</p>
            <p>Scrollable modal body</p>
            <p>Scrollable modal body</p>
            <p>Scrollable modal body</p>
            <p>Scrollable modal body</p>
            <p>Scrollable modal body</p>
        </div>

        <div className="px-4 py-2 border-t border-t-gray-500 flex justify-end items-center space-x-4">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition" 
            onClick={() => setshow(false)}>
                Close</button>
        </div>
    </div>
        : null }
      </Template>
  )
}
