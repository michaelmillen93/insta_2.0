import React from "react";
import { signOut, useSession } from "next-auth/react";

const MiniProfile = () => {
  const { data: session } = useSession();

  return (
    <div className="flex items-center justify-between mt-14 ml-10">
      <img
        src={session?.user?.image}
        alt=""
        className="w-16 h-16 rounded-full border p-[2px]"
      />

      <div className="flex-1 mx-4">
        <h2 className="font-bold">{session?.user?.username}</h2>
        <h3 className="text-sm font-semibold text-gray-400">
          Welcome to Instagram
        </h3>
      </div>

      <button onClick={signOut} className="">
        Sign out
      </button>
    </div>
  );
};

export default MiniProfile;
