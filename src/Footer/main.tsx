import { FooterCentered } from './FooterCentered'
import { MantineProvider } from '@mantine/core'

export default function Header() {
  return (
    <MantineProvider>
      <FooterCentered></FooterCentered>
    </MantineProvider>
  )
}
