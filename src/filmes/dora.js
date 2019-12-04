
import React, {Component} from 'react';
import dora1 from '../imagens_filmes/dora.jpg'



class dora extends Component {
 render() {
 return (
    <div>
       <center><img src = {dora1} /></center>
       <center><button className='butao'type="button"> PLAY</button></center>
      <p>Ambientado na floresta peruana, o filme narra as aventuras de Dora (Isabella Merced) junto de seu macaco Botas, amigos que acabou de fazer na escola e um misterioso explorador a fim de salvar seus pais de mercenários.</p>
       
    </div>
 );
 }
}

export default dora;

