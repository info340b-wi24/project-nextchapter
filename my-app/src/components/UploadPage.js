import React, { useState } from 'react';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from '../firebase/ firebase-config';
import { serverTimestamp } from 'firebase/database';


const Form = () => {
    const [user, setUser] = useState({
        Decision: '', 
        BookTitle: '',
        Author: '',
        Genre: '',
        Length: '',
        Condition: '',
        CoverType: '',
        Photo: null,

        createdAt: serverTimestamp(),
    });

    const data = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
        console.log(user);
    };

    const [image, setImage] = useState(null);
    const [giveawayClicked, setGiveawayClicked] = useState(false);
    const [swapClicked, setSwapClicked] = useState(false);

    const handleImageChange = e => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]); 
        }
    };
    
    const handleGiveaway = () => {
        setUser({ ...user, Decision: 'Giveaway' });
        setGiveawayClicked(true); 
        setSwapClicked(false); 
    };

    const handleSwap = () => {
        setUser({ ...user, Decision: 'Swap' });
        setSwapClicked(true); 
        setGiveawayClicked(false); 
    };

    const getData = async (e) => { 
        e.preventDefault();
    
        // First, upload the image to Firebase Storage if an image is selected
        if (image) {
            const storageRef = ref(storage, `images/${image.name}`);
            
            try {
                const snapshot = await uploadBytes(storageRef, image);
                const downloadURL = await getDownloadURL(snapshot.ref);
    
            
                const formData = {
                    ...user,
                    Photo: downloadURL, 
                };
    
                const options = {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formData)
                };
    
                const response = await fetch('https://project-nextchapter-f60bb-default-rtdb.firebaseio.com/UserData.json', options);
    
                if (!response.ok) {
                    throw new Error('Failed to post data');
                }
                alert('Your book has been successfully submitted!');
            } catch (error) {
                alert('Error submitting your book. Please try again.');
            }
        } else {
            alert('Please select an image for the book.');
        }
    };
    

    return (
        <div>
        <header>
            <h1>List A Book</h1>
        </header>

        <div className='form'>
            <div className="form-info">
            <h2>Upload a Book to Next Chapter!</h2>
            <p>Simply fill out the form to share your old stories</p>
            </div>
            <div className='container'>
            <form onSubmit={getData} method='POST'> 
                <div className='button-container'>
                    <button type="button" className={`choice-button ${giveawayClicked ? 'clicked' : ''}`} onClick={handleGiveaway}>Giveaway</button>
                    <button type="button" className={`choice-button ${swapClicked ? 'clicked' : ''}`} onClick={handleSwap}>Swap</button>
                </div>
                    <label htmlFor="Name">Your Name:</label>
                    <input
                        type='text'
                        name='Name'
                        id='Name'
                        placeholder='Your Name'
                        value={user.Name}
                        onChange={data}
                        autoComplete='off'
                        required
                    />
                    <label htmlFor="BookTitle">Book Title:</label>
                    <input
                        type='text'
                        name='BookTitle'
                        id='BookTitle'
                        placeholder='Book Title'
                        value={user.BookTitle}
                        onChange={data}
                        autoComplete='off'
                        required
                    />
                    <label htmlFor="Author">Author Name:</label>
                    <input
                        type='text'
                        name='Author'
                        id='Author'
                        placeholder='Author'
                        value={user.Author}
                        onChange={data}
                        autoComplete='off'
                        required
                    />
                    <label htmlFor="Genre">Genre:
                    <select
                        name='Genre'
                        id = 'Genre'
                        value={user.Genre}
                        onChange={data}
                        required
                    >
                        <option value='' disabled>Select Genre</option>
                        <option value='Fiction'>Fiction</option>
                        <option value='Non-Fiction'>Non-Fiction</option>
                        <option value='Fantasy'>Fantasy</option>
                        <option value='Mystery'>Mystery</option>
                        <option value='Romance'>Romance</option>
                        <option value='Narrative'>Narrative</option>
                        <option value='Informative'>Informative</option>
                        <option value='Children'>Children</option>
                        <option value='Science'>Science</option>
                        <option value='Biography'>Biography</option>
                        <option value='Fairy tale'>Fairy tale</option>
                        <option value='Poetry'>Poetry</option>
                        <option value='Horror'>Horror</option>
                    </select>
                    </label>

                    <label htmlFor="Length">Book Length:
                    <select
                        name='Length'
                        id='Length'
                        value={user.Length}
                        onChange={data}
                        required
                    >
                        <option value='' disabled>Select Length</option>
                        <option value='Short'>Short</option>
                        <option value='Medium'>Medium</option>
                        <option value='Long'>Long</option>

                    </select>
                    </label>


                    <label htmlFor="Condition">Book Condition:
                    <select
                        name='Condition'
                        id="Condition"
                        value={user.Condition}
                        onChange={data}
                        required
                    >
                        <option value='' disabled>Select Condition</option>
                        <option value='New'>New</option>
                        <option value='Like New'>Like New</option>
                        <option value='Good'>Good</option>
                        <option value='Acceptable'>Acceptable</option>
                    </select>
                    </label>

                    <label htmlFor="Cover">Cover Type:
                    <select
                        name='CoverType'
                        id="Cover"
                        value={user.CoverType}
                        onChange={data}
                        required
                    >
                        <option value='' disabled>Select Cover Type</option>
                        <option value='Hardcover'>Hardcover</option>
                        <option value='Paperback'>Paperback</option>
                    </select>
                    </label>

                    <label htmlFor="Comment">Leave a Comment:
                    <input
                        type='text'
                        name='Comment'
                        id="Comment"
                        placeholder='Leave a Comment'
                        value={user.Comment}
                        onChange={data}
                        autoComplete='off'
                        required
                    />
                    </label>

                    <label htmlFor="Book image">Upload Book Image:
                    <input id="Book image" type="file" onChange={handleImageChange} />
                    </label>

                    <button type="submit" className="submit-button" >Submit</button>
                </form>
            </div>
        </div>
    </div>
    );
};

export default Form;