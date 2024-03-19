
import FormWarp from "../components/FormWrap";
import Container from "../components/container";
import RegisterForm from "./RegisterForm";



const Register = () => {
    return ( 
        <div>
            <Container>
                <FormWarp>
                    <RegisterForm/>
                </FormWarp>
            </Container>
        </div>
     );
}
 
export default Register;