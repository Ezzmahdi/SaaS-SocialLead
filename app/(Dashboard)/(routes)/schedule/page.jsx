"use client";

import React from 'react'

import Fullcalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

import "@bitnoi.se/react-scheduler/dist/style.css";
import * as bootstrap from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import "./calendar.css"

export default function ContentSchedulingPage() {

    const events = [
      {
        title: "The Title",
        description: "The description",
        start: "2024-06-17T03:00:00",
        end: "2024-06-17T05:30:00",
      },
    ];

  return (
    <>
        <p className='p-3'>  </p> 
        
        <div className="calendar-container">
          <Fullcalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            initialView="timeGridWeek"
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "timeGridWeek,dayGridMonth",
            }}
            buttonText={{
              today: 'Today',
              week: 'Week',
              month: 'Month',
            }}
            events={events}
            eventDidMount={(info) => {
              return new bootstrap.Popover(info.el, {
                title: info.event.title,
                placement: "auto",
                trigger: "hover",
                customClass: "popoverStyle",
                content: info.event.extendedProps.description || 'The description',
                html: true,
              });
            }}
            eventContent={(eventInfo) => (
                <div>
                  <b>{eventInfo.timeText}</b>
                  <h6 className='text-white'>{eventInfo.event.title}</h6>
                  <p className='text-white'>{eventInfo.event.description || 'The descriptions'} </p>
                </div>
            )}
          />
      </div>
    </>
  )
}