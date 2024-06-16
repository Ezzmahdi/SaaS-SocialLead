import React from 'react';

import TickerCard from '@/components/ticker-card/TickerCard';
import { TickerProps } from '@/types/analytics';

const ConversionTicker = ({ value }: TickerProps) =>
  <TickerCard
    title='Conversion'
    icon='datausage'
    tone='warning'
    value={value}
    formatValue={(value) => `${value}%`}
    percentage={-2.3}
  />;


export default ConversionTicker;
