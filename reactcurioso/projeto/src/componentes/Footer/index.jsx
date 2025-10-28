//src\componentes\Footer\index.js
import './style.css';

function Footer() {
  return (
    <footer className="footer-container">
      <p>&copy; {new Date().getFullYear()} Minha Empresa. Todos os direitos reservados.</p>
      <p>Telefone para contato: (71)9 837283121</p>
    </footer>
  );
}

export default Footer;