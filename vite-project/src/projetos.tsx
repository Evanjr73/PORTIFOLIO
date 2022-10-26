import './projetos.css'
import img from './img/contador.png'
import img1 from './img/casas.png'
import img2 from './img/summer1.png'
import img3 from './img/summer2.png'
import img4 from './img/disney.png'
import img5 from './img/calculadora.png'
import img6 from './img/relogio.png'
import img7 from './img/pokemon.png'




export function Projetos(){
   return(
    <div id='containerProjetos'>
       

        <div id='projetostext'>
            <h1 id='projetosh1'>projetos</h1>
        </div>
        <div id='containerProjetos1'>
            <a href="https://github.com/Evanjr73/projetos/tree/main/contador"  target="_blank">
                <div  className='divprojetos'>
                    <img src={img} alt="" className='projetos'/>
                    <div className='textoDoProjeto'>
                        <h2>PROJETO POKEMON</h2> <br />
                        <p>PORJETO CRIADO COM HTML , CSS JAVASCRIPT CONSUMINDO UMA API DE TERCEIROS</p>
                    </div>
                    
                </div>
            </a>

            <a href="https://github.com/Evanjr73/projetos/tree/main/casadehoguards"  target="_blank">
                <div  className='divprojetos'>
                    <img src={img1} alt="" className='projetos'/>
                    <div className='textoDoProjeto'>
                        <h2>PROJETO POKEMON</h2> <br />
                        <p>PORJETO CRIADO COM HTML , CSS JAVASCRIPT CONSUMINDO UMA API DE TERCEIROS</p>
                    </div>
                    
                </div>
            </a>





            <a href="https://github.com/Evanjr73/projetos/blob/main/summer/index.html"  target="_blank">
                <div  className='divprojetos'>
                    <img src={img2} alt="" className='projetos'/>
                    <div className='textoDoProjeto'>
                        <h2>PROJETO POKEMON</h2> <br />
                        <p>PORJETO CRIADO COM HTML , CSS JAVASCRIPT CONSUMINDO UMA API DE TERCEIROS</p>
                    </div>
                    
                </div>
            </a>



            <a href="https://github.com/Evanjr73/projetos/blob/main/summer/comeco.html"  target="_blank">
                <div  className='divprojetos'>
                    <img src={img3} alt="" className='projetos'/>
                    <div className='textoDoProjeto'>
                        <h2>PROJETO POKEMON</h2> <br />
                        <p>PORJETO CRIADO COM HTML , CSS JAVASCRIPT CONSUMINDO UMA API DE TERCEIROS</p>
                    </div>
                    
                </div>
            </a>

            <a href="https://github.com/Evanjr73/projetos/tree/main/DISNEY%2B%2B"  target="_blank">
                <div  className='divprojetos'>
                    <img src={img4} alt="" className='projetos'/>
                    <div className='textoDoProjeto'>
                        <h2>PROJETO POKEMON</h2> <br />
                        <p>CLONE DA PRIMEIRA PAGINA DA DISNEY+</p><br />
                        <p>PORJETO CRIADO COM HTML , CSS  E JAVASCRIPT</p>
                    </div>
                    
                </div>
            </a>



            <a href="https://github.com/Evanjr73/projetos/tree/main/calculadora3"  target="_blank">
                <div  className='divprojetos'>
                    <img src={img5} alt="" className='projetos'/>
                    <div className='textoDoProjeto'>
                        <h2>PROJETO CALCULADORA</h2> <br />
                        <p>PORJETO CRIADO COM HTML , CSS E JAVASCRIPT </p>
                    </div>
                    
                </div>
            </a>
            
            <a href="https://github.com/Evanjr73/projetos/tree/main/RELOGIO"  target="_blank">
                <div  className='divprojetos'>
                    <img src={img6} alt="" className='projetos'/>
                    <div className='textoDoProjeto'>
                        <h2>PROJETO RELOGIO</h2> <br />
                        <p>PORJETO CRIADO COM HTML , CSS E JAVASCRIPT , TOTALMENTE ATUALIZADO COM HORARIO LOCAL</p>
                    </div>
                    
                </div>
            </a>
            <a href="https://github.com/Evanjr73/POKEMON"  target="_blank">
                <div  className='divprojetos'>
                    <img src={img7} alt="" className='projetos'/>
                    <div className='textoDoProjeto'>
                        <h2>PROJETO POKEMON</h2> <br />
                        <p>PORJETO CRIADO COM HTML , CSS JAVASCRIPT CONSUMINDO UMA API DE TERCEIROS</p>
                    </div>
                    
                </div>
            </a>
            
            
            
            
        </div>
    </div>
   )
}