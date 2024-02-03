import React, { useState } from 'react'
import { Media as MediaType } from '../../../../payload/payload-types'
import { Media } from '../../Media'
import classes from './index.module.scss'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

interface Product {
  
  description: string | null;
  boxes:{
    title: string | null;
    short_deescription: string | null;
    media : string | MediaType | null;
    link : string | null;
  }[];

}

interface ProductDetailsProps {
products: Product[];
}
const ProductDetails: React.FC<ProductDetailsProps> = ({ products }) => {
  const applicationsFetched = products?.[0]?.boxes
  const description = products?.[0]?.description

  // State to track the currently selected application
  const [selectedProduct, setSelectedApplication] = useState(applicationsFetched[0])

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
      <Media resource={selectedProduct?.media}/>
        <p>{selectedProduct?.short_deescription}</p>
        <a href={selectedProduct?.link}>Read More</a>
      </div>
    </div>
  </>
  )
}

export default ProductDetails
