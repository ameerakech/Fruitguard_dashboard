
import {useState} from 'react';
import {fetchLogin} from '../utils/fetchLogin';

interface LoginForm{email: string; password: string;}

export default function useFetchLogin(){
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const submitLogin=async(formData: LoginForm)=>{
    setLoading(true);
    setError(null);
    setSuccess(false);

    try{
      const response = await fetchLogin(formData);
      if(!response.ok){
        const data = await response.json();
        setError(data.message || 'Signup failed');
        setLoading(false);
        return;}
      setSuccess(true);
    }catch (err){
    setError((err as Error).message);
    }finally{
      setLoading(false);
    }
  };
  return {loading, error, success, submitLogin};
}

