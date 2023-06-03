import React, { useEffect, useState } from 'react';
import { Button, ButtonGroup, Container, Table, Input } from 'reactstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
function Restaurant() {
    const [series, setSeries] = useState([]);
    const [loading, setLoading] = useState(false);
  
    const [searchTerm, setSearchTerm] = useState('');
    const getSeries = async () => {
        try {
          const response = await axios.get(`/restaurants/all`);
          setSeries(response.data);
          setLoading(false);
        } catch (error) {
          console.log(error);
        }
      };
  
      const deleteSerie = async (id) => {
          try {
            await axios.delete(`/restaurants/delete/${id}`);
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
            <td>{serie.adresse}</td>
            <td>{serie.lattitude}</td>
            <td>{serie.longitude}</td>
            <td>{serie.week}</td>
            <td>{serie.rank}</td>
            <td>{serie.open_hour}</td>
            <td>{serie.close_hour}</td>
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
        <h2 className='mt-2'>Liste des Restaurants</h2>
        <Button className='mt-2' color='success' tag={Link} to="/admin/restaurants/save">Ajouter Restaurant</Button>
        <Input className='mt-2' type='text' value={searchTerm} onChange={handleSearch} placeholder='Search By Name' />
        <Table id='bootstrapdatatable' className='table table-striped table-hover mt-3'>
          <thead>
            <tr>
              <th >ID</th>
              <th >NOM</th>
              <th >ADRESSE</th>
              <th >LATTITUDE</th>
              <th >LONGITUDE</th>
              <th >WEEK</th>
              <th >RANK</th>
              <th >OPEN_HOUR</th>
              <th >CLOSE_HOUR</th>
              <th >Actions</th>
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

export default Restaurant;
