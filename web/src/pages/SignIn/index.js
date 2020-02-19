import React, {useEffect,useState} from 'react';
import {Link,withRouter } from "react-router-dom";
import '../../styles/style.css';
import api from '../../services/api';
import {login } from "../../services/auth"

function SignIn({history}){
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [erro,setErro] = useState('');
    
    async function handleSignIn(e){
        e.preventDefault();
        if(email.trim()===''|| password.trim()==='')
        {
            setErro("Digite os valores de todos os campos!");
        }
        else if(password.length<6){
            setErro("Senha muito curta!")
        }       
        else{
            try{
                const response = await api.post("/sessions",{email,password})
                login(response.data.token);
                history.push("/app"); 
            }
            catch(e){
                console.log(e);
                setErro("Houve um problema com o login, verifique suas credenciais");
            } 
        }
    }
    return(
        <main>
            <form onSubmit={handleSignIn}>
                <h3 id="title_form"><span>Med</span>Sênior</h3>
                <span id="subtitle_form">Entrar</span>
                {erro && <p className="erro">{erro}</p>}
                <div className="input_block">                    
                    <input 
                        type="email" 
                        name="email" 
                        id="email" 
                        value={email}
                        onChange={e=>setEmail(e.target.value)}
                        placeholder="Email"/>               
                    <input 
                    type="password"
                     name="password" 
                     id="password" 
                     value={password}
                     onChange={e=>setPassword(e.target.value)}
                     placeholder="Senha"/>
                </div>
                <span id="redirectLoginRegistrar">Não possui conta ainda? <Link to="signup">Registrar - Se</Link></span> 
                <div id="button">
                    <button type="submit">Entrar</button>
                </div>
                
            </form>
        </main>
    );
}
export default withRouter(SignIn);