import React from 'react';

interface RenderIfProps {}

export const RenderIF:React.FC<RenderIfProps> = ({ children, isTrue }) => {
  return isTrue ? children: null
};
