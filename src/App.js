
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAt, faPhone,faListCheck, faPerson, faPencil, faPeopleGroup } from '@fortawesome/free-solid-svg-icons'
import ConteudoSingle from './components/conteudo-single.js';

function App() {
  return (
    <div className="App">
        <div className="main">
          <div className="center">
            <div className="menu">
              <div className="logo">
                <h1>SUPORTE</h1> 
              </div>
              <div className="item-menu">
              </div>
            </div>
          </div>
        </div>
        <div className="conteudo">
          <div className="center-conteudo">
          <ConteudoSingle Titulo = 'ATENDIMENTO 'conteudo = 'Vitae curabitur eget volutpat sapien non in sodales tincidunt velit eu cubilia ut, dictumst lobortis potenti bibendum sed a lacus at cras enim. orci dapibus vel auctor varius ut ac per mauris tristique, accumsan ' icone ={faPhone} iconesize = "3x" iconecolor ="deepskyblue"></ConteudoSingle>
            <ConteudoSingle Titulo = "E-MAIL "conteudo = "Vitae curabitur eget volutpat sapien non in sodales tincidunt velit eu cubilia ut, dictumst lobortis potenti bibendum sed a lacus at cras enim. orci dapibus vel auctor varius ut ac per mauris tristique, accumsan " icone={faAt} iconesize="3x" iconecolor="deepskyblue"></ConteudoSingle>
            <ConteudoSingle Titulo = "ATENDIMENTO ONLINE "conteudo = "Vitae curabitur eget volutpat sapien non in sodales tincidunt velit eu cubilia ut, dictumst lobortis potenti bibendum sed a lacus at cras enim. orci dapibus vel auctor varius ut ac per mauris tristique, accumsan " icone={faPeopleGroup} iconesize="3x" iconecolor="deepskyblue"></ConteudoSingle>
          </div>
          <div className="center-conteudo">
          <ConteudoSingle Titulo = "HISTÓRICO DE VERSÕES "conteudo = "Vitae curabitur eget volutpat sapien non in sodales tincidunt velit eu cubilia ut, dictumst lobortis potenti bibendum sed a lacus at cras enim. orci dapibus vel auctor varius ut ac per mauris tristique, accumsan " icone={faListCheck} iconesize="3x" iconecolor="deepskyblue">
          </ConteudoSingle>
            <ConteudoSingle Titulo = "ÁREA DO CLIENTE "conteudo = "Vitae curabitur eget volutpat sapien non in sodales tincidunt velit eu cubilia ut, dictumst lobortis potenti bibendum sed a lacus at cras enim. orci dapibus vel auctor varius ut ac per mauris tristique, accumsan " icone={faPerson} iconesize="3x" iconecolor="deepskyblue">
            </ConteudoSingle>
            <ConteudoSingle Titulo = "HELP DESK "conteudo = "Vitae curabitur eget volutpat sapien non in sodales tincidunt velit eu cubilia ut, dictumst lobortis potenti bibendum sed a lacus at cras enim. orci dapibus vel auctor varius ut ac per mauris tristique, accumsan " icone={faPencil} iconesize="3x" iconecolor="deepskyblue"></ConteudoSingle>
          </div>
        </div>
      </div>
  );
}

export default App;
