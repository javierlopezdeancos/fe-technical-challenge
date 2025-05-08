import React, { useId } from 'react'
import SkeletonComponent from "@/components/skeleton/skeleton-component.tsx"
import getRandomNumberBetweenLimitsHelper from "@/helpers/get-random-number-between-limits-helper.ts"
import useViewportHook from "@/hooks/viewport-hook.ts"

function GrandmasterSkeletonComponent(): React.ReactElement {
  const componentId = useId()
  const { vh } = useViewportHook()

  const numberOfGrandmasters = vh % 24
  const skeletons =  Array.from({ length: numberOfGrandmasters }, (_, i) => getRandomNumberBetweenLimitsHelper(10, 60) + i)

  return (
      <div className="w-full flex flex-col gap-4 items-start space-x-4 overflow-hidden">
        {
          skeletons.map((s: number) => {
            return <SkeletonComponent key={`${componentId}-${s}`} className={`h-4`} style={{ width: `${s}%` }} />
          })
        }

      </div>
  )
}

export default GrandmasterSkeletonComponent
