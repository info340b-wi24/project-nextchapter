import React from 'react';
import { Link } from 'react-router-dom';
import briImage from '../images/bri.jpg'; // Update the import path
import kaylaImage from '../images/kayla.jpg';
import alexisImage from '../images/alexis2.jpg';
import ericaImage from '../images/erica.jpg';

function Person(props) {
  return (
    <div className="person-container">
      <div className="img-with-text">
        <img src={props.image} alt={props.name} />
        <p>{props.name}</p>
        <p>{props.description}</p>
      </div>
    </div>
  );
}

function AboutUs(props) {
  return (
    <div>
      <header className="page-title">
        <h2>About Us</h2>
      </header>
      <section className="aboutus-page">
        <h3>What is Next Chapter?</h3>
        <p>Welcome to Next Chapter, your literary haven for sustainable book sharing! Dive into a community-driven platform where book enthusiasts connect through the joy of swapping and giving away books. Say goodbye to overconsumption and embrace a more sustainable book lifecycle. Next Chapter is not just an app; it's a vibrant community fostering diverse literature, reducing waste, and making reading accessible to all. Join us on this exciting literary adventure and let each chapter unfold with shared stories and connections!</p>
      </section>
      <section className="aboutus-page">
        <h3>Problem Description</h3>
        <p>Next Chapter addresses the problem of book accessibility and overconsumption in reading by creating a web app that promotes a sustainable approach to the lifecycle of books. The problem involves the inaccessibility of books for certain demographics and the environmental impact of overconsumption. Existing solutions lack a robust community interaction feature for physical book exchange. </p>
        <p>The app's users include book enthusiasts seeking sustainable access to diverse literature. Key features include book swapping, virtual bookshelves, and search options. Next Chapter aims to reduce waste, make reading more accessible, and foster diversity in literature, providing a holistic and interactive experience for book lovers.</p>
      </section>
      <section className="aboutus-page">
        <h3>Who Are We?</h3> 
        <Person name="Brianna Pak" description="Third Year studying informatics with a focus in project management and data science." image={briImage} />
        <Person name="Kayla Tounaloum" description="Third year studying informatics with a focus in project management and human-computer interaction." image={kaylaImage} />
        <Person name="Alexis Nguyen" description="Senior studying Informatics specializing in frontend development." image={alexisImage} />
        <Person name="Erica Luo" description="Second year studying Psychology with a minor in Informatics." image={ericaImage} />
      </section>
      <footer>
        <p>2024 Next Chapter | Erica Luo, Alexis Nguyen, Brianna Pak, Kayla Tounalom</p>
        <p>Story Book icon by <a href="https://icons8.com">Icons8</a></p>
      </footer>
    </div>
  );
}

export default AboutUs;