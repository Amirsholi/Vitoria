import Link from "next/link";
import Container from "../container";
import { Dancing_Script } from "next/font/google";
import CartCount from "./CartCount";

const dancingScript = Dancing_Script({ subsets:["latin"],weight:["400"]})

const NavBar = () => {
    return(
        <div className="stiky top-0 w-full bg-slate-200 z-20 shadow-sm">
            <div className="py-4 border-b-[1px]">
                <Container>
                    <div className="flex items-center justify-between gap-3 md-gap-0">
                        <Link href="/" className={`${dancingScript.className} font-bold text-4xl`}>Vitoria</Link>
                        
                        <div className="hidden md:block">Searsh</div>

                        <div className="flex items-center gap-8 md:gap-12">
                            <CartCount/>
                            <div>User</div>
                        </div>

                    </div>
                </Container>
            </div>
        </div>
    );
}
 
export default NavBar;