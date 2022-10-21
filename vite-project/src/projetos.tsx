import './projetos.css'
import img from './img/contador.png'
import img1 from './img/casas.png'
import img2 from './img/summer1.png'
import img3 from './img/summer2.png'
import img4 from './img/disney.png'

import img6 from './img/relogio.png'




export function Projetos(){
   return(
    <div id='containerProjetos'>
       
        <div id='containerProjetos1'>

            <h1 id='projetosh1'>projetos</h1>
            
            <div className='divprojetos'>
                <img src={img} alt="" className='projetos'/> 
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum hic inventore excepturi rem, quia soluta alias quis perspiciatis dolorum accusantium quibusdam, recusandae nam doloribus. Voluptatibus possimus repellendus atque dolorem harum.</p>
            
            </div>
            <div  className='divprojetos'>
                <img src={img1} alt=""  className='projetos'/>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum hic inventore excepturi rem, quia soluta alias quis perspiciatis dolorum accusantium quibusdam, recusandae nam doloribus. Voluptatibus possimus repellendus atque dolorem harum.</p>
            </div>


            <div  className='divprojetos'>
                <img src={img2} alt=""  className='projetos'/>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum hic inventore excepturi rem, quia soluta alias quis perspiciatis dolorum accusantium quibusdam, recusandae nam doloribus. Voluptatibus possimus repellendus atque dolorem harum.</p>
            </div>
            <div  className='divprojetos'>
                <img src={img3} alt=""  className='projetos'/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, tempora similique facere corrupti nostrum enim. Praesentium eos tempore ab a dolore doloremque fugit suscipit qui optio dolorum, molestias porro nulla!</p>
            </div>
            <div  className='divprojetos'>
                <img src={img4} alt="" className='projetos'/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis omnis quidem cupiditate autem ullam voluptatem nesciunt fuga debitis quod nobis explicabo necessitatibus soluta fugiat sit veritatis, sunt, earum atque porro.</p>
            </div>
            <div  className='divprojetos'>
                <img src={img6} alt="" className='projetos'/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis omnis quidem cupiditate autem ullam voluptatem nesciunt fuga debitis quod nobis explicabo necessitatibus soluta fugiat sit veritatis, sunt, earum atque porro.</p>
            </div>
            
            
        </div>
    </div>
   )
}