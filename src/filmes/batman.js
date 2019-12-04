
import React, {Component} from 'react';
import batman2  from '../FOTOS PARA O PROJETO/Batman_o_cavaleiro_das_trevas.jpg';


 class batman extends Component {
  render() {
  return (
   <div>
   <center><img src={batman2}/></center>
  <center><button className='butao'type="button"> PLAY</button></center>

      <p>Com a ajuda de Jim Gordon e Harvey Dent, Batman tem mantido a ordem na cidade de Gotham. Mas um jovem e anárquico criminoso conhecido como Coringa ganha força e decide instaurar um verdadeiro caos na cidade. O justiceiro será testado psicologicamente e fisicamente como nunca fora antes em um confronto bastante pessoal. Cabe a Batman encontrar uma maneira de deter o sádico vilão antes que mais vidas sejam perdidas.      
      </p>     
     </div>
  );
  }
 }

export default batman;


