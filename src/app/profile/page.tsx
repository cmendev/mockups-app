'use client'

import Profile from "@/components/Profile";
import { User } from "@/types/user";
import { useEffect, useState } from "react";


const ProfilePage = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storedUserData = localStorage.getItem('authUser');
    if (storedUserData) {
      setUser(JSON.parse(storedUserData));
    }
  }, []);

  return (
    <>
      {user ? (
        <Profile {...user} />
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

export default ProfilePage;
