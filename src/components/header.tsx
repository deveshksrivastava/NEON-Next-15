
'use client'
import React, { useState } from 'react';
import { HomeIcon, File, UsersRound, LogOut  } from 'lucide-react';
import Link from 'next/link';
import { ModeToggle } from '@/components/ModeToggle';
import { LogoutLink } from '@kinde-oss/kinde-auth-nextjs/components';
import { Button } from '@/components/ui/button';
import { NavButton } from '@/components/NavButton';
import { SubMenu } from './HeaderSubMenu';

export function Header() {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isExpandedLanguage, setIsExpandedLanguage] = useState(false);
    var mainMenu =
    [
        {
            id: 1,
            title: "Home",
            url: "/home",
            dropdown: null
        },
        {
            id: 2,
            title: "React",
            url: "/react",
            dropdown: [
                { id: 1, title: "Todo App", url: "/todo-app" },
                { id: 1, title: "Form", url: "/form" },
                { id: 2, title: "Excel Sheet", url: "/excel" },
                { id: 3, title: "Google Search", url: "/googleseach" },
            ]
        },
        {
            id: 3,
            title: "Language",
            url: "/language",
            dropdown: [
                { id: 1, title: "javascript", url: "/javascript" },
                { id: 2, title: "typescript", url: "/typescript" },
                { id: 3, title: "C#", url: "/csharp" },
                { id: 3, title: "C# Oops", url: "/Oops" },
            ]
        },
        {
            id: 4,
            title: "Design",
            url: "/design",
            dropdown: [
                { id: 1, title: "FE Design", url: "/fedesign" },
                { id: 2, title: "Backend Desing", url: "/bkdesign" },
                { id: 3, title: "System Design", url: "/systemdesign" },
            ]
        },
        {
            id: 5,
            title: ".Net Core",
            url: "/dotnet",
            dropdown: [
                { id: 1, title: ".Net Core", url: "/dotnet" },
                { id: 2, title: "Node.js", url: "/node" },
            ]
        },
        {
            id: 6,
            title: "Contact",
            url: "/contact",
            dropdown: null
        },
       
    ]
      
    return (
        <header className="animate-slide bg-background h-12 border-b sticky top-0 z-20">

            <div className="flex h-8 items-center justify-between w-full">

                <div className="flex items-center gap-2">
                    <NavButton href="/" label="Home" icon={HomeIcon} />

                    <Link href="/" className="flex justify-center items-center gap-2 ml-0" title="Home">
                        <h1 className="hidden sm:block text-xl font-bold m-0 mt-1">
                            Interview Success Shop
                        </h1>
                    </Link>
                </div>

                <div className='flex items-center gap-8'>
                    {
                            mainMenu.map((items) => (
                                <SubMenu items={items} />
                            )
                            )
                    }
                </div>

                <div className="flex items-center">
                    <NavButton href="/tickets" label="Tickets" icon={File} />
                    <NavButton href="/customers" label="Customers" icon={UsersRound} />
                    <ModeToggle />
                    <Button
                        variant="ghost"
                        size="icon"
                        aria-label="LogOut"
                        title="LogOut"
                        className="rounded-full"
                        asChild
                    >
                        <LogoutLink>
                            <LogOut />
                        </LogoutLink>
                    </Button>
                </div>
            </div>
        </header>
    )
}
