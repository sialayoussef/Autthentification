import { useSelector } from "react-redux"
import Alert from 'react-bootstrap/Alert';
const ErrorHandling=()=>{
    const err = useSelector(state=> state.ErrorReducer)
    return(
        <div>
            {
                err.map((el,i,t)=>
                <Alert key='danger' variant='danger'>
                {el.msg}
              </Alert>)
            }
        </div>
    )
}

export default ErrorHandling