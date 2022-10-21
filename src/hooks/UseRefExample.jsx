//useRef Example 
import { useEffect,useRef ,useState} from "react";
const UseRefExample=()=>{
    const [name,setName]=useState("");
    const inputRef=useRef(null);
    const prevState=useRef("");
    useEffect( ()=>{
        console.log(inputRef.current);
        
    },[]    );
    useEffect( ()=>{
        prevState.current=name;
        
    },[name]    );
    const focusInput=()=>{
        inputRef.current.focus();
        inputRef.current.placeholder="Hello";
        
    }
    return(
     <>
     <div className="w-50 d-grid gap-2 mx-auto">
        <h5 className="alert alert-success text-center">هوک useref</h5>
        <p>{`نام شی برابر است با${name}`}</p>
        <p>{`نام قبلی برابر است با${prevState.current}`}</p>
        <input type="text" 
        ref={inputRef}
        className="form-control"
        value={name}
        onChange={(e)=>setName(e.target.value)}
        placeholder="اسم را وارد کنید..."/>
        <button type="button" className="btn btn-primary btn-block mt-2" onClick={focusInput}>تمرکز کنید</button>
     </div>
     </>
    );
};
export default UseRefExample;