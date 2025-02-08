import React from 'react'
import { DropdownMenu } from '../ui/dropdown-menu'
import { DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu'
import { Button } from '../ui/button'

export default function themetoggle() {
  return (
    <DropdownMenu>
        <DropdownMenuTrigger asChild>
<Button></Button>
        </DropdownMenuTrigger>
    </DropdownMenu>
  )
}
