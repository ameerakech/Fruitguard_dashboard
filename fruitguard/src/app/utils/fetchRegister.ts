
const baseUrl = '/api/register';

export async function fetchRegister(formData:{
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}){
  try{
    const response = await fetch(baseUrl,{
      method: 'POST',
      headers:{
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    if(!response.ok){
      const errorData = await response.json();
      throw new Error(errorData.message || 'Something went wrong');
    }
    return response;
  }catch (error){
    throw new Error('Failed to register user: ' + (error as Error).message);
  }}

