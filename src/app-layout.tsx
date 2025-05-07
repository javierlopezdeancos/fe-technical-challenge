import React, { type PropsWithChildren } from 'react'

function AppLayout({ children }: PropsWithChildren): React.ReactElement {
  return (
    <div className="w-full h-full px-10 py-8">
      {children}
    </div>
  )
}

export default AppLayout
