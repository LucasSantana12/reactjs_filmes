import React, {Component} from 'react';
import teste from '../imagens_filmes/coringa.jpg'

 class coringa extends Component {
  render() {
  return (
     <div >
      <center><img src={teste}/></center>
      <center><button className='butao'type="button"> PLAY</button></center>
      <p>O comediante falido Arthur Fleck encontra violentos bandidos pelas ruas de Gotham City. Desconsiderado pela sociedade, Fleck começa a ficar louco e se transforma no criminoso conhecido como Coringa.</p>
    
     </div>
  );
  }
 }

export default coringa;


