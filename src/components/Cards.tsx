import React, {PropsWithChildren} from "react";

export enum CardVariant{
  outLined = 'outlined',
  primary = 'primary'
}

interface CardProps extends PropsWithChildren{
  width?: string;
  height?: string;
  variant?: CardVariant;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = (
  {width, height, variant, onClick, children}
) => {
  return(
    <div 
      style={{
        width, height, 
        background: variant === CardVariant.primary ? "yellow" : 'none', 
        border: variant === CardVariant.outLined ? '1px solid gray' : 'none',
      }}
    > 
      ЪУЪ
      <button onClick={onClick}>{children}</button>
    </div>
  )
};

export default Card;