import React from 'react'

function page() {
  return (
    <div className=' bg-red-500 p-4 text-white'>
        <button class="open-modal-btn">Open Modal</button>

        <div class="modal-overlay">
        <div class="modal">
            <button class="close-modal-btn">Close</button>
            <p>This is a modal. You can add your content here.</p>
        </div>
        </div>
    </div>
  )
}

export default page