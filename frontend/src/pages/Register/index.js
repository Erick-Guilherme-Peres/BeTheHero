import React, { useState } from 'react'
import api from '../../services/api'

import './styles.css'
import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import LogoImg from '../../assets/logo.svg'

export default function Register() {    
    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ whatsapp, setWhatsApp ] = useState('');
    const [ city, setCity ] = useState('');
    const [ uf, setUF ] = useState('');
    
    const history = useHistory();

    async function handleRegister(e){
        e.preventDefault();

        const data ={
            name,
            email,
            whatsapp,
            city,
            uf,
        };        

        try{
            const response = await api.post('ongs', data);

            alert(`Seu ID de acesso: ${response.data.id}`);

            history.push('/');
        } catch (erro){
            alert('Falha ao cadastrar. Tente novamente');
        }
    }
    
    return (
    <div className="register-container">
        <div className="content">
        <section>
            <img src={LogoImg} alt="Be the Hero" />

            <h1>Cadastro</h1>
            <p>
            Faça seu cadastro, entre na plataforma e ajude as pessoas a encontrar os
            casos da sua ong
            </p>

            <Link className="back-link" to="/">
            <FiArrowLeft size={16} color="#e02041" />
                Já tenho cadastro
            </Link>
        </section>
        <form onSubmit={handleRegister}>
            <input type="text" 
                placeholder="Nome da ONG" 
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <input type="email" 
                placeholder="E-mail" 
                value={email}
                onChange={e => setEmail(e.target.value)}
            />
            <input type="text" 
                placeholder="Whatsapp" 
                value={whatsapp}
                onChange={e => setWhatsApp(e.target.value)}
            />

            <div className="input-group">
                <input type="text"
                    placeholder="Cidade"
                    value={city}
                    onChange={e => setCity(e.target.value)}
                />
                <input type="text"
                    placeholder="UF"
                    value={uf}
                    onChange={e => setUF(e.target.value)}
                />
            </div>

            <button className="button" type="submit">Cadastrar</button>
        </form>
        </div>
    </div>
    );
}