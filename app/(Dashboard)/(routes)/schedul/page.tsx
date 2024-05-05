"use client";


import React, { useState, useEffect } from 'react';


import Calendar from '@/components/calander';
import AddEventSection from '@/components/addeventsection'


export default function Schedule() {



  return (
    <div className="container">
      <div className="calendar">
        <Calendar/>
      </div>
    </div>
  )
}