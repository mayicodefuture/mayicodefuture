import React, { forwardRef } from 'react';

type Props = {
  variant?: 'default' | 'outline'
}

export const Button = forwardRef<
  HTMLButtonElement,
  React.PropsWithoutRef<JSX.IntrinsicElements['button']> & Props
>(({ className, children, variant = 'default', ...rest }, ref) => {
  const chosenButtonVariant = (() => {
    if (variant === 'default') {
      return 'text-white bg-blue-500 hover:bg-blue-700 focus:shadow-outline focus:outline-none'
    }
    if (variant === 'outline') {
      return 'text-blue-500 bg-white border-2 border-solid hover:bg-blue-100 focus:shadow-outline focus:outline-none'
    }
  })()

  return (
    <button
      {...rest}
      ref={ref}
      className={`px-4 py-2 rounded-lg transition-all duration-100 ${chosenButtonVariant} ${className}`}
    >
      {children}
    </button>
  )
})
