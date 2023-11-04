import './Home.css'
import Header from './Header/main.tsx'
import Footer from './Footer/main.tsx'
import Main from './Main/main.tsx'
import { MantineProvider } from '@mantine/core'

export default function Home() {
  return (
    <MantineProvider>
      <Header />
      <Main />
      <Footer />
    </MantineProvider>
  )
}
