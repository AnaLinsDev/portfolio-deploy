import React from 'react';
import './menuBar.scss'

const menuBar = () => {

    return (
    <div className='menu'>
        <div className='hidden'>

        <hr/> <hr/> <hr/>

        <div className='show'>

        <a href="#aboutme">Sobre mim</a>
        <a href="#myskills">Skills</a>
        <a href="#myprojects">Projetos</a>
        
        </div>
        
        </div>
    </div>
    )
    }

export default menuBar 