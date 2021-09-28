import React from 'react'
import Shimmer from './Shimmer'
import SkeletonElement from './SkeletonElement'

const SkeletonWork = () => {

  return (
    <div className='skeleton-wrapper'>
      <div className="skeleton-work">
        <SkeletonElement type="section" />
      </div>
      <Shimmer />
    </div>
  )
}

export default SkeletonWork;