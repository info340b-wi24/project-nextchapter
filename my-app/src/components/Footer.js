import React from 'react';

function FooterContent() {
  return (
    <>
      <p>2024 Next Chapter | Erica Luo, Alexis Nguyen, Brianna Pak, Kayla Tounalom</p>
      <p>Story Book icon by <a href="https://icons8.com">Icons8</a></p>
    </>
  );
}

function Footer() {
  return (
    <footer>
      <FooterContent />
    </footer>
  );
}

export default Footer;