import React from 'react'
import Shimmer from './Shimmer'
import SkeletonElement from './SkeletonElement'

const SkeletonHome = () => {

  return (
    <div className='skeleton-wrapper'>
      <div className="skeleton-home">
        <SkeletonElement type="profile" />
        <SkeletonElement type="profile" />
        <SkeletonElement type="profile" />
        <SkeletonElement type="profile" />
        <SkeletonElement type="profile" />
        <SkeletonElement type="profile" />
        <SkeletonElement type="button" />
      </div>
      <Shimmer />
    </div>
  )
}

export default SkeletonHome;