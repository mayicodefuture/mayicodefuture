import React from 'react';
import { pickColorBasedOnBg } from 'shared/functions';
import { TagType } from 'shared/types';

export const Tag: React.FC<TagType> = ({
  backgroundColor,
  textColor,
  label,
}) => {
  return (
    <div
      className="py-1 px-3 rounded-md text-center"
      style={{
        backgroundColor: backgroundColor || '#BDC3C7',
        color: (() => {
          if (textColor) {
            return textColor
          }
          if (backgroundColor) {
            return pickColorBasedOnBg(backgroundColor)
          }
          return '#000'
        })(),
      }}
    >
      {label}
    </div>
  )
}
