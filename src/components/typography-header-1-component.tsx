import React, { type PropsWithChildren } from "react"

function TypographyHeader1Component({ children }: PropsWithChildren): React.ReactElement {
  return (
    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
      {children}
    </h1>
  )
}

export default TypographyHeader1Component
