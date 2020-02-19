import React, {useEffect,useState} from 'react';
import {Link,withRouter } from "react-router-dom";
import '../../styles/style.css';
import api from '../../services/api';

function SignUp({history}){
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [username,setUsername] = useState('');
    const [ConfirmPassword,setConfirmPassword] = useState('');
    const [erro,setErro] = useState('');
    
    async function handleSignUp(e){
        e.preventDefault();
        
        if(email.trim()===''|| password.trim()==='' || ConfirmPassword.trim()==='')
        {
            setErro("Digite os valores de todos os campos!");
        }
        else if(password.length<6|| ConfirmPassword.length<6){
            setErro("Senha muito curta!")
        }
        else if(password !==ConfirmPassword){
            setErro("As Senhas são diferentes!")
        }
        else{
            try{  
                await api.post("/users",{email,password,username});
                history.push("/");
            }
            catch(e){
                console.log(e);
                setErro("Houve um erro ao registrar sua conta");
            } 
        }
    }
    return(
        <main>
            <form onSubmit={handleSignUp}>
                <h3 id="title_form"><span>Med</span>Sênior</h3>
                <span id="subtitle_form">Novo Registro</span>
                {erro && <p className="erro">{erro}</p>}
                <div className="input_block">                    
                    <input 
                        type="email" 
                        name="email" 
                        id="email" 
                        value={email}
                        onChange={e=>{setEmail(e.target.value);setUsername(e.target.value)}}
                        placeholder="Email"/>               
                    <input 
                    type="password"
                     name="password" 
                     id="password" 
                     value={password}
                     onChange={e=>setPassword(e.target.value)}
                     placeholder="Senha"/>
                      <input 
                    type="password"
                     name="ConfirmPassword" 
                     id="ConfirmPassword" 
                     value={ConfirmPassword}
                     onChange={e=>setConfirmPassword(e.target.value)}
                     placeholder="Confirmar Senha"/>
                </div>
                 <span id="redirectLoginRegistrar">Já possui conta? <Link to="/">Fazer login</Link></span> 
                <div id="button">
                    <button type="submit">REGISTRAR - SE</button>
                </div>
            </form>
        </main>
    );
}
export default withRouter(SignUp);