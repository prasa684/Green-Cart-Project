import { createContext } from "react";
import { useNavigate} from "react-router-dom";

export const AppContext = createContext();

export const AppContextProvider = ({children})=>{
   
    const navigate = useNavigate();
   const [user, setuser] =useState(null)
   const [isSeller, setIsSeller] = useState(false)
   const [showUserLogin, setshowUserLogin] = useState(false)

   const value = {navigate, user, setUser, setIsSeller, isSeller
    showUserLogin, setshowUserLogin
   }


    return <AppContext.Provider value={valiue}>
       {children} 
    </AppContext.Provider>
}

export const useAPPContext = ()=>{
    return useContext(AppContext)
}