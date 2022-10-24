import './texto.css'
import img from './img/perfil2.jpeg' 

export function Texto(){
    return(
        <div id='divtext'>
            <div id='divtext3'>
                <div id='divtext2'>
                    <img src={img} alt="" />
                    <h1>EVAN JUNIOR</h1>
                    
                    
                </div>
                <div id="texto">
                    <h1>DEV FRONT-END</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ullam voluptatibus quidem voluptates. Architecto voluptate natus provident repellat sit dolor dicta asperiores. Voluptates ad, eius est temporibus harum quis vitae Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, esse fuga? Eos inventore voluptatem sapiente, ullam magni reprehenderit voluptas minima dolorem deleniti sint ut possimus vitae nesciunt nemo temporibus dolore!</p>
                </div>
            </div>
        
        </div>


    )
}