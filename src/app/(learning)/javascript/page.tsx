'use client'
import React, { useState } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Script from 'next/script';

export default function page() {
    const [data, setData] = useState('')
    const codeString1 = `
    const greet = (name) => {
        return \`Hello, \${name}!\`;
    };

    console.log(greet('World'));
    `;
    const codeString = `
    const person = {
        name: 'raj',
        age: 30
    }

    //1. Using for...in Loop
    ///- straightforward way to iterate over the enumerable properties of an object

    for (let key in person) {
        if (person.hasOwnProperty(key)) { //// Check if the property is the object's own
            console.log({ key }: { person[key]})
        }
    }

    // 2. Using Object.keys()
    // You can then use forEach or a for...of loop to iterate over these keys.
    Object.keys(person).forEach(key => {
        // console.log({ key }: { person[key] } )
    })

    // 3. Using Object.values()
    Object.values(person).forEach(value => {
        // console.log(value)
    })

    // 4. Using Object.entries()
    for (const [key, value] of Object.entries(person)) {
        // console.log({ key }: { value } )
    }
    `;

    return (
        <div>
            <h1 className='text-2xl text-center font-bold underline'>Learn JavaScript</h1>

            <h2 className='text-xl font-bold underline mt-10'>User of Object</h2>
            <ul>
                <li>1. Using for...in Loop</li>
                <li>2. Using Object.keys()</li>
                <li>3. Using Object.values()</li>
                <li>4. Using Object.entries()</li>
                <li></li>
                <li></li>
            </ul>
            <code className='bg-slate-100'>
                var a; <br />
                var b; <br />
                cont y = a+ b
            </code>

            <h2 className='text-xl font-bold underline mt-10'>Use Cases and Context</h2>
            <ul>
                <li>1. Use for when you need to manipulate the index or require complex iteration logic.</li>
                <li>2. Use for...of for simple iterations over arrays or other iterable objects.</li>
                <li>3. Use forEach for executing a function on each element without needing a return value.</li>
                <li>4. Use map when you want to transform data and create a new array based on the original.</li>
            </ul>



            <div className="App p-6 bg-white min-h-screen">
                <h1 className="text-2xl font-bold text-gray-800 mb-4">JavaScript Code Display</h1>
                {/* <CodeBlock data={codeString} /> */}
            </div>

            <Script
                src="/public/js/rainbow-custom.min.js"
                strategy="lazyOnload" // Loads script after page loads
                onLoad={() => console.log('Script loaded!')}
            />

            <pre>
                <code data-language="javascript">def openFile(path):
                    file = open(path, "r")
                    content = file.read()
                    file.close()
                    return content</code>
            </pre>
            ssdsdkd
            <textarea onChange={(e) => setData(e.target.value)} placeholder='Adding coding' />
            <SyntaxHighlighter language="javascript">
                {data}
            </SyntaxHighlighter>

        </div>
    )
}


const CodeBlock = (data: any) => {
    return (
        <SyntaxHighlighter language="javascript" style={dark}>
            {data}
        </SyntaxHighlighter>
    );
};
