import React from 'react';
import { DropDownButton } from 'devextreme-react/drop-down-button';

import './CardMe.scss';

const CardMenu = ({items, visible = true }: { items: any[], visible?: boolean }) => {
  return (
    <DropDownButton
      className='overflow-menu'
      items={items}
      visible={visible}
      icon='overflow'
      stylingMode='text'
      showArrowIcon={false}
      dropDownOptions={{ width: 'auto' }}
    />
  );
};

export default CardMenu;
