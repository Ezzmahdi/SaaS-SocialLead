
import React, { useState } from 'react';

import "./schedule.css";
import { Plus, PlusCircle } from 'lucide-react';

import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";


const AddEventSection = () => {
const [eventsArr, setEventsArr] = useState([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false); // State to track dialog open/close

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

  const handleAddEventClick = () => {

  };

  const handleAddEventButtonClick = () => {
    setIsDialogOpen(true); // Open the dialog when add-event button is clicked
  };

  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const today = new Date();
  const dayName = days[today.getDay()];
  const monthName = months[today.getMonth()];
  const date = today.getDate();
  const year = today.getFullYear();
  const formattedDate = `${dayName}, ${monthName} ${date}, ${year}`;


  return (
    <div className="right">
        <div className='events'></div>
        <div className='add-event-wrapper'>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogContent className="flex size-full">
                    <DialogHeader>
                        <DialogTitle className="flex justify-center items-center flex-col gap-y-4 pb-2">
                            <div className="flex items-center gap-x-2 font-bold py-1">
                                ِAdd Event
                            </div>
                        </DialogTitle>
                        <DialogDescription className="text-center pt-2 space-y-2 text-zinc-900 font-medium">
                            
                        <div class="post-content">
                          <textarea id="post-text" placeholder="Start writing or use the AI Assistant" className='w-full'></textarea>
                          <div class="file-upload">
                            <label for="file-input">Drag & drop or select a file</label>
                            <input type="file" id="file-input"/>
                          </div>
                        </div>
                        </DialogDescription>
                        <DialogFooter>
                            <Button onClick={handleAddEventClick} size="lg" variant="default" className="w-full">
                                Add Event
                                <Plus className="w-4 h-4 fill-white"  />
                            </Button>
                        </DialogFooter>
                    </DialogHeader>
                    
                </DialogContent>
            </Dialog>
        </div>
        <Button onClick={handleAddEventButtonClick} size="lg" variant="default" className="w-full">
            Schedule Yourr content
            <PlusCircle className="w-4 h-4 fill-white"  />
        </Button>
    </div>

  );
};

export default AddEventSection;