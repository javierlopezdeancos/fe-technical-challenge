import React from 'react'
import SkeletonComponent from "@/components/skeleton/skeleton-component.tsx"

function GrandmasterSkeletonComponent(): React.ReactElement {
  return (
    <div className="w-full flex flex-row gap-4 items-start space-x-4 overflow-hidden">
      <SkeletonComponent className="h-24 w-24 rounded-full" />
      <div className='w-full flex flex-col items-start justify-center gap-3'>
        <SkeletonComponent className="h-10 w-100" />
        <div className='w-full flex flex-row items-center justify-start gap-3'>
          <SkeletonComponent className="h-6 w-10" />
          <SkeletonComponent className="h-6 w-80" />
        </div>
        <div className='w-full flex flex-row items-center justify-start gap-3'>
          <SkeletonComponent className="h-6 w-70" />
          <SkeletonComponent className="h-6 w-80" />
        </div>
      </div>
    </div>
  )
}

export default GrandmasterSkeletonComponent
