'use client'

import ButtonMy from './Button'
import {Moon, Sun} from 'lucide-react'
import useDarkMode from '@/hooks/use-dark-mode'

export default function DarkModeToggle({defaultMode = 'dark'}) {
  const {theme, toggleTheme} = useDarkMode(defaultMode as any)
  return (
    <ButtonMy variant={'ghost'} size={'xs'} onClick={toggleTheme}>
      {theme === 'dark' ? <Moon /> : <Sun />}
    </ButtonMy>
  )
}