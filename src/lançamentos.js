/* eslint-disable jsx-a11y/alt-text */
import React, {Component} from 'react';
import coringa from './imagens_filmes/coringa.jpg'
import dora from './imagens_filmes/dora.jpg'
import doutorsono from './imagens_filmes/doutorsono.jpg'
import spiderman from './imagens_filmes/homemaranha.jpg'
import malevola from './imagens_filmes/malevola.jpg'
import{ Link } from 'react-router-dom';


 class lançamentos extends Component {
  render() {
  return (
     <div className = 'teste' >
        <Link to='/filme-coringa'><img src = {coringa} /></Link> 
        <Link to='/filme-dora' ><img src = {dora} /></Link> 
        <br></br>
        <Link to='filme-doutor-sono'><img src = {doutorsono} /></Link> 
        <Link to='/filme-homem-aranha'><img src = {spiderman} /></Link>
        <br></br>

        <Link to='/filme-malevola2' ><img src = {malevola} /></Link>


        
     </div>
  );
  }
 }

export default lançamentos;
