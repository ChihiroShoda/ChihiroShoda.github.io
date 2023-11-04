import { MantineProvider } from '@mantine/core'
import { HeaderMenu } from './HeaderMenu'

export default function Header() {
  return (
    <MantineProvider>
      <HeaderMenu></HeaderMenu>
    </MantineProvider>
  )
}
