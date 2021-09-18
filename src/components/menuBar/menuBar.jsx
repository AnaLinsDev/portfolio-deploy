import React, {useState} from 'react';
import './menuBar.scss'

function MenuBar(){

    const [open, setOpen] = useState(1);
    console.log(open)
    return (
        
    <div className='menu'>

        <div className='hidden' onClick={() => {setOpen(open * -1)}}>
            <hr/> <hr/> <hr/>
        </div>
        {open == 1 ? '' :

        <div className='show'>
            <a href="#aboutme">Sobre mim</a>
            <a href="#myskills">Skills</a>
            <a href="#myprojects">Projetos</a>
        </div>
            
        }
    </div>
    )
    }

export default MenuBar 