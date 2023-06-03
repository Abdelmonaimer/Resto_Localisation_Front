import React, {useState, useEffect} from 'react';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

function EditVille() {
    const { id } = useParams();
    const [villes, setVilles] = useState([]);
    const [nom, setNom] = useState(null);

    const getVilleById = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/villes/${id}`);
            setVilles(response.data);
            setNom(response.data.nom);
        } catch (error) {
            console.error(error);
        }
      };
      const updateVille = async () => {
        try {
            const response = await axios.put(`http://localhost:8080/villes/${id}`, { id:id ,nom: nom });
            const updatedUsers = villes.map((ville) => {
                if (ville.id === response.data.id) {
                    return response.data;
                }
                return ville;
            });
            setVilles(updatedUsers);
            setNom(null);
            
        } catch (error) {
            console.error(error);
        }
       // window.location.reload();
        window.location.replace('/admin/');
    };
    useEffect(() => {
        getVilleById();

    }, []);
  return (
    <div>
      <Container>
          <h3><b>Add City :</b></h3>
            <Form onSubmit={updateVille}>
                <FormGroup>
                    <Label htmlFor='nom'>Nom :</Label>
                    <Input type='text' name='nom' id='nom' value={nom} onChange={(e) => setNom(e.target.value)} />
                </FormGroup>
                <FormGroup>
                <Button color="success" type="submit">Update</Button>{' '}
                <Button color="secondary" tag={Link} to="/admin/">Cancel</Button>
                </FormGroup>
            </Form>
        </Container>
    </div>
  )
}

export default EditVille;
