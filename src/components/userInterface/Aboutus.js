import React from 'react';
import logo from '../images/aboutus.png';

function Aboutus() {
    return (
        <div className='row my-3 rounded-3 shadow'>
            <div className='col-5 p-5'>
                <img className='img-fluid rounded-3' src={logo} alt='about-Resto' />
            </div>
            <div className='col-7 p-5'>
                <p>Welcome to <b>Find Restaurant</b> website!<br></br>
                    Our platform is designed to help you find the best restaurants near you, no matter where you are. Whether you're looking for a place for a romantic dinner, a business lunch, or simply to satisfy your taste buds, our site offers an exceptional culinary discovery experience.<br></br>
                    <br></br>
                    <b>What sets us apart?</b><br></br>
                    <br></br>
                    <b>1.</b> Intuitive search: Our user-friendly interface allows you to easily search for restaurants based on various criteria such as location, cuisine type, prices, ratings, and much more. You can refine your results to find exactly what you're looking for.<br></br>
                    <br></br>
                    <b>2.</b> Ratings and reviews: We believe in the power of community. Our users can rate and leave reviews for the restaurants they have visited, giving you honest insights into the dining experience. You can also share your own ratings to help others make their choices.<br></br>
                    <br></br>
                    <b>3.</b> Detailed information: We provide comprehensive information for each listed restaurant. From menu descriptions to opening hours, contact details, and reservation options, we ensure you have all the necessary information to make an informed decision.<br></br>
                    <br></br>
                    <b>4.</b> Customized filters: We understand that everyone has unique preferences. You can customize your search using our advanced filters to find vegetarian, vegan, gluten-free, family-friendly restaurants, and many other options.<br></br>
                    <br></br>
                    <b>5.</b> Personalized recommendations: Through our intelligent algorithm, we are able to recommend restaurants based on your past preferences and ratings. This way, you'll discover new culinary gems that match your taste.<br></br>
                    <br></br>
                    <b>6.</b> Maps and directions: Our integrated maps make it easy for you to locate restaurants and plan your route to get there. You won't waste time searching for directions anymore.<br></br>
                    <br></br>
                    We strive to provide the best possible experience for food enthusiasts. Our team works tirelessly to keep our database up to date and add new restaurants regularly. We are also open to feedback and suggestions as we continuously aim to improve our service to meet your needs.<br></br>
                    <br></br>
                    Whether you're a food connoisseur, a passionate traveler, or simply someone who enjoys a good dining experience, our restaurant locator website is here to accompany you on your quest for gastronomic delights. Explore, savor, and share your love for good food with us!<br></br>
                    <br></br>
                    <b>Welcome to our platform and bon appétit!</b></p>
            </div>
        </div>
    )
}

export default Aboutus
