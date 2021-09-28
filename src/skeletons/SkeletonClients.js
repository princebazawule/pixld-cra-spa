import React from 'react'
import Shimmer from './Shimmer'
import SkeletonElement from './SkeletonElement'

const SkeletonClient = () => {

  return (
    <div className='skeleton-wrapper'>
      <div className="skeleton-clients">
        <SkeletonElement type="client-item" />
      </div>
      <Shimmer />
    </div>
  )
}

export default SkeletonClient;