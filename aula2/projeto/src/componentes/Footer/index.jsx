//src\componentes\Footer\index.jsx
import "./style.css";

function Footer(){
    return(
        <footer className="footer-container">
            <p>&copy; {new Date().getFullYear()} Capital Motoweek</p>
            <p>CNPJ: 321.321.32.123.21</p>
            <p>Todos os direitos reservados</p>

        </footer>
    );
}
export default Footer;