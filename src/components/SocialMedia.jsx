import React from 'react'
import { BsLinkedin, BsTwitter, BsTools, BsGithub} from 'react-icons/bs';
import { FaFacebook, FaBehance } from 'react-icons/fa';
import { images } from '../constants';

const SocialMedia = () => {
  return (
    <div className="app__social">

         
              <a href="https://twitter.com/piotrmacai" target="_blank" rel="noreferrer">
                  <div> <BsTwitter />     </div>
              </a>
            
              <a href="https://www.linkedin.com/in/piotrmacai/" target="_blank" rel="noreferrer">
                     <div> <BsLinkedin />     </div>
              </a>

              <a href="https://github.com/piotrmacai/" target="_blank" rel="noopener noreferrer">
                <div>< BsGithub /></div>
                </a>
   <a href="https://huggingface.co/Piotr-Macai" target="_blank" rel="noopener noreferrer">         
                  <div> <img src={images.hflogo} width={32} height={32} alt="Huggingface"/>    </div>                               
                </a>    
                <a href="https://www.behance.net/macaistudio/" target="_blank" rel="noopener noreferrer">         
                <div> <FaBehance/>    </div>                               
                </a>
                <a href="https://www.artstation.com/piotrmacai" target="_blank" rel="noopener noreferrer">         
                                <div> <img src={images.artstation} width={32} height={32} alt="Huggingface"/>    </div>                               
                </a> 
             
        
              {/* <a href="https://ainsider.tools/" target="_blank" rel="noreferrer">
                  <div>  <BsTools />  </div>
                </a> */}
          
           
                       
    </div>
  )
}

export default SocialMedia