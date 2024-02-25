import Link from "next/link";
import Container from "../container";
import FooterList from "./FooterList";
import {MdFacebook} from "react-icons/md";

const Footer = () => {
    return ( 
    <footer className="bg-slate-700 text-slate-200 text-sm mt-16">
        <Container>
            <div className="flex flex-col md:flex-row justify-between pt-16 pb-8">
                <FooterList>
                    <h3 className="text-base font-bold mb-2">Shop Category</h3>
                    <Link href="">link 1</Link>
                    <Link href="">link 2</Link>
                    <Link href="">link 3</Link>
                    <Link href="">link 4</Link>
                </FooterList>
                <FooterList>
                    <h3 className="text-base font-bold mb-2">Custom Services</h3>
                    <Link href="">link 1</Link>
                    <Link href="">link 2</Link>
                    <Link href="">link 3</Link>
                    <Link href="">link 4</Link>
                </FooterList>
                <div className="w-full md:w-1/3 mb-6 md:mb-0">
                    <h3 className="text-base font-bold mb-2">About Us</h3>
                    <p className="mb-2">klsdhfkjlasdfhlsanfdlkasndflk
                    asndaslkdnaslkdnas,m.dnsd,mfnaslks
                    dfnsd,mfnsd,mfnblknflksdfn,msdfns
                    ,mkdnfsalknberkjbfnslkfnsdfnsd,mfnsdkfnlsk
                    afdnlskdfnksdfn</p>
                    <p>&copy;{new Date().getFullYear()}</p>
                </div>
                <FooterList>
                <h3 className="text-base font-bold mb-2">Follow Us</h3>
                <div className="flex gap-2">
                <Link href="">
                    <MdFacebook size={24}/>
                </Link>

                </div>
                </FooterList>
            </div>
        </Container>
    </footer>
    );
}
 
export default Footer;