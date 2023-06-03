import React, { useEffect, useState } from 'react';
import { Container, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../../Css/RestoCardsCss.css';
import logo from '../images/clayoven2.jpg'

function SearchByZone() {
    const [villes, setVilles] = useState([]);
    const [selectedValue, setSelectedValue] = useState('');

    const [zones, setZones] = useState([]);
    const [selectedZone, setSelectedZone] = useState('');

    const [specialite, setSpecialite] = useState([]);
    const [selectedSpecialite, setSelectedSpecialite] = useState('');

    const [series, setSeries] = useState([]);
    const [selectedSerie, setSelectedSerie] = useState('');



    const [restos, setRestos] = useState([]);




    const getVilles = async () => {
        try {
            const response = await axios.get(`/villes/all`);
            setVilles(response.data);
        } catch (error) {
            console.log(error);
        }
    }
    const getZonesByVille = async () => {
        try {
            const response = await axios.get(`/villes/${selectedValue}/zones`);
            setZones(response.data);
        } catch (error) {
            console.log(error);
        }
    }
    const getSpecialities = async () => {
        try {
            const response = await axios.get(`/specialites/all`);
            setSpecialite(response.data);
        } catch (error) {
            console.log(error);
        }
    }
    const getSeries = async () => {
        try {
            const response = await axios.get(`/series/all`);
            setSeries(response.data);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getVilles();
        getZonesByVille();
        getSpecialities();
        getSeries();


    }, [selectedValue]);

    const getRestaurantsByVilleZones = () => {
        // Make the API request to filter exams by date
        axios.get(`/villes/${selectedValue}/zones/${selectedZone}/restaurants`)
            .then(response => {
                // Set the filtered exams in the state
                setRestos(response.data);
            })
            .catch(error => {
                // Handle the error
                console.error(error);
            });
    };
    const getRestaurantsByVilleZonesBySpecialite = () => {
        // Make the API request to filter exams by date
        axios.get(`/restaurants/${selectedValue}/zones/${selectedZone}/restaurants/specialite/${selectedSpecialite}`)
            .then(response => {
                // Set the filtered exams in the state
                setRestos(response.data);
            })
            .catch(error => {
                // Handle the error
                console.error(error);
            });
    };
    const getRestaurantsByVilleZonesBySerie = () => {
        // Make the API request to filter exams by date
        axios.get(`/restaurants/${selectedValue}/zones/${selectedZone}/restaurants/serie/${selectedSerie}`)
            .then(response => {
                // Set the filtered exams in the state
                setRestos(response.data);
            })
            .catch(error => {
                // Handle the error
                console.error(error);
            });
    };

    const handleChange = event => {
        setSelectedValue(event.target.value);
    };
    const handleZoneChange = event => {
        setSelectedZone(event.target.value);
    };
    const handleSpecialiteChange = event => {
        setSelectedSpecialite(event.target.value);
    };
    const handleSeriChange = event => {
        setSelectedSerie(event.target.value);
    };
    const handleFindClick = () => {
        getRestaurantsByVilleZones();
    };
    const handleFilterClick = () => {
        if (selectedSpecialite != '' || selectedSerie != '') {
            getRestaurantsByVilleZonesBySpecialite();
            getRestaurantsByVilleZonesBySerie();
        }
        else {
            getRestaurantsByVilleZones();
        }
    };
    return (
        <div className='justify-content-center my-5 pt-5 ' >
            <Container className='mb-3 pt-5 rounded-4 shadow ' style={{ backgroundColor: 'white' }}>
                <h2 style={{ color: '#576CBC' }}><b>Which City And which Zone you'd like to visit ? </b></h2>
                <div className='row p-5  justify-content-center'>
                    <div className='col-md-6'>
                        <select className='form-select mb-2' value={selectedValue} onChange={handleChange}>
                            <option value="" disabled>Select a City</option>
                            {villes.map(item => (
                                <option key={item.id} value={item.nom}>
                                    {item.nom}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className='col-md-6'>
                        <select className='form-select mb-2' value={selectedZone} onChange={handleZoneChange}>
                            <option value="" selected>Select a Zone</option>
                            {zones.map(item => (
                                <option key={item.id} value={item.nom}>
                                    {item.nom}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className='row p-2 justify-content-center text-center'>
                    <div className='col-md-4'></div>
                    <div className='col-md-4'>
                        <Button className='btn btn-outline-info btn-round findbtn' onClick={handleFindClick} ><b>Find Your Restaurant</b></Button>
                    </div>
                    <div className='col-md-4'></div>
                </div>
            </Container>
            <Container className='my-5 py-5' fluid style={{}}>
                <Container >
                    <div className='row p-2 justify-content-center'>
                        <div className='col-2'><h4><b>Filter By : </b></h4></div>
                        <div className='col-3'>
                            <select className='form-select mb-2' value={selectedSpecialite} onChange={handleSpecialiteChange}>
                                <option value="" selected>All specialities</option>
                                {specialite.map(item => (
                                    <option key={item.id} value={item.nom}>
                                        {item.nom}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className='col-2'><h4><b>Or Serie: </b></h4></div>
                        <div className='col-3'>
                            <select className='form-select mb-2' value={selectedSerie} onChange={handleSeriChange}>
                                <option value="" selected>All Series</option>
                                {series.map(item => (
                                    <option key={item.id} value={item.nom}>
                                        {item.nom}
                                    </option>
                                ))}
                            </select>
                        </div>

                    </div>
                    <div className='row pb-2 justify-content-center text-center'>
                        <div className='col-md-4'></div>
                        <div className='col-md-4'>
                            <Button className='btn btn-outline-info btn-round findbtn' onClick={handleFilterClick} ><b>Filter</b></Button>
                        </div>
                        <div className='col-md-4'></div>
                    </div>
                </Container>
                <div className='row justify-content-center'>
                    {restos.length > 0 ? (
                        restos.map(resto => (
                            <div className='col-md-3'>
                                <div className="card card-blog" key={resto.id}>
                                    <div className="card-image">
                                        <Link to="#"> <img className="img" src={logo} alt='' />
                                            <div className="card-caption"> {resto.nom} </div>
                                        </Link>
                                        <div className="ripple-cont"></div>
                                    </div>
                                    <div className="table">
                                        <h5 className="category " style={{ color: '#869aeb' }}><b>{resto.adresse}</b></h5>
                                        <p className="card-description">
                                            <h6><b>Opening Hours : </b><span className=" badge rounded-pill bg-info text-light">{resto.open_hour} - {resto.close_hour}</span></h6>

                                        </p>
                                        <Button className='btn btn-info btn-round' tag={Link} to={"restaurants/" + resto.id}><b>Details</b></Button>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className='col-7'>
                            <p className="alert alert-danger text-center" role="alert"><b>No Restaurants found for the selected Zone.</b></p>
                        </div>
                    )}

                </div>
            </Container>
        </div>
    );



}
export default SearchByZone;