import Link from "next/link";
import Container from "../Container";
import FooterList from "./FooterList";
import { MdFacebook } from "react-icons/md";
import { AiFillLinkedin } from "react-icons/ai";


const Footer = () => {
  return (
    <footer className="bg-slate-700 text-slate-200 text-sm mt-16">
      <Container>
        <div className="flex flex-col md:flex-row justify-between pt-16 pb-8">
          
          <FooterList>
            <h3 className="text-base font-bold mb-2">Customer Service</h3>
            <Link href="#">Contact Us</Link>
            <Link href="#">Shipping Policy</Link>
            <Link href="#">Returns & Exchanges</Link>
            <Link href="#">FAQs</Link>
          </FooterList>
          <FooterList>
            <h3 className="text-base font-bold mb-2">Contato</h3>
            <p>Cel: +55 55 3419-1332</p>
            <p>Mail: silva-tec@uol.com.br</p>
            
          </FooterList>
          <FooterList>
            <h3 className="text-base font-bold mb-2">Follow Us</h3>
            <div className="flex gap-2">
              <Link href="https://www.facebook.com/tafi.sholi49">
                <MdFacebook size={24} />
              </Link>
              <Link href="https://www.linkedin.com/in/amir-sholi-81343a243/">
                <AiFillLinkedin size={24} />
              </Link>
            </div>
          </FooterList>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-base font-bold mb-2">Sobre nós</h3>
            <p className="mb-2">
               A empresa Farmacia Vitoria que tem como razão social Tafida
               Georgetta Amin Sholi foi fundada em 15/08/2001, a empresa está localizada na Rua Salustiano Marty, Nº 200 
               no bairro Centro em Barra do Quaraí.Farmacia 
               Vitoria está cadastrada na Receita Federal com atividade 
               fim de Comércio Varejista De Produtos Farmacêuticos, Sem Manipulação De Fórmulas.
            </p>
            <p>&copy; {new Date().getFullYear()} Farmacia Vitoria.</p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
