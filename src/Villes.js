import React, { useEffect, useState } from 'react';
import { Button, ButtonGroup, Container, Table, Input } from 'reactstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
//import APIService from './Services/APIService';


function Villes() {
  const [villes, setVilles] = useState([]);
  const [loading, setLoading] = useState(false);

  const [searchTerm, setSearchTerm] = useState('');



  const getVilles = async () => {
    try {
      const response = await axios.get(`/villes/all`);
      setVilles(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }





  const deleteProf = async (id) => {
    try {
      await axios.delete(`/villes/delete/${id}`);
      const updatedUsers = villes.filter((ville) => ville.id !== id);
      setVilles(updatedUsers);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {

    setLoading(true);
    getVilles();


  }, []);

  const filteredData = villes.filter((item) => {
    // Modify the condition based on your search requirements
    return item.nom?.toLowerCase()?.includes(searchTerm?.toLowerCase());

  });
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };
  if (loading) {
    return <p>Loading...</p>;
  }

  const villeList = filteredData.map(ville => {

    return <tr key={ville.id}>
      <td style={{ whiteSpace: 'nowrap' }}>{ville.id}</td>
      <td>{ville.nom}</td>
      <td>
        <ButtonGroup>
          <Button size="sm" color="primary" tag={Link} to={"villes/" + ville.id}>Edit</Button>
          <Button size="sm" color="danger" onClick={() => deleteProf(ville.id)}>Delete</Button>
        </ButtonGroup>
      </td>
    </tr>
  });







  return (
    <div>
      <Container fluid>
        <div className=''>
          
          
        </div>
        <h2 className='mt-2'>Liste des villes</h2>
        <Button className='mt-2' color='success' tag={Link} to="villes/save">Ajouter Ville</Button>
        <Input className='mt-2' type='text' value={searchTerm} onChange={handleSearch} placeholder='Search By Name' />
        <Table id='bootstrapdatatable' className='table table-striped table-hover mt-3'>
          <thead>
            <tr>
              <th width='30%'>ID</th>
              <th width='50%'>NOM</th>
              <th width='20%'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {villeList}
          </tbody>
        </Table>
      </Container>
    </div>

  );
}
export default Villes;