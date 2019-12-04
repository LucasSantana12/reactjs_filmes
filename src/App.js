import React, {Component} from 'react';
import './App.css';
import{ Switch, Route, Link } from 'react-router-dom';
import home from './home';
import lançamentos from './lançamentos';
import topfilmes from './topfilmes';
import sobre from './sobre';
import coringa from './filmes/coringa';
import batman from './filmes/batman';
import clube from './filmes/clube';
import dora from './filmes/dora';
import doutor_sono from './filmes/doutor_sono';
import evangelion from './filmes/evangelion';
import jhonwick3 from './filmes/johnwick3';
import spiderman from './filmes/spiderman';
import malevola2 from './filmes/malevola2';
import senhor2 from './filmes/senhor2';

class App extends Component {
 render() {
  return ( 
   
     <div >
      <header className='menu_pri'>     
        <ul className="menu">
          <h1 className="site">React Movies</h1>
           <center>
             <div>
                <li><Link className="nounderline" to="/">Home</Link></li>         
                <li><Link className="nounderline" to="/lançamentos">Lançamentos</Link></li>
                <li><Link className="nounderline" to="/top-filmes">Top Filmes</Link></li>
                <li><Link className="nounderline" to="/sobre">Sobre</Link></li>
             </div>
           </center>
        </ul>

      </header>

      
        <div className="content">
        <main>
             <center>
               <Switch>
                  <Route exact path="/" component={home}/>
                  <Route path="/lançamentos" component={lançamentos}/>
                  <Route path="/top-filmes" component={topfilmes}/>
                  <Route path="/sobre" component={sobre}/>
                  </Switch>
              </center>
                  <Switch>   
                  <Route path="/filme-coringa" component={coringa}/>
                  <Route path="/filme-batman" component={batman}/>
                  <Route path="/filme-clube-da-luta" component={clube}/>
                  <Route path="/filme-dora" component={dora}/>
                  <Route path="/filme-doutor-sono" component={doutor_sono}/>
                  <Route path="/filme-evangelion" component={evangelion}/>
                  <Route path="/filme-johnwick" component={jhonwick3}/>
                  <Route path="/filme-homem-aranha" component={spiderman}/>
                  <Route path="/filme-malevola2" component={malevola2}/>
                  <Route path="/filme-senhor-dos-aneis" component={senhor2}/>
                 </Switch>
         </main>
        </div>
   

     </div>
     
  );
  }
 }

export default App;
