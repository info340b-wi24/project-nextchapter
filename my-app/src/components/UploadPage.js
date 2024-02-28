import React from 'react';

function BookUploadForm() {
    return (
        <div>
            <header className="page-title">
                <h2>List A Book</h2>
            </header>

            <div className="upload-box">
                <form>
                    <div className="button-container">
                        <button className="center-button">Giveaway Book</button>
                        <button className="center-button">Swap Book</button>
                    </div>

                    <label htmlFor="emailInput">Your Email Address:</label>
                    <input id="emailInput" className="upload-form" name="emailInput" type="email" required />

                    <label className="upload-spec" htmlFor="bookTitleInput">Book Title:</label>
                    <input id="bookTitleInput" className="upload-form" name="bookTitleInput" required />

                    <label htmlFor="authorInput">Author:</label>
                    <input id="authorInput" className="upload-form" name="authorInput" required />

                    <label htmlFor="bookGenreTags">Genre Tags:</label>
                    <div className="tagsInBox">
                        <div className="tagButtons">
                            <button className="type-button-fiction" value="Fiction">Fiction</button>
                            <button className="type-button-non" value="Non-Fiction">Non-Fiction</button>
                            <button className="type-button-fantasy" value="Fantasy">Fantasy</button>
                            <button className="type-button-mystery" value="Mystery">Mystery</button>
                            <button className="type-button-romance" value="Romance">Romance</button>
                            <button className="type-button-nar" value="Narrative">Narrative</button>
                            <button className="type-button-informative" value="Informative">Informative</button>
                            <button className="type-button-chid" value="Children">Children</button>
                            <button className="type-button-science" value="Science">Science</button>
                            <button className="type-button-biography" value="Biography">Biography</button>
                            <button className="type-button-fairy" value="Fairy tale">Fairy tale</button>
                            <button className="type-button-poetry" value="Poetry">Poetry</button>
                        </div>
                    </div>

                    <label htmlFor="bookTypeInput">Book Type:</label>
                    <select id="bookTypeInput" className="upload-form" name="bookTypeInput" required>
                        <option value="" disabled selected>Select Book Type</option>
                        <option value="Hard cover">Hard Cover</option>
                        <option value="Soft cover">Soft Cover</option>
                    </select>

                    <label className="upload-spec" htmlFor="bookLengthInput">Book Length:</label>
                    <select id="bookLengthInput" className="upload-form" name="bookLengthInput" required>
                        <option value="" disabled selected>Select Book Length</option>
                        <option value="Short">Short</option>
                        <option value="Medium">Medium</option>
                        <option value="Long">Long</option>
                    </select>

                    <label htmlFor="bookConditionInput">Book Condition:</label>
                    <select id="bookConditionInput" className="upload-form" name="bookConditionInput" required>
                        <option value="" disabled selected>Select Book Condition</option>
                        <option value="New">New</option>
                        <option value="Like New">Like New</option>
                        <option value="Very Good">Very Good</option>
                        <option value="Good">Good</option>
                        <option value="Fair">Fair</option>
                        <option value="Poor">Poor</option>
                    </select>

                    <label htmlFor="fileInput">Choose a file:</label>
                    <input type="file" id="fileInput" name="fileInput" accept="image/*" />

                    <div className="upload-book">
                        <button className="finalcenter-button" type="submit">Upload</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default BookUploadForm;





// import React, { useState } from 'react';
// import firebaseConfig from '../firebase/firebase-config';

// function Upload() {
//   const [formData, setFormData] = useState({
//     bookTitle: '',
//     author: '',
//     bookType: '',
//     bookLength: '',
//     bookCondition: '',
//     file: null,
//     genreTags: [],
//   });

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       [name]: value,
//     }));
//   };

//   const handleFileChange = (event) => {
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       file: event.target.files[0],
//     }));
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       // Remove the duplicate initialization here
//       const db = firebase.database(); // Initialize Realtime Database
//       await db.ref('books').push(formData); // Push form data to a "books" node
//       console.log('Book uploaded successfully!');
//     } catch (error) {
//       console.error('Error uploading book:', error);
//     }
//   };

//   const handleGenreTagClick = (genre) => {
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       genreTags: prevFormData.genreTags.includes(genre)
//         ? prevFormData.genreTags.filter((tag) => tag !== genre)
//         : [...prevFormData.genreTags, genre],
//     }));
//   };

//   return (
//     <div className="container">
//       <nav>
//         {/* Navigation content */}
//       </nav>
      
//       <header className="page-title">
//         <h2>List A Book</h2>
//       </header>

//       <div className="upload-box">
//         <form onSubmit={handleSubmit}>
//           {/* Your form inputs and buttons here, using onChange to update state */}
//           <label htmlFor="bookTitleInput">Book Title:</label>
//           <input
//             id="bookTitleInput"
//             className="upload-form"
//             name="bookTitle"
//             required
//             onChange={handleInputChange}
//           />

//           {/* Repeat for other inputs, adjusting name and handler as necessary */}

//           <label htmlFor="fileInput">Choose a file:</label>
//           <input
//             type="file"
//             id="fileInput"
//             name="fileInput"
//             accept="image/*"
//             onChange={handleFileChange}
//           />

//           <div className="upload-book">
//             <button className="finalcenter-button" type="submit">Upload</button>
//           </div>
//         </form>
//       </div>

//       <footer>
//         {/* Footer content */}
//       </footer>
//     </div>
//   );
// }

// export default Upload;
