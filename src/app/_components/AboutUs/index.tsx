'use client'
import React from 'react'
import { Media } from '../Media'
import { Media as MediaType } from '../../../payload/payload-types'
import RichText from '../RichText'
import classes from './index.module.scss'
interface AboutUsProps {
  content: {
    aboutus_heading?: string | null
    aboutus_desc?: string | null
    media?: MediaType | string | null // Adjust the type to accept a Media object
  }[]
}
const AboutUs: React.FC<AboutUsProps> = ({ content }) => {
  return (
    <>
      <div className={classes.main_container}>
        <div className={classes.main_container_content}>
          <div className={classes.main_container_start}>
            <Media
              resource={content ? content[0]?.media : ''}
              className={classes.main_container_start_img}
            />

            <h1 className={classes.main_container_start_heading}>
              {content ? content[0]?.aboutus_heading : ''}
            </h1>
            <p className={classes.main_container_start_para}>
              <RichText content={content[0]?.aboutus_desc} />
            </p>
            <button className={classes.main_container_start_btn}>About Us</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutUs
