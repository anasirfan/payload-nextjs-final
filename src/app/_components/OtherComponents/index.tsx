import React from 'react'
import { Media as MediaType } from '../../../payload/payload-types'
import RichText from '../RichText'
import { Media } from '../Media'
import classes from './index.module.scss'
interface OtherComponentsProps {
  corporate: {
    heading?: string | null
    description?: string | null
    logos?: { media?: string | MediaType | null }[]
  }[]
}

const OtherComponents: React.FC<OtherComponentsProps> = ({ corporate }) => {
  return (
    <div className={classes.main_container_corporate}>
      <div className={classes.main_container_corporate_content}>
        <div className={classes.main_container_corporate_content_heading}>
          <h1 className={classes.main_container_corporate_content_heading_h1}>
            {corporate && corporate[0]?.heading}
          </h1>
        </div>
        <hr className={classes.hr} />
        <div className={classes.main_container_corporate_content_para}>
            <RichText content={corporate && corporate[0]?.description} 
            className={classes.main_container_corporate_content_para_p}
            />
          
        </div>

        {/* <div className={classes.main_container_corporate_company}> */}
          <div className={classes.main_container_corporate_company_group}>
            {corporate &&
              corporate[0]?.logos?.map(image => {
                return (
                  <Media
                    resource={image.media}
                    className={classes.main_container_corporate_company_img}
                  />
                )
              })}
          </div>
        {/* </div> */}
      </div>
    </div>
  )
}

export default OtherComponents
