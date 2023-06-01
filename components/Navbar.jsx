import { useRouter } from 'next/router';
import { useSession, signOut } from 'next-auth/react';
import {
  HomeIcon,
  ArrowLeftOnRectangleIcon,
} from '@heroicons/react/24/outline';
const Sidebar = () => {
  const router = useRouter();
  const { data: session } = useSession();
  return (
    <div className="flex flex-col w-80 bg-gray-800 h-screen text-white">
      <div className="p-4">
        <h1 className="text-xl font-bold">Welcome {session?.user.email}</h1>
      </div>
      <nav className="flex-grow">
        <ul className="flex flex-col py-4 px-2">
          <li
            className="py-2 px-4 cursor-pointer flex hover:bg-gray-700"
            onClick={() => router.push('/dashboard')}
          >
            <HomeIcon className="w-[20px]" />
            Home
          </li>
          <li
            className="py-2 px-4 cursor-pointer flex hover:bg-gray-700"
            onClick={() => {
              signOut();
              setTimeout(() => {
                router.push('/');
              }, 1000);
            }}
          >
            <ArrowLeftOnRectangleIcon className="w-[20px]" />
            Sign Out
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
