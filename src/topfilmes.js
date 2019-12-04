/* eslint-disable jsx-a11y/alt-text */
import React, {Component} from 'react';
import john_wick_3 from './imagens_filmes/john_wick_3.jpg'
import evangelion from './imagens_filmes/evangelion.jpg'
import senhor_dos_aneis_2 from './imagens_filmes/senhor_dos_aneis_2.jpg'
import batman from './imagens_filmes/Batman_o_cavaleiro_das_trevas.jpg'
import clube_luta from './imagens_filmes/clube_da_luta.jpg'
import{ Link } from 'react-router-dom';

   
 class topfilmes extends Component {
  render() {
  return (
     <div className = 'teste'>

        <Link to='/filme-johnwick' ><img src = {john_wick_3} /></Link>
        <Link to='/filme-evangelion'><img src={evangelion}/></Link> 
        <Link to='/filme-senhor-dos-aneis'><img src={senhor_dos_aneis_2}/></Link>
        <br></br>
        <Link to='/filme-batman'><img src={batman}/> </Link> 
        <Link to='/filme-clube-da-luta'> <img src={clube_luta}/></Link>
        

      
     </div>
  );
  }
 }

export default topfilmes;
