import React, { type PropsWithChildren } from 'react'

function AppLayout({ children }: PropsWithChildren): React.ReactElement {

  return (
    <div className="w-full h-full">
      {children}
    </div>
  )
}

export default AppLayout
