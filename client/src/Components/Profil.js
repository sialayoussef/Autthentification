import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { current } from "../Redux/Actions/AuthActions"

const Profil=()=>{
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(current())
    },[])
    
    const user = useSelector(state=> state.AuthReducer.user)
    return(
        <div>
            <h1>{user.name}</h1>
            <h2>{user.email}</h2>
        </div>
    )
}

export default Profil