import './UserView.css';
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import * as goRestService from '../../services/GoRestService';
import { Button } from 'react-bootstrap';

const UserView = () => {
  const { id } = useParams();
  const [user, setUser] = useState({
    name: '',
    email: '',
    gender: '',
    status: '',
  });

  const getUserInfo = async (id) => {
    const response = await goRestService.getUser(id);
    setUser(response.data);
  };

  const handleDelete = async (id) => {
    await goRestService.deleteUser(parseInt(id ?? ''));
    
  };

  const handleUpdate = async () => {
    setUser({ ...user, status: 'updated' });
    const respuesta = await goRestService.updateUser(parseInt(id ?? ''), user);
    console.log(respuesta);
  };

  useEffect(() => {
    getUserInfo(parseInt(id ?? ''));
  }, []);

  return(
    <div className='container'>
        <h1>Usuario {id}</h1>
        <Link to='/connection2' className='Back'>
            Regresa nuevamente aquí
        </Link>
        <div className='UserItems'>
            <h5>Nombre: {user?.name || ''}</h5>
            <h5>Email: {user?.email || ''}</h5>
            <h5>Gender: {user?.gender || ''}</h5>
            <h5>Status: {user?.status || ''}</h5>
        </div>
        <Button className='BotonDelete' onClick={handleDelete}>
            Eliminar
        </Button>
        <Button className='BotonUpdate' onClick={handleUpdate}>
            Actualizar
        </Button>
    </div>
  );

};

export default UserView; 