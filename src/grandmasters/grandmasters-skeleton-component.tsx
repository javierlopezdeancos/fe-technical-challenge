import React from 'react'
import { SkeletonComponent } from "@/components/skeleton-component"

function GrandmastersSkeletonComponent(): React.ReactElement {
  return (
      <div className="flex items-center space-x-4">
        <SkeletonComponent className="h-4 w-full" />
      </div>
  )
}

export default GrandmastersSkeletonComponent
