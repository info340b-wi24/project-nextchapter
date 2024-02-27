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
