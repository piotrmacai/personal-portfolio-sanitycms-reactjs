import React from 'react'
import './Tools.scss'
import { AppWrap, MotionWrap } from '../../wrapper';


const Tools = () => {

    return (
        <div className="toolscontainer">

        <a href="https://promptr-library.vercel.app/" target="_blank" className="toolsContainera" rel="noreferrer">
            <div className="toolsContainer">
                    <h5 className="subtitleh5">Awesome</h5>
                    <h2 className="titleh2">AI Prompts Library</h2>
                    <div>
                        <div className="toolsContainerDesc">
                            <p className="titleh6">Filterable by categories</p>
                        </div>
                    </div>
                    <button className="toolsBtn" >AI PROMPT LIBRARY</button>
            </div>
        </a>

        </div>
      
    )
}

export default AppWrap(
    MotionWrap(Tools, 'container'),
    'tools',
    "app__whitebg"
    );