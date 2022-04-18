import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt, faClipboardList, faDashboard, faList, faList12, faListAlt, faListCheck, faMobilePhone, faPaperclip, faPencil, faPeopleGroup, faPerson, faPersonBooth, faPhone, faPhoneAlt, faPhoneFlip, faPhoneSlash, faPhoneSquare, faPhoneVolume, faTableList, faThList } from "@fortawesome/free-solid-svg-icons"; 

function ConteudoSingle(props){
    return(
        <div className="conteudo-single">
        <FontAwesomeIcon icon={props.icone} size={props.iconesize} color={props.iconecolor}></FontAwesomeIcon>
          <h3>{props.Titulo}</h3>
          <p>{props.conteudo}</p>
        </div>   
    )
}
export default ConteudoSingle;