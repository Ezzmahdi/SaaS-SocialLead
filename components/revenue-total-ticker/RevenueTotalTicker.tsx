import React from 'react';

import TickerCard from '@/components/ticker-card/TickerCard';
import { TickerProps } from '@/types/analytics';
import { formatCurrency } from '@/lib/format-currency';

const RevenueTotalTicker = ({ value }: TickerProps) =>
  <TickerCard
    title='Revenue Total'
    icon='dataarea'
    value={value}
    formatValue={formatCurrency}
    percentage={-14.7}
  />;

  
export default RevenueTotalTicker;