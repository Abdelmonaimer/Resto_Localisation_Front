import React, {useState, useEffect} from 'react';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
function EditSpecialite() {
    const { id } = useParams();
    const [series, setSeries] = useState([]);
    const [nom, setNom] = useState(null);
    const getSerieById = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/specialites/${id}`);
            setSeries(response.data);
            setNom(response.data.nom);
        } catch (error) {
            console.error(error);
        }
      };
      const updateSerie = async () => {
        try {
            const response = await axios.put(`http://localhost:8080/specialites/${id}`, { id:id ,nom: nom });
            const updatedUsers = series.map((serie) => {
                if (serie.id === response.data.id) {
                    return response.data;
                }
                return serie;
            });
            setSeries(updatedUsers);
            setNom(null);
            
        } catch (error) {
            console.error(error);
        }
       // window.location.reload();
        window.location.replace('/admin/specialities');
    };
    useEffect(() => {
        getSerieById();

    }, []);
  return (
    <div>
      <Container>
          <h3><b>Edit Serie :</b></h3>
            <Form onSubmit={updateSerie}>
                <FormGroup>
                    <Label htmlFor='nom'>Nom :</Label>
                    <Input type='text' name='nom' id='nom' value={nom} onChange={(e) => setNom(e.target.value)} />
                </FormGroup>
                <FormGroup>
                <Button color="success" type="submit">Update</Button>{' '}
                <Button color="secondary" tag={Link} to="/admin/specialities">Cancel</Button>
                </FormGroup>
            </Form>
        </Container>
    </div>
  )
}

export default EditSpecialite;
