import React, { ReactNode } from 'react';
import CardMenu from '../card-menu/CardMenu';
import './CardAnalys.scss';

type CardProps = {
  title?: string;
  additionalHeaderContent?: ReactNode;
  contentClass: string;
  isLoading?: boolean;
  menuVisible?: boolean;
};

const menuItems = [
  { text: 'Configure' },
  { text: 'Remove' },
];

const CardAnalytics = ({
  title,
  contentClass,
  isLoading = false,
  children,
  additionalHeaderContent,
  menuVisible = true,
}: React.PropsWithChildren<CardProps>) => (
  <div className={`card ${contentClass}`}>
    <div className='header'>
      <CardMenu visible={menuVisible} items={menuItems} />
      {title && <div className='title'>{title}</div>}
      {additionalHeaderContent}
    </div>
    {!isLoading && <div className='card-contents'>{children}</div>}
  </div>
);

export default CardAnalytics;