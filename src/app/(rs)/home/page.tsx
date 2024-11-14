
import client from "../../../lib/mongodb";
import { GetServerSideProps } from 'next';
import UserTable from '@/components/UserTable';
import Image from "next/image";
import Card from "@/components/Card";

export const metadata = {
    title: "Home",
}

async function getUsers() {
    // const res = await fetch('http://localhost:3000/api/users')
    // const res = await fetch('https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies')
    const res = await fetch('https://api.sampleapis.com/movies/classic')
    // const res = await fetch('https://jsonplaceholder.typicode.com/photos')
    const users = await res.json()
    return users
  }

export default async function Home(){
    const usersResults = await getUsers()
    console.log('usersResults',usersResults)
   
    return (
        <div>
            <h1>Top 20 Movies of All Time</h1>
            <p>
                <small>(According to Metacritic)</small>
            </p>
            <ul className="grid grid-cols-3 gap-4">
                {usersResults.map((user:any) => (
                    <Card movie={user} />
                ))}
            </ul>

            <hr/>
            {/* <UserTable /> */}
        </div>
    );
};

