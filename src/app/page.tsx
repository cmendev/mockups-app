'use client'

import Welcome from "@/components/Welcome";
import { useEffect, useState } from "react";

export default function Home() {

  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const storedUserData = localStorage.getItem('authUser');
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    }
  }, []);
  
  return (
    <main>

      {
        !userData && <Welcome />
      }
      
    </main>
  );
}
