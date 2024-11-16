'use client'
import Link from 'next/link';
import React, { useState } from 'react';
type Props = {
    items: any
}
export  function SubMenu (props:Props) {
    const [isExpanded, setIsExpanded] = useState(false);
    const { items } = props;

    if(items.title !== 'Home' && items.title !== 'Contact') return(
        <div className='flex items-center gap-2'  >
            <div key={items.id} onMouseEnter={()=>setIsExpanded(true)} onMouseLeave={()=>setIsExpanded(false)} >
                <Link href={items.url} className="flex justify-center items-center " title={items.title}>
                    <h1 className="hidden sm:block text-lg font-bold m-0 mt-1">
                        {items.title}
                    </h1>
                </Link>
                {
                    isExpanded && 
                        <div className='absolute  flex flex-col bg-gray-200 p-4 '>
                            {
                                items.dropdown.map((item:any) => (
                                    <Link href={item.url} className='p-2'>{item.title}</Link>
                                ))
                            }
                        </div>
                }
            </div>
            
        </div>
    )

    return (
        <div className='flex items-center gap-2' key={items.id} >
            <Link href={items.url} className="flex justify-center items-center gap-2 ml-0" title={items.title}>
                <h1 className="hidden sm:block text-lg font-bold m-0 mt-1"> 
                    {items.title}
                </h1>
            </Link>
        </div>
)
}