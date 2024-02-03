import React from 'react'
import { CMSLink } from '../Link'
import { Footer as FooterType } from '../../../payload/payload-types'
import { fetchFooter } from '../../_api/fetchGlobals'
import RichText from '../RichText'

import classes from './index.module.scss'


export async function Footer() {
  let footer: FooterType  | null = null

  try {
    footer = await fetchFooter()
  } catch (error) {
    console.error(error)
  }

  const navItems = footer?.navItems || []

  return (
    <div className={classes.footer}>
      <div className={classes.footer_content}>
        <div className={classes.footer_content_left}>
          <p className={classes.footer_content_left_para}>
            <RichText content={footer?.richText || ''} />
          </p>
        </div>
        <div className={classes.footer_content_right}>
          <ul className={classes.footer_content_right_list}>
            {navItems.map(({ link }, i) => {
              return <CMSLink className={classes.footer_content_right_list_li} key={i} {...link} />
            })}
          </ul>
        </div>
      </div>
    </div>
    
  )
}
