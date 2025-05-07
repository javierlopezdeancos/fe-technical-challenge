import React, { useState, useEffect,  type PropsWithChildren } from 'react'
import LoaderComponent from "@/components/loader/loader-component.tsx"

function AppLayout({ children }: PropsWithChildren): React.ReactElement {
  const [iLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timeoutId)
  },[])

  return (
    <div className="w-full h-full px-10 py-8">
      {iLoading ? <LoaderComponent/> : children}
    </div>
  )
}

export default AppLayout
