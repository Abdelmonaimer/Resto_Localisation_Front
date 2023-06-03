import React, { useEffect, useState } from 'react';
import { Button, ButtonGroup, Container, Table, Input } from 'reactstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Zone() {
    const [series, setSeries] = useState([]);
    const [loading, setLoading] = useState(false);
  
    const [searchTerm, setSearchTerm] = useState('');
  
  
  
    const getSeries = async () => {
      try {
        const response = await axios.get(`/zones/all`);
        setSeries(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    const deleteSerie = async (id) => {
        try {
          await axios.delete(`/zones/delete/${id}`);
          const updatedUsers = series.filter((serie) => serie.id !== id);
          setSeries(updatedUsers);
        } catch (error) {
          console.error(error);
        }
      };
      useEffect(() => {

        setLoading(true);
        getSeries();
    
    
      }, []);
      const filteredData = series.filter((item) => {
        // Modify the condition based on your search requirements
        return item.nom?.toLowerCase()?.includes(searchTerm?.toLowerCase());
    
      });
      const handleSearch = (e) => {
        setSearchTerm(e.target.value);
      };
      if (loading) {
        return <p>Loading...</p>;
      }
      const serieList = filteredData.map(serie => {

        return <tr key={serie.id}>
          <td style={{ whiteSpace: 'nowrap' }}>{serie.id}</td>
          <td>{serie.nom}</td>
          <td>
            <ButtonGroup>
              <Button size="sm" color="primary" tag={Link} to={"" + serie.id}>Edit</Button>
              <Button size="sm" color="danger" onClick={() => deleteSerie(serie.id)}>Delete</Button>
            </ButtonGroup>
          </td>
        </tr>
      });
  return (
    <div>
      <Container fluid>
        <div className=''>
          
          
        </div>
        <h2 className='mt-2'>Liste des Zones</h2>
        <Button className='mt-2' color='success' tag={Link} to="/admin/zones/save">Ajouter Zone</Button>
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
            {serieList}
          </tbody>
        </Table>
      </Container>
    </div>
  )
}

export default Zone;
