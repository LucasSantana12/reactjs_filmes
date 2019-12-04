
import React, {Component} from 'react';
import evangelion2 from '../FOTOS PARA O PROJETO/evangelion.jpg';



class evangelion extends Component {
 render() {
 return (
    <div>
       <center><img src={evangelion2}/></center>
  <center><button className='butao'type="button"> PLAY</button></center>

      <p>Neon Genesis Evangelion é uma série de ação pós-apocalíptica que gira em torno de uma organização paramilitar chamada NERV, criada para combater seres monstruosos chamados Anjos, utilizando seres gigantes chamados Unidades Evangelion (ou EVAs).</p>
       
    </div>
 );
 }
}

export default evangelion;

