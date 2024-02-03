'use client'
import React from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import { Media } from '../../../payload/payload-types'
import ProductDetails from './ProductDetails'
import ApplicationDetails from './ApplicationDetails'
import classes from './index.module.scss'
import './productdetails.css'
// Import makeStyles from MUI
// import { makeStyles } from '@mui/styles';

// Define a makeStyles hook

interface Product {
  description: string | null
  boxes: {
    title: string | null
    short_deescription: string | null
    media: string | Media | null
    link: string | null
  }[]
}

interface Application {
  description: string | null
  boxes: {
    title: string | null
    shortDescription: string | null
    media: string | Media | null
    link: string | null
  }[]
}

interface ProductApplicationsProps {
  products?: Product[]
  applications?: Application[]
}

const ProductApplications: React.FC<ProductApplicationsProps> = ({ products, applications }) => {
  const [selectedTab, setSelectedTab] = React.useState<number>(0)

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue)
  }

  return (
    <div className={'main_products'}>
      <div className="container main_container_product_detail_content">
        <Tabs
          value={selectedTab}
          onChange={handleTabChange}
          aria-label="Product and Application tabs"
          // @ts-ignore
          indicatorColor="none"
          className="main_container_product_content-heading"
        >
          <Tab
            className={`${
              selectedTab === 0 ? 'activeTab' : 'nonActiveTab'
            } main_container_product_content-heading-h1`}
            label="Products"
          />
          <Tab
            className={`${
              selectedTab === 1 ? 'activeTab' : 'nonActiveTab'
            } main_container_product_content-heading-h1`}
            label="Applications"
          />
        </Tabs>
        {selectedTab === 0 && <ProductDetails products={products} />}
        {selectedTab === 1 && <ApplicationDetails applications={applications} />}
      </div>
    </div>
  )
}

export default ProductApplications
