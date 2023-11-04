import AboutMe from './components/AboutMe'
import Experiences from './components/Experiences'
import Research from './components/Research'
import Hobby from './components/Hobby'
import TopImage from './components/TopImage'

export default function Main() {
  return (
    <div>
      <TopImage />
      <AboutMe />
      <Experiences />
      <Research />
      <Hobby />
    </div>
  )
}
