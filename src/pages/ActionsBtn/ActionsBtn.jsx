import React from 'react'

function ActionsBtn() {
  return (
    <>
    <div className='inputSectionforCodeBtns'>
        <button className='btn '><i class="bi bi-play"></i> Run</button>
        <button className='btn'><i class="bi bi-save"></i> Save</button>
        <button className='btn'><i class="bi bi-trash"></i> Clear</button>
    </div>
    </>
  )
}

export default ActionsBtn;