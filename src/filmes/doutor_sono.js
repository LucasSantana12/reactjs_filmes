
import React, {Component} from 'react';
import sono from '../imagens_filmes/doutorsono.jpg'


class doutor_sono extends Component {
 render() {
 return (
    <div>
      <center><img src = {sono} /></center>
  <center><button className='butao'type="button"> PLAY</button></center>
       
      <p>Ainda extremamente marcado pelo trauma que sofreu quando criança no Hotel Overlook, Dan Torrance lutou para encontrar o mínimo de paz. Essa paz é destruída quando ele encontra Abra, uma adolescente corajosa com um dom extrassensorial, conhecido como Brilho. Ao reconhecer instintivamente que Dan compartilha seu poder, Abra o procura, desesperada para que ele a ajude contra a impiedosa Rose Cartola e seus seguidores do grupo Verdadeiro Nó, que se alimentam do Brilho de inocentes visando a imortalidade. Ao formarem uma improvável aliança, Dan e Abra se envolvem em uma brutal batalha de vida ou morte com Rose. A inocência de Abra e a maneira destemida que ela abraça seu Brilho fazem com que Dan use seus próprios poderes como nunca, enquanto enfrenta seus medos e desperta os fantasmas do passado.</p>
       
    </div>
 );
 }
}

export default doutor_sono;

