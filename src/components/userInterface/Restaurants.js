import React, { useEffect, useState } from 'react';
import { Container } from 'reactstrap';
import { Link, useParams } from 'react-router-dom';
import { PersonFill, StarFill, Star } from 'react-bootstrap-icons';

import axios from 'axios';
import logo from '../images/clayoven1.jpg';

const StarRating = ({ rating, onRatingChange }) => {
    const [hoveredRating, setHoveredRating] = useState(0);

    const handleStarHover = (hoveredStar) => {
        setHoveredRating(hoveredStar);
    };

    const handleStarClick = (selectedRating) => {
        onRatingChange(selectedRating);
    };

    return (
        <div>
            <label className='h5 me-2'>Rating:</label>
            {[1, 2, 3, 4, 5].map((star) => (
                <span
                    key={star}
                    onMouseEnter={() => handleStarHover(star)}
                    onMouseLeave={() => handleStarHover(0)}
                    onClick={() => handleStarClick(star)}
                    className='me-2'
                >
                    {(hoveredRating || rating) ? <StarFill color='#fcd53f' width={25} height={25} /> : <Star width={25} height={25} />}
                </span>
            ))}
        </div>
    );
};

function RestaurantUI() {
    const { id } = useParams();
    const [restaurantData, setResraurantData] = useState([]);
    const [spec, setSpec] = useState([]);
    const [photos, setPhotos] = useState([]);


    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');
    const [nom, setNom] = useState('');
    const [comments, setComments] = useState([]);


    const getRestaurantsById = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/restaurants/${id}`);
            setResraurantData(response.data);
        } catch (error) {
            console.error(error);
        }
    };
    const getSpec = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/restaurants/${id}/specialite`);
            setSpec(response.data);
        } catch (error) {
            console.error(error);
        }
    };
    const getPhotoByResto = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/photos/resto/${id}/photos`);
            setPhotos(response.data);
        } catch (error) {
            console.error(error);
        }
    };
    const filteredPhotos = photos.filter((photo) => photo.id === 1);



    useEffect(() => {
        getRestaurantsById();
        getSpec();
        getPhotoByResto();

    }, []);
    const stars = [];

    for (let i = 0; i < restaurantData.rank; i++) {
        //stars.push('⭐️'); // You can replace '⭐️' with the star icon of your choice
        stars.push(<StarFill className='me-1' color='#fcd53f' width={20} height={20} />);
    }
    

    const handleRatingChange = (selectedRating) => {
        setRating(selectedRating);
    };

    const handleCommentChange = (event) => {
        setComment(event.target.value);
    };
    const handleNomChange = (event) => {
        setNom(event.target.value);
    };
    const [starRate, setStarRate] = useState(0);
    const handleSubmit = (event) => {
        event.preventDefault();
        const newComment = {
            rating: rating,
            comment: comment,
            nom: nom
        };
        setStarRate(newComment.rating);
        // Add the new comment to the comments list
        setComments([...comments, newComment]);

        // Reset the rating and comment inputs
        setRating(0);
        setComment('');
        setNom('');
    };
    const rateStars = [];

    for (let i = 0; i < starRate; i++) {
        rateStars.push(<StarFill className='me-1' color='#fcd53f' width={20} height={20} />); // You can replace '⭐️' with the star icon of your choice
    }

    return (
        <div>
            <div className='row p-3 shadow rounded-3 '>
                <div className='col-md-7'>
                    <div className='row justify-content-center p-2 '>
                        <div className='col-md-6 my-2'>
                            <img className='img-fluid rounded-3' src={logo} alt='' />
                        </div>
                        <div className='col-md-6 my-2'>
                            <div class="alert alert-light text-center rounded-5" role="alert">
                                <h2><b>{restaurantData.nom}</b></h2>
                            </div>
                            <div className='row justify-content-center my-2'>
                                <div className='col-md-4'>
                                    <h6><b className=''>Opening Days</b></h6>
                                </div>
                                <div className='col-md-8'>
                                    <h6><i className='me-2'>{restaurantData.week}</i></h6>
                                </div>
                            </div>
                            <div className='row justify-content-center my-2'>
                                <div className='col-md-4'>
                                    <h6><b className=''>Opening Hours</b></h6>
                                </div>
                                <div className='col-md-8'>
                                    <h6><span className=" badge rounded-pill bg-success text-light">{restaurantData.open_hour}</span></h6>
                                </div>
                            </div>
                            <div className='row justify-content-center my-2'>
                                <div className='col-md-4'>
                                    <h6><b className=''>Closing Hours</b></h6>
                                </div>
                                <div className='col-md-8'>
                                    <h6><span className=" badge rounded-pill bg-danger text-light"> {restaurantData.close_hour}</span></h6>
                                </div>
                            </div>
                            <div className='row justify-content-center my-2'>
                                <div className='col-md-4'>
                                    <h6><b className=''>Rank </b></h6>
                                </div>
                                <div className='col-md-8'>
                                    <h6> {stars} </h6>
                                </div>
                            </div>
                            <div className='row justify-content-center my-2'>
                                <div className='col-md-4'>
                                    <h6><b className=''>Adresse </b></h6>
                                </div>
                                <div className='col-md-8'>
                                    <h6> {restaurantData.adresse} </h6>
                                </div>
                            </div>
                            <div className='row justify-content-center my-2'>
                                <div className='col-md-4'>
                                    <h6><b className=''>Specialité </b></h6>
                                </div>
                                <div className='col-md-8'>
                                    {spec.map(s => (
                                        <h6 key={s.id}> {s.nom} {' '}</h6>
                                    ))}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-5'>
                    <h2>Rate and Comment</h2>
                    <form onSubmit={handleSubmit}>
                        <StarRating rating={rating} onRatingChange={handleRatingChange} />
                        
                            <label htmlFor="nom" className='h5 me-2'>Nom :</label>
                            <input
                                id="nom"
                                value={nom}
                                onChange={handleNomChange}
                                className="form-control" placeholder="Type your name"
                            />
                        
                        
                            <label htmlFor="comment" className='h5 me-2'>Comment:</label>
                            <textarea
                                id="comment"
                                value={comment}
                                onChange={handleCommentChange}
                                className="form-control" placeholder="Leave a comment here"
                            ></textarea>
                        
                        <button type="submit" className='btn btn-outline-info'><b>Submit</b></button>
                    </form>
                </div>

            </div>
            <div className='row justify-content-center  p-3 mt-4 shadow' style={{ height: '500px' }}>
                <div className='col-md-5'>
                    <h2>Reviews : </h2>
                    <div className='ms-3'>
                    <h6><b className=''><PersonFill width={30} height={30} /> Monaim </b></h6>
                    <p>{stars}</p>
                    <p>Good jombe</p>
                    </div>
                    {comments.length === 0 ? (
                        <div >

                        </div>
                    ) : (
                        <div className='ms-3'>
                            {comments.map((comment, index) => (
                                <div key={index}>
                                    <h6><b className=''><PersonFill width={30} height={30} /> {comment.nom} </b></h6>
                                    <p> {rateStars}</p>
                                    <p> {comment.comment}</p>
                                </div>
                            ))}
                        </div>
                    )}

                </div>
                <div className='col-md-7 py-3 '>
                    <iframe
                        className='rounded-3 justify-content-center'
                        title="Google Maps"
                        width="100%"
                        height="100%"
                        src={"https://maps.google.com/maps?q=" + restaurantData.lattitude + "," + restaurantData.longitude + "&hl=es;&output=embed"}
                        allowFullScreen
                    ></iframe>
                </div>
            </div>


        </div>
    );

}
export default RestaurantUI;