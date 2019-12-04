
import React, {Component} from 'react'
 import john_wick3 from '../imagens_filmes/john_wick_3.jpg'

class jhonwick3 extends Component {
 render() {
 return (
    <div>
      <center> <img src={john_wick3}/></center>
      <center><button className='butao'type="button"> PLAY</button></center>
      <p>O lendário John Wick luta para sair de Nova York quando um contrato de 14 milhões de dólares faz dele o alvo dos maiores assassinos do mundo.</p>
       
    </div>
 );
 }
}

export default jhonwick3;

