import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

// Function
export default function FetchAxus() {
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((data) => data.json())
            .then((result) => {
                console.log('Fetch without Async Await: ', result);
            });
    }, []);

    const getData = async () => {
        const data = await fetch('https://jsonplaceholder.typicode.com/users');
        const mydata = await data.json();
        return mydata;
    };

    // async function getUserAsync2() {
    //   const res = await fetch("")
    //  }

    function getUserAsync() {
        // axios
        //   .get('https://60d1d65c5b017400178f47b1.mockapi.io/ToDoApp')
        //   .then((res) => {
        //     // console.log('axios:', res);
        //     if (res.status === 200) {
        //       console.log('axios:', res);
        //     }
        //   })
        //   .catch((error) => {
        //     // console.log(error)
        //   })
        //   .then(function () {
        //     // always executed
        //   });
    }

    useEffect(() => {
        // fetch : Fetch with Async Await
        const result = getData();
        result.then((res) => console.log('Fetch with Async Await: ', res));
    }, []);

    useEffect(() => {
        // fetch: Fetch with Async Await
        const result = getData();
        result.then((res) => console.log('Fetch with Async Await: ', res));
    }, []);

    useEffect(() => {
        // Async Await :
        getUserAsync();
    }, []);

    return (
        <>
            <h3>FetchAxus</h3>
        </>
    );
}

// // Arrow funcation
// const FetchAxus1=()=>  {
//   return (
//     <></>
//   )
// }

// export default FetchAxus1;
