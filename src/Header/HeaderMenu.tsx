import { Menu, Burger, Container } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { IconChevronDown } from '@tabler/icons-react'
import classes from './HeaderMenu.module.css'

const links = [
  {
    link: '#1',
    label: 'AboutMe',
    links: [
      { link: '/profile', label: 'Profile' },
      { link: '/history', label: 'History' },
    ],
  },
  {
    link: '#2',
    label: 'Experiences',
    links: [
      { link: '/skills', label: 'Skills' },
      { link: '/internships', label: 'Internships' },
    ],
  },
  { link: '/research', label: 'Research' },
  { link: '/hobby', label: 'Hobby' },
]

function HeaderLogo() {
  return <h1 className={classes.headerLogo}>Chihiro Shoda</h1>
}

function Center({ children }: { children: React.ReactNode }) {
  return <div className={classes.center}>{children}</div>
}

export function HeaderMenu() {
  const [opened, { toggle }] = useDisclosure(false)

  const items = links.map((link) => {
    const menuItems = link.links?.map((item) => (
      <Menu.Item key={item.link}>{item.label}</Menu.Item>
    ))

    if (menuItems) {
      return (
        <Menu
          key={link.label}
          trigger="hover"
          transitionProps={{ exitDuration: 0 }}
          withinPortal
        >
          <Menu.Target>
            <a
              href={link.link}
              className={classes.link}
              onClick={(event) => event.preventDefault()}
            >
              <Center>
                <span className={classes.linkLabel}>{link.label}</span>
                <IconChevronDown size="0.7rem" stroke={1.5} />
              </Center>
            </a>
          </Menu.Target>
          <Menu.Dropdown>{menuItems}</Menu.Dropdown>
        </Menu>
      )
    }

    return (
      <a
        key={link.label}
        href={link.link}
        className={classes.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </a>
    )
  })

  return (
    <header className={classes.header}>
      <Container size="md">
        <div className={classes.inner}>
          <HeaderLogo />
          <div className={classes.itemsWrapper}>{items}</div>
          <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
        </div>
      </Container>
    </header>
  )
}
