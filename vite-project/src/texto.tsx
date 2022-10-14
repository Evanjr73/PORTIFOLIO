import './texto.css'
import img from './img/perfil.png' 

export function Texto(){
    return(
        <div id='divtext'>
            <div>
                <img src={img} alt="" />
                <h1>EVAN JUNIOR</h1>
                
            </div>
            <div id="texto">
                
            </div>
        
        </div>


    )
}