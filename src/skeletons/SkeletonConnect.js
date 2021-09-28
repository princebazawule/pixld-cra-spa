import React from 'react'
import Shimmer from './Shimmer'
import SkeletonElement from './SkeletonElement'

const SkeletonConnect = () => {

  return (
    <div className='skeleton-wrapper'>
      <div className="skeleton-connect">
        <SkeletonElement type="list" />
      </div>
      <Shimmer />
    </div>
  )
}

export default SkeletonConnect;