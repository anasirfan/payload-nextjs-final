import React from 'react'
import { Media as MediaType } from '../../../payload/payload-types'
import RichText from '../RichText'
import { Media } from '../Media'
import './Corporate.css'

interface CorporateComponentProps {
  corporate: {
    heading?: string | null
    description?: string | null
    logos?: { media?: string | MediaType | null }[]
  }[]
}

const CorporateComponent: React.FC<CorporateComponentProps> = ({ corporate }) => {
  return (
    <>
      <div className="main_container_corporate">
        <div className="main_container_corporate_content">
          <div className="main_container_corporate_content-heading">
            <h1 className="main_container_corporate_content-heading-h1">
              {corporate && corporate[0]?.heading}
            </h1>
          </div>
          <hr />

          <div className="main_container_corporate_content-para">
            <p className="main_container_corporate_content-para-p">
              <RichText content={corporate && corporate[0]?.description} />
            </p>
          </div>

          <div className="main_container_corporate_company">
            {corporate &&
              corporate[0]?.logos?.map(image => {
                return (
                  <div className="main_container_corporate_company-img">
                    <Media resource={image.media} />
                  </div>
                )
              })}
            {/* <div class="main_container_corporate_company-img">
              <img src={g1} alt="group1" />
            </div>
            <div class="main_container_corporate_company-img">
              <img src={g2} alt="group1" />
            </div>
            <div class="main_container_corporate_company-img">
              <img src={g3} alt="group1" />
            </div>
            <div class="main_container_corporate_company-img">
              <img src={g4} alt="group1" />
            </div>
            <div class="main_container_corporate_company-img">
              <img src={g5} alt="group1" />
            </div> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default CorporateComponent
