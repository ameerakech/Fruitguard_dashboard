

import {useState} from 'react';
import {fetchRegister} from '../utils/fetchRegister';

interface SignupForm{firstName: string; lastName: string; email: string; password: string; confirmPassword: string;}

export default function useFetchRegister(){
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const submitSignup=async(formData: SignupForm)=>{
    setLoading(true);
    setError(null);
    setSuccess(false);

    if(formData.password !== formData.confirmPassword){
      setError('Passwords do not match');
      setLoading(false);
      return;
    }
    try{
      const {confirmPassword,...registerData} = formData;
      const response = await fetchRegister(registerData);

      if(!response.ok){
        const data = await response.json();
        setError(data.message || 'Signup failed');
        setLoading(false);
        return;
      }
      setSuccess(true);
    }catch (err){
    setError((err as Error).message);
    }finally{
    setLoading(false);
    }
  };
  return{loading, error, success, submitSignup};
}
