import React, {  useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import axios from 'axios';
function AddZone() {
    const [series, setSeries] = useState([]);
    const [nom, setNom] = useState(null);
    const [villes, setVilles] = useState([]);
    const [selectedValue, setSelectedValue] = useState(null);
    const [villeById,setVilleById] = useState([]);

    const getVilles = async () => {
        try {
          const response = await axios.get(`/villes/all`);
          setVilles(response.data);
        } catch (error) {
          console.log(error);
        }
      }
      const getVilleById = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/villes/${selectedValue}`);
            setVilleById(response.data);
        } catch (error) {
            console.error(error);
        }
      };
    const addSerie = async () => {
        try {
            const response = await axios.post('http://localhost:8080/zones/save', { nom: nom, ville: villeById});
            setSeries([...series, response.data]);
            setNom(null);

        } catch (error) {
            console.error(error);
        }
        //window.location.reload();
        window.location.replace('/admin/zones');
        //history('admin/', { replace: true });

    };
    const handleChange = event => {
        setSelectedValue(event.target.value);
    };
    useEffect(() => {
        getVilles();
        getVilleById();


    }, [selectedValue]);

  return (
    <div>
       <Container>
                <h3><b>Add Zone :</b></h3>
                <Form onSubmit={addSerie}>
                    <FormGroup>
                        <Label htmlFor='nom'>Nom :</Label>
                        <Input type='text' name='nom' id='nom' value={nom} onChange={(e) => setNom(e.target.value)} />
                        <select className='form-select my-2' value={selectedValue} onChange={handleChange}>
                            <option value="" disabled>Select a City</option>
                            {villes.map(item => (
                                <option key={item.id} value={item.id}>
                                    {item.nom}
                                </option>
                            ))}
                        </select>
                    </FormGroup>
                    <FormGroup>
                        <Button color="primary" type="submit">Save</Button>{' '}
                        <Button color="secondary" tag={Link} to="/admin/zones">Cancel</Button>
                    </FormGroup>
                </Form>
            </Container>
    </div>
  )
}

export default AddZone;
