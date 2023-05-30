import { useContext } from "react"
import { AuthContext } from "../Proider/AuthProvider";


const useAuth = () => {
    const auth = useContext(AuthContext);
    return auth;
}

export default useAuth;