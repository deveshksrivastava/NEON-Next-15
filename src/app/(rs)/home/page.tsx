
import client from "../../../lib/mongodb";
import { GetServerSideProps } from 'next';

export const metadata = {
    title: "Home",
}

async function getUsers() {
    const res = await fetch('http://localhost:3000/api/users')
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
            <ul>
                {usersResults.map((user:any) => (
                    <li key={user._id}>
                        <h2>{user.name}</h2>
                        <h3>{user.email}</h3>
                        <p>{user.password}</p>
                        <br/>
                    </li>
                ))}
            </ul>
        </div>
    );
};

