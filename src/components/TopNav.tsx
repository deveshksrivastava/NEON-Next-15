"use client";

import Link from "next/link";
import Image from "next/image";
import { handleSignOut } from "@/app/actions/authActions";

export default function Navbar({ session }: { session: any }) {
  
  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <p className="text-white text-xl font-bold">Logo</p>
        </Link>
        <div className="flex space-x-4 items-center">
          <Link href="/home">
            <p className="text-white hover:text-blue-200">Home</p>
          </Link>
          <Link href="/dashboard">
            <p className="text-white hover:text-blue-200">Dashboard</p>
          </Link>

          {session ? (
            <>
              <div>
                <Image
                  src={session.user?.image || "/images/home-img.jpg"}
                  width={40}
                  height={40}
                  className="rounded-full"
                  alt="User Avatar"
                />
              </div>
              <form action={handleSignOut}>
                <button type="submit" className="text-white hover:text-blue-200">
                  Sign Out
                </button>
              </form>
            </>
          ) : (
            <>
              <Link href="/auth/login">
                <p className="text-white hover:text-blue-200">Sign In</p>
              </Link>
              <Link href="/auth/register">
                <p className="text-white hover:text-blue-200">Sign Up</p>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}