import './projetos.css'
import img from './img/contador.png'
import img1 from './img/casas.png'
import img2 from './img/summer1.png'
export function Projetos(){
   return(
    <div id='containerProjetos'>
       
        <div id='containerProjetos1'>

            <h1 id='projetosh1'>projetos</h1>
            
            <img src={img} alt="" className='projetos'/> 
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum hic inventore excepturi rem, quia soluta alias quis perspiciatis dolorum accusantium quibusdam, recusandae nam doloribus. Voluptatibus possimus repellendus atque dolorem harum.</p>
            
            <img src={img1} alt=""  className='projetos'/>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum hic inventore excepturi rem, quia soluta alias quis perspiciatis dolorum accusantium quibusdam, recusandae nam doloribus. Voluptatibus possimus repellendus atque dolorem harum.</p>

            
            <img src={img2} alt=""  className='projetos'/>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum hic inventore excepturi rem, quia soluta alias quis perspiciatis dolorum accusantium quibusdam, recusandae nam doloribus. Voluptatibus possimus repellendus atque dolorem harum.</p>
        </div>
    </div>
   )
}