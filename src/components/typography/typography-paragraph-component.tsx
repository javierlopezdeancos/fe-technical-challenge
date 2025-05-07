import React, { type PropsWithChildren } from "react"

function TypographyParagraphComponent({ children }: PropsWithChildren): React.ReactElement {
  return (
    <p className="leading-7 [&:not(:first-child)]:mt-6">
      { children }
    </p>
  )
}

export default TypographyParagraphComponent
