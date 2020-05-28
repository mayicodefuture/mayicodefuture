import React from 'react'
import { IoMdSearch } from 'react-icons/io'

type Props = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  value?: string
  placeholder?: string
  className?: string
  'aria-label'?: string
}

export const SearchBar: React.FC<Props> = ({
  value,
  onChange,
  placeholder = 'Start typing...',
  className,
  ...rest
}) => {
  return (
    <div className="relative">
      <input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        {...rest}
        className={`rounded-full border border-solid border-gray-700 w-full px-6 py-2 outline-none ${className}`}
      />
      <IoMdSearch
        size="1.3rem"
        className="absolute transform translate-y-1/2 top-0 right-0 mr-6"
      />
    </div>
  )
}
