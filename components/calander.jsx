
import { useState } from 'react';
import { useEffect } from 'react';

import "./schedule.css";

import axios from 'axios'

import { Plus, PlusCircle } from 'lucide-react';


import { Button } from "@/components/ui/button";

import { PrismaClient } from '@prisma/client';
import FacebookPostForm from './Publishform';


const Calendar = () => {
  
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth());
  const [days, setDays] = useState([]);

  const [eventsArr, setEventsArr] = useState([]);
  const [activeDay, setActiveDay] = useState(null);

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Function to get events from local storage
  const getEvents = () => {
    const storedEvents = localStorage.getItem('events');
    if (storedEvents) {
      setEventsArr(JSON.parse(storedEvents));
    }
  };

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];



  const handleDateClick = (date) => {
    // Update the selected date when a date is clicked
    setSelectedDate(date);
    if (typeof onDateSelect === 'function') {
      onDateSelect(date);
    }
  };

  useEffect(() => {
    initCalendar();
  }, [year, month]);

  const initCalendar = () => {
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const prevLastDay = new Date(year, month, 0);
    const prevDays = prevLastDay.getDate();
    const lastDate = lastDay.getDate();
    const day = firstDay.getDay();
    const nextDays = 7 - lastDay.getDay() - 1;

    const daysArray = [];

    for (let x = day; x > 0; x--) {
      daysArray.push({ date: prevDays - x + 1, className: 'prev-date' });
    }

    for (let i = 1; i <= lastDate; i++) {
      daysArray.push({ date: i, className: '' });
    }

    for (let j = 1; j <= nextDays; j++) {
      daysArray.push({ date: j, className: 'next-date' });
    }

    setDays(daysArray);
  };

  const prevMonth = () => {
    setMonth((prevMonth) => (prevMonth === 0 ? 11 : prevMonth - 1));
    setYear((prevYear) => (month === 0 ? prevYear - 1 : prevYear));
  };

  const nextMonth = () => {
    setMonth((prevMonth) => (prevMonth === 11 ? 0 : prevMonth + 1));
    setYear((prevYear) => (month === 11 ? prevYear + 1 : prevYear));
  };

  const handleActiveDay = (date) => {
    const day = new Date(year, month, date);
    const dayName = day.toString().split(' ')[0];
    setActiveDay(dayName);
  };


  const onDateSelect = (date) => {
    // Update the selected date when a date is clicked
    setSelectedDate(date); // Assuming setSelectedDate is a state updater function
  };

  const saveEvents = () => {
    localStorage.setItem('events', JSON.stringify(eventsArr));
  };

  const convertTime = (time) => {
    let timeArr = time.split(':');
    let timeHour = timeArr[0];
    let timeMin = timeArr[1];
    let timeFormat = timeHour >= 12 ? 'PM' : 'AM';
    timeHour = timeHour % 12 || 12;
    return timeHour + ':' + timeMin + ' ' + timeFormat;
  };

  const today = new Date();
  const dayName = days[today.getDay()];
  const monthName = months[today.getMonth()];
  const date = today.getDate();
  const Year = today.getFullYear();
  const formattedDate = `${dayName}, ${monthName} ${date}, ${Year}`;


  const prisma = new PrismaClient();

  useEffect(() => {
    window.fbAsyncInit = function() {
      window.FB.init({
        appId      : '1467609453871669',
        cookie     : true,
        xfbml      : true,
        version    : 'v12.0'
      });
    };
  
    // Load the SDK asynchronously
    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }, []);

  
  // Function to handle Facebook login
  const handleFacebookLogin = () => {
    
    window.FB.login(function(response) {
      if (response.authResponse) {
        console.log('User logged in and granted permissions:', response);
        const accessToken = response.authResponse.accessToken;
  
        // Save access token to Prisma database
        prisma.UserPlatforms.create({
          data: {
            userId: userId, // Replace USER_ID with the actual user's ID
            platform: 'Facebook',
            accessToken: accessToken
          }
        })
        .then(savedPlatform => {
          console.log('Access token saved to database:', savedPlatform);
          // Now you can make API calls to Facebook Graph API
        })
        .catch(error => {
          console.error('Error saving access token to database:', error);
          // Handle error, show error message, etc.
        });
      } else {
        console.log('User cancelled login or did not fully authorize.');
      }
    }, {scope: 'email,public_profile,publish_pages'}); // Add required permissions here
  };
  
  // Call handleFacebookLogin in your button click handler
  const handleAddEventButtonClick = () => {
    handleFacebookLogin();
    setIsDialogOpen(true);
  };

  
  const submitFormData = () => {

    // Assuming postText is obtained from the form input
  const postText = document.getElementById('post-text').value;

  // Make POST request to Facebook Graph API
  axios.post(`https://graph.facebook.com/me/feed?access_token=${accessToken}`, {
    message: postText
    // Add other parameters like attached media if needed
  })
  .then(response => {
    console.log('Post successful:', response.data);
    // Optionally, you can close the dialog or show a success message
  })
  .catch(error => {
    console.error('Error posting to Facebook:', error);
    // Handle error, show error message, etc.
  });

    setIsDialogOpen(false);
  };

  return (
    <div className="container">
      <div className="left">
        <div className="calendar">
          <div className="month">
            <i className="fas fa-angle-left prev" onClick={prevMonth}></i>
            <div className="date">{`${months[month]} ${year}`}</div>
            <i className="fas fa-angle-right next" onClick={nextMonth}></i>
          </div>
          <div className="weekdays">
            {weekdays.map((day) => (
              <div key={day}>{day}</div>
            ))}
          </div>
          <div className="days">
            {days.map((day, index) => (
              <div key={index} className={`day ${day.className}`}>
                {day.date}
              </div>
            ))}
          </div>
        </div>
      </div>
        <div className="right">
            <div className='events'></div>
            <div className='add-event-wrapper'>
              <FacebookPostForm isDialogOpen={isDialogOpen} setIsDialogOpen={setIsDialogOpen} />
            </div>
            <Button onClick={handleAddEventButtonClick} size="lg" variant="default" className="w-full">
                Schedule Your content
                <Plus className="w-4 h-4 fill-white"  />
            </Button>
        </div>
    </div>
  );
};

export default Calendar;
