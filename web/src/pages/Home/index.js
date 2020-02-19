import React from 'react';
import {withRouter } from "react-router-dom";
import '../../styles/style.css';
import './style.css';
import {logout} from "../../services/auth";

function LogoUt({history}){   
    async function handleLogout(e){
        e.preventDefault();
        try{
            logout()
            history.push("/"); 
        }
        catch(e){
            console.log(e);
        }
    }
    return(
        <main>
            <form>
                <h3 id="title_form"><span>Med</span>Sênior</h3>
                <div className="container">
                    <span id="subtitle">Bem-Vindo!</span>
                    <p className="conteudoPrincipal">Lorem ipsum dolor sit amet, 
                        consectetur adipisicing elit. Inventore expedita pariatur tempora consequuntur? Nesciunt amet dignissimos harum, reprehenderit quas ipsam aperiam nihil 
                        doloribus vitae obcaecati odio, sunt neque illum consequuntur?
                    </p>
                    <div id="buttonLogout">
                        <button onClick={handleLogout}>LogoUt</button>
                    </div>
                </div>
                
            </form>
        </main>
    );
}
export default withRouter(LogoUt);