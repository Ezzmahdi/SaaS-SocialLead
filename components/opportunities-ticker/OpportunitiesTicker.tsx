import React from 'react';

import TickerCard from '@/components/ticker-card/TickerCard';
import { TickerProps } from '@/types/analytics';
import { formatCurrency } from '@/lib/format-currency';

const OpportunitiesTicker = ({ value }: TickerProps) =>
  <TickerCard
    title='Opportunities'
    icon='datatrending'
    value={value}
    formatValue={formatCurrency}
    percentage={20.3}
  />;


export default OpportunitiesTicker;