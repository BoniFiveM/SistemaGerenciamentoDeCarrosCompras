import React from 'react';


const Footer = () => {
  return (
    <footer className="footer">
      <p>
        Desenvolvido com <span className="heart">❤️</span> por{' '}
        <span className="name">Marcos Boni</span>
      </p>
      <p className="credits">© {new Date().getFullYear()} Todos os direitos reservados</p>
    </footer>
  );
};

export default Footer;
