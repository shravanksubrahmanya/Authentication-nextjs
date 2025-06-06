"use client";

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export default function ProfilePage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState("");
  const logout = async () => {
    try {
      setLoading(true);
      await axios.get("/api/users/logout");
      toast.success("Logout Successful");
      router.push("/login");
    } catch (error: any) {
      toast.error("Error has occured during Logout");
      console.log("Error occured during logout " + error.message);
    } finally {
      setLoading(false);
    }
  };

  const getUserDetails = async () => {
    const response = await axios.get("/api/users/me");
    console.log(response.data);
    setData(response.data.data._id);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>Profile</h1>
      <hr />
      <p>Profile Page</p>
      <h2>
        {data == "" ? (
          "No User details have been fetched"
        ) : (
          <Link href={`/profile/${data}`}>{data}</Link>
        )}
      </h2>
      <hr />
      <button
        onClick={logout}
        className="bg-red-500 mt-4 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
      >
        LogOut
      </button>
      <button
        onClick={getUserDetails}
        className="bg-blue-500 mt-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        View Profile
      </button>
      <p>{loading ? "Logging out ..... " : ""}</p>
    </div>
  );
}
