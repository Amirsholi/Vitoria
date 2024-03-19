import FormWarp from "../components/FormWrap";
import Container from "../components/container";
import LoginForm from "./loginForm";



const Login = () => {
    return ( 
        <Container>
            <FormWarp>
                <LoginForm/>
            </FormWarp>
        </Container>
     );
}
 
export default Login;