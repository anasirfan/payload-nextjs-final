import React, { useState } from 'react'
import { Media as MediaType } from '../../../../payload/payload-types'
import { Media } from '../../Media'
import classes from './index.module.scss'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

interface Application {
  description: string | null
  boxes: {
    title: string | null
    shortDescription: string | null
    media: string | MediaType | null
    link: string | null
  }[]
}

interface ApplicationDetailsProps {
  applications: Application[]
}
const ApplicationDetails: React.FC<ApplicationDetailsProps> = ({ applications }) => {
  const applicationsFetched = applications?.[0]?.boxes
  const description = applications?.[0]?.description

  // State to track the currently selected application
  const [selectedApplication, setSelectedApplication] = useState(applicationsFetched[0])

  // State to track the currently selected application and its index
  const [selectedApplicationIndex, setSelectedApplicationIndex] = useState(0)

  const handleApplicationClick = (application: any, index: number) => {
    setSelectedApplicationIndex(index)
    setSelectedApplication(application)
  }

  return (
    <>
      <div className={classes.description}>{description}</div>
      <div className={classes.product_tab_main}>
        {/* Left column for tabs */}
        <div className={classes.product_left}>
          {/* <h2>Applications</h2> */}

          <ul className={classes.product_tabs}>
            {/* Render tabs for each application */}
            {applicationsFetched?.map((application, index) => (
              <li
                key={index}
                onClick={() => handleApplicationClick(application, index)}
                className={`
                  ${
                    index === selectedApplicationIndex
                      ? classes.tab_active_color
                      : classes.tab_inactive_color
                  }`}
              >
                {application?.title}
                <span>{index === selectedApplicationIndex && <ArrowForwardIcon />}</span>
              </li>
            ))}
          </ul>
        </div>
        {/* Right column for selected application details */}
        <div className={classes.product_right}>
          <Media resource={selectedApplication?.media} />
          <p>{selectedApplication?.shortDescription}</p>
          <a href={selectedApplication?.link}>Read More</a>
        </div>
      </div>
    </>
  )
}

export default ApplicationDetails
