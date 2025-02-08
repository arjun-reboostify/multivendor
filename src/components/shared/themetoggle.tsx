"use client";
import React from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem } from '../ui/dropdown-menu'
import { DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu'
import { Button } from '../ui/button'
import { useTheme } from 'next-themes';

export default function themetoggle() {
    const { theme, setTheme } = useTheme();
  return (
    <DropdownMenu>
        <DropdownMenuTrigger asChild>
<Button></Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align='end'>
            <DropdownMenuItem onClick={()=>setTheme("light")}>light</DropdownMenuItem>
            <DropdownMenuItem onClick={()=>setTheme("dark")}>dark</DropdownMenuItem>
            <DropdownMenuItem onClick={()=>setTheme("system")}>ystem</DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
  )
}
