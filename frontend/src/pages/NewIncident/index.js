import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import './styles.css'
import api from '../../services/api'
import LogoImg from '../../assets/logo.svg'


export default function NewIncident() {    
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');    
   
    const ongId = localStorage.getItem('ongId');    

    const history = useHistory();

    async function handleNewIncident(e){
        e.preventDefault();

        const data ={
            title,
            description,
            value,
        };        

        try{
            await api.post('incidents', data, {
                headers: {
                    authorization: ongId,
                 }
            });            

            history.push('/profile');
        } catch (erro){
            alert('Falha ao cadastrar. Tente novamente');
        }
    }

    return (
    <div className="new-incident-container">
        <div className="content">
        <section>
            <img src={LogoImg} alt="Be the Hero" />

            <h1>Cadastrar novo caso</h1>
            <p>
            Descreva o caso detalhadamente para
            encontrar um heroi para resolver isso.
            </p>

            <Link className="back-link" to="/profile">
            <FiArrowLeft size={16} color="#e02041" />
                Voltar para Home
            </Link>
        </section>
        <form onSubmit={handleNewIncident}>
            <input type="text" 
                placeholder="Título do Caso" 
                value={title}
                onChange={ e => setTitle(e.target.value)}
            />
            <textarea 
                placeholder="Descrição" 
                value={description}
                onChange={ e => setDescription(e.target.value)}
            />
            <input type="text" 
                placeholder="Value" 
                value={value}
                onChange={ e => setValue(e.target.value)}
            />

            <button className="button" type="submit">Cadastrar</button>
        </form>
        </div>
    </div>
    );
}