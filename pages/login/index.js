import React from 'react';
import { signIn } from 'next-auth/react';
import Button from '../../components/Button';
const Login = () => {
  return (
    <div className="flex items-center justify-center p-10 ">
      <div className=" w-[300px] h-[300px] p-5 flex items-center justify-center rounded-md flex-col">
        <span className="mb-4 uppercase">to continue please login !</span>
        <Button
          onClick={() => signIn('google')}
          text={'Login'}
        />
      </div>
    </div>
  );
};

export default Login;
