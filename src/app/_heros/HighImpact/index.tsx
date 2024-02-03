import React, { Fragment } from 'react'

import { Page } from '../../../payload/payload-types'
import { Gutter } from '../../_components/Gutter'
import { CMSLink } from '../../_components/Link'
import { Media } from '../../_components/Media'
import RichText from '../../_components/RichText'

import classes from './index.module.scss'
import { Hero } from '../../_components/Hero'
import HeroSlider from '../../_components/HeroSilder/HeroSlider';
import Navbar from "../../_components/Navbar/Navbar"
export const HighImpactHero: React.FC<Page['hero']> = ({ richText, media, links }) => {
  return (
    <div>
      {/* {links && (
      <Navbar header={header}/>
      
      )}
      {richText && media && (
      <HeroSlider richText={richText} media={media} />
      )} */}
      
        {/* {Array.isArray(links) && links.length > 0 && (
          <ul className={classes.links}>
            {links.map(({ link }, i) => {
              return (
                <li key={i}>
                  <CMSLink {...link} />
                </li>
              )
            })}
          </ul>
        )}
        <div className={classes.media}>
          {typeof media === 'object' && (
            <Fragment>
              <Media
                resource={media}
                // fill
                imgClassName={classes.hero_img}
                priority
              />
            </Fragment>
          )}
        </div> */}
      </div>
    
  )
}
