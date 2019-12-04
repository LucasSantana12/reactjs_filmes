
import React, {Component} from 'react';
import Clube2 from '../FOTOS PARA O PROJETO/clube_da_luta.jpg';

class clube extends Component {
 render() {
 return (
    <div >
      <center><img src={Clube2}/>  </center> 
      <center><button className='butao'type="button"> PLAY</button></center>
      <p>Um homem deprimido que sofre de insônia conhece um estranho vendedor chamado Tyler Durden e se vê morando em uma casa suja depois que seu perfeito apartamento é destruído. A dupla forma um clube com regras rígidas onde homens lutam. A parceria perfeita é comprometida quando uma mulher, Marla, atrai a atenção de Tyler.</p>
       
    </div>
 );
 }
}

export default clube;

