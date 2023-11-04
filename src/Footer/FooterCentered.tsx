import { Anchor, Group, ActionIcon, rem } from '@mantine/core'
import {
  IconBrandTwitter,
  IconBrandYoutube,
  IconBrandInstagram,
} from '@tabler/icons-react'
import { MantineLogo } from '@mantine/ds'
import classes from './FooterCentered.module.css'
import { Children } from 'react'

const links = [
  { link: '#', label: 'Contact' },
  { link: '#', label: 'Privacy' },
  { link: '#', label: 'Blog' },
  { link: '#', label: 'Store' },
  { link: '#', label: 'Careers' },
]

function FooterLogo() {
  return (
    <div>
      <h1 className={classes.footerLogo}>Chihiro Shoda</h1>
    </div>
  )
}

function IconsWrapper({ children }) {
  return <div className={classes.iconsWrapper}>{children}</div>
}

function Icon({ children }) {
  return <div className={classes.icon}>{children}</div>
}

export function FooterCentered() {
  const items = links.map((link) => (
    <Anchor
      c="dimmed"
      key={link.label}
      href={link.link}
      lh={1}
      onClick={(event) => event.preventDefault()}
      size="sm"
    >
      {link.label}
    </Anchor>
  ))

  return (
    <div className={classes.footer}>
      <div className={classes.inner}>
        <FooterLogo />
        <IconsWrapper>
          <Icon>
            <IconBrandTwitter
              style={{ width: rem(18), height: rem(18) }}
              stroke={1.5}
            />
          </Icon>
          <Icon>
            <IconBrandYoutube
              style={{ width: rem(18), height: rem(18) }}
              stroke={1.5}
            />
          </Icon>
          <Icon>
            <IconBrandInstagram
              style={{ width: rem(18), height: rem(18) }}
              stroke={1.5}
            />
          </Icon>
        </IconsWrapper>
      </div>
    </div>
  )
}
