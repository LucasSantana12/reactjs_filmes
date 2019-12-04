
import React, {Component} from 'react';
import batman from './FOTOS PARA O PROJETO/Batman_o_cavaleiro_das_trevas.jpg';
import Clube from './FOTOS PARA O PROJETO/clube_da_luta.jpg';
import evangelion from './FOTOS PARA O PROJETO/evangelion.jpg';
import senhor2 from './FOTOS PARA O PROJETO/senhor_dos_aneis_2.jpg';
import teste from './imagens_filmes/coringa.jpg'
import teste2 from './imagens_filmes/dora.jpg'
import teste3 from './imagens_filmes/doutorsono.jpg'
import teste4 from './imagens_filmes/homemaranha.jpg'
import teste5 from './imagens_filmes/malevola.jpg'
import john_wick3 from './imagens_filmes/john_wick_3.jpg'
import{ Link } from 'react-router-dom';




 class home extends Component {
  render() {
  return (
     <div className = 'teste'>
        <Link to='/filme-batman'><img src={batman}/> </Link> 
        <Link to='/filme-clube-da-luta'> <img src={Clube}/></Link>  
        <Link to='/filme-evangelion'><img src={evangelion}/></Link>     
        <Link to='/filme-senhor-dos-aneis'><img src={senhor2}/></Link>
        <br></br>
        <Link to='/filme-coringa'><img src = {teste} /></Link> 
        <Link to='/filme-dora' ><img src = {teste2} /></Link> 
        <Link to='filme-doutor-sono'><img src = {teste3} /></Link> 
        <Link to='/filme-homem-aranha'><img src = {teste4} /></Link>
        <br></br>
        <Link to='/filme-malevola2' ><img src = {teste5} /></Link> 

        <Link to='/filme-johnwick' ><img src = {john_wick3} /></Link> 
        
     </div>
  );
  }
 }

export default home;


