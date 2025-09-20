'use client';

import {useState, useEffect} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {FaEye, FaEyeSlash} from 'react-icons/fa';
import {useRouter} from 'next/navigation';
import useFetchRegister from '../hooks/useFetchRegister';

export default function Register(){
  const {loading, error, success, submitSignup} = useFetchRegister();
  const router = useRouter();

  const [formData, setFormData] = useState({firstName: '', lastName: '', email: '', password: '', confirmPassword: '',});

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  useEffect(()=>{
    if (success){
      const timer = setTimeout(() => router.push('/Login'), 0);
      return () => clearTimeout(timer);}
  }, [success, router]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
    setFormData(prev =>({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent)=>{
    e.preventDefault();
    setShowPassword(false);
    setShowConfirmPassword(false);
    await submitSignup(formData);
  };

  return(
    <div className="flex min-h-screen">
      <div className="w-1/2 bg-[url(/images/ourimage.jpg)] bg-cover bg-center relative flex items-center justify-center">
        <div className="absolute inset-0 bg-yellow-950/50"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-8xl text-white mb-4 font-bold">Sign Up</h1>
          <h2 className="text-6xl text-orange-400 font-bold text-left">FruitGuard</h2>
        </div>
      </div>
      <div className="w-1/2 flex items-center justify-center">
        <div className="w-full max-w-md p-6">
          <Image src="/images/Group 239208.png" alt="FruitGuard Logo" width={80} height={64} className="mx-auto mb-6" />
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && <p className="text-red-500 text-sm">{error}</p>}
            {success && <p className="text-yellow-950 text-sm">Signup successful! Redirecting...</p>}
            <div>
              <label className="block text-sm font-bold mb-1">First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Enter first name"
                className="w-full p-2 border rounded disabled:opacity-50"
                disabled={loading}/>
            </div>
            <div>
              <label className="block text-sm font-bold mb-1">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Enter last name"
                className="w-full p-2 border rounded disabled:opacity-50"
                disabled={loading}/>
            </div>
            <div>
              <label className="block text-sm font-bold mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter email"
                className="w-full p-2 border rounded disabled:opacity-50"
                disabled={loading}/>
            </div>
            <div>
              <label className="block text-sm font-bold mb-1">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter password"
                  className="w-full p-2 border rounded pr-10 disabled:opacity-50"
                  disabled={loading}/>
                <span className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <FaEyeSlash/>:<FaEye/>}
                </span>
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold mb-1">Confirm Password</label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Re-enter password"
                  className="w-full p-2 border rounded pr-10 disabled:opacity-50"
                  disabled={loading}/>
                <span className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                  {showConfirmPassword ? <FaEyeSlash/>:<FaEye/>}
                </span>
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-yellow-950 text-white p-2 rounded font-bold hover:bg-yellow-800 disabled:opacity-50 cursor-pointer text-md"
              disabled={loading}>{loading ? 'Signing Up...' : 'Sign Up'}
            </button>
          </form>
          <p className="mt-4 text-sm">Already have an account?{' '}
            <Link href="/Login" className="text-yellow-950 font-bold hover:underline">Log in</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
