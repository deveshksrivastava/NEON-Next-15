
import client from "../../../lib/mongodb";
import { GetServerSideProps } from 'next';
import UserTable from '@/components/UserTable';

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
    // console.log('usersResults',usersResults)
   
    return (
        <div>
            <h1>Top 20 Movies of All Time</h1>
            <p>
                <small>(According to Metacritic)</small>
            </p>
            <ul>
                {usersResults.map((user:any) => (
                    
                    <li key={user._id}>
                        <span>{user.name}</span> ||
                        <span>{user.email}</span> ||
                        <span>{user.password}</span>
                        <br/>
                    </li>
                ))}
            </ul>

            <hr/>
            <UserTable />
        </div>
    );
};

