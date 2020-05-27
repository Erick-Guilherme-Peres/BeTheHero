import React, { useEffect, useState } from 'react';
import { FiPower, FiTrash2 } from 'react-icons/fi'
import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api'

import './styles.css';
import LogoImg from '../../assets/logo.svg'


export default function Profile() {
   const [incidents, setIncidents] = useState([]);
   
   const ongId = localStorage.getItem('ongId');
   const ongName = localStorage.getItem('ongName');
   
   const history = useHistory();

   async function handleDeleteIncident(id){
      try {
         await api.delete(`incidents/${id}`, {
            headers: {
               authorization: ongId,
            }
         })

         setIncidents(incidents.filter(incident => incident.id !== id))
      } catch (error) {
         alert('Erro ao deletar caso, tente novamente');
      }      
   }

   useEffect(() => {
      api.get('profile',{
         headers: {
            Authorization: ongId,            
         }
      }).then(response =>{
         setIncidents(response.data);
      })      
   }, [ongId]);

   function handleLogout() {
      localStorage.clear()
      history.push('/')
   }

   return (
      <div className="profile-container">
         <header>
            <img src={LogoImg} alt="BeTheHero" />
            <span>Bem vinda {ongName}</span>

            <Link className="button" to="/incident/new">Cadastrar novo caso</Link>
            <button type="button" onClick={() => handleLogout()}>
               <FiPower size={16} color="#e04041" />
            </button>
         </header>

         <h1>Casos cadastrados</h1>
         <ul>
             {incidents.map(incident => (
                <li key={incident.id}>
                <strong>CASO: </strong>
                <p>{incident.title}</p>

                <strong>DESCRIÇÃO: </strong>
                <p>{incident.description}</p>

                <strong>Valor: </strong>
                <p>{Intl.NumberFormat('pt-BR', {
                           style: 'currency',
                           currency: 'BRL'
                        }).format(incident.value)}</p>

                <button onClick={() => handleDeleteIncident(incident.id)} type='button'>
                    <FiTrash2 size={20} color="a8a8b3" />
                </button>
             </li>             
             ))}
         </ul>
            
      </div>
   );
}