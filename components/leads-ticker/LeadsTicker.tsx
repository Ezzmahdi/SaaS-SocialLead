import React from 'react';

import TickerCard from '@/components/ticker-card/TickerCard';
import { TickerProps } from '@/types/analytics';

const LeadsTicker = ({ value }: TickerProps) =>
  <TickerCard
    icon='datapie'
    tone='info'
    title='Leads'
    value={value}
    percentage={8.5}
  />;


export default LeadsTicker;