

import { HomeIcon, File, UsersRound, LogOut  } from 'lucide-react';
import Link from 'next/link';
import { ModeToggle } from '@/components/ModeToggle';
import { LogoutLink } from '@kinde-oss/kinde-auth-nextjs/components';
import { Button } from '@/components/ui/button';
import { NavButton } from '@/components/NavButton';
import DarkModeToggle from '@/components/Dark-mode-toggle';
import useServerDarkMode from '@/hooks/use-server-dark-mode'

export function HeaderLearning() {
    const theme = useServerDarkMode()
    return (
        <header className="animate-slide bg-background h-12 p-2 border-b sticky top-0 z-20">

            <div className="flex h-8 items-center justify-between w-full">

                <div className="flex items-center gap-2">
                    <NavButton href="/home" label="Home" icon={HomeIcon} />

                    <Link href="/home" className="flex justify-center items-center gap-2 ml-0" title="Home">
                        <h1 className="hidden sm:block text-xl font-bold m-0 mt-1">
                            Learning Computer
                        </h1>
                    </Link>
                </div>

                <div className="flex items-center">

                    <NavButton href="/tickets" label="Tickets" icon={File} />

                    <NavButton href="/customers" label="Customers" icon={UsersRound} />

                    <ModeToggle />
                    <div className="flex items-center space-x-4">
                        <DarkModeToggle defaultMode={theme} />
                    </div>
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