import React from 'react';
import './ModalBox.css';

function ModalBox({setModalBox, children}) {
  return (
   <> 
   <div className='echo' onClick={ () => setModalBox ('none') }> </div>
   <div className="ModalBox">
   {children}
    </div>

  </>//поверх всех
  );
}

export default ModalBox;