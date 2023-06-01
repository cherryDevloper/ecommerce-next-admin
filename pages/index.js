import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/router';

import Login from './login';

export default function Home() {
  const { data: session } = useSession();
  const router = useRouter();

  if (session) {
    router.push('/dashboard');
  }
  console.log('session', session);
  return (
    <div className="bg-white text-slate-800 h-full">
      <Login />
    </div>
  );
}
