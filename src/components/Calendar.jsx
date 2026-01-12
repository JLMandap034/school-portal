import { useState } from 'react';
import '../styles/Calendar.css';

function Calendar({ events = [], onDateSelect, selectedStartDate, selectedEndDate }) {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [selectingRange, setSelectingRange] = useState(false);

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const getDaysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (month, year) => {
    return new Date(year, month, 1).getDay();
  };

  const goToPreviousMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const goToNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const goToToday = () => {
    setCurrentMonth(today.getMonth());
    setCurrentYear(today.getFullYear());
  };

  const handleMonthChange = (e) => {
    setCurrentMonth(parseInt(e.target.value));
  };

  const handleYearChange = (e) => {
    setCurrentYear(parseInt(e.target.value));
  };

  // Generate year options (5 years back and 5 years forward)
  const currentYearValue = today.getFullYear();
  const years = [];
  for (let i = currentYearValue - 5; i <= currentYearValue + 5; i++) {
    years.push(i);
  }

  const isToday = (day) => {
    return (
      day === today.getDate() &&
      currentMonth === today.getMonth() &&
      currentYear === today.getFullYear()
    );
  };

  const hasEvent = (day) => {
    return events.some(event => {
      const eventDate = new Date(event.date);
      return (
        eventDate.getDate() === day &&
        eventDate.getMonth() === currentMonth &&
        eventDate.getFullYear() === currentYear
      );
    });
  };

  const getEventForDay = (day) => {
    return events.find(event => {
      const eventDate = new Date(event.date);
      return (
        eventDate.getDate() === day &&
        eventDate.getMonth() === currentMonth &&
        eventDate.getFullYear() === currentYear
      );
    });
  };

  const isEventUpcoming = (day) => {
    const event = getEventForDay(day);
    if (!event) return false;
    const eventDate = new Date(event.date);
    eventDate.setHours(0, 0, 0, 0);
    const todayDate = new Date(today);
    todayDate.setHours(0, 0, 0, 0);
    return eventDate >= todayDate;
  };

  const isDateSelected = (day) => {
    if (!selectedStartDate && !selectedEndDate) return false;
    
    const dayDate = new Date(currentYear, currentMonth, day);
    dayDate.setHours(0, 0, 0, 0);

    if (selectedStartDate && selectedEndDate) {
      const start = new Date(selectedStartDate);
      start.setHours(0, 0, 0, 0);
      const end = new Date(selectedEndDate);
      end.setHours(0, 0, 0, 0);
      return dayDate >= start && dayDate <= end;
    } else if (selectedStartDate) {
      const start = new Date(selectedStartDate);
      start.setHours(0, 0, 0, 0);
      return dayDate.getTime() === start.getTime();
    } else if (selectedEndDate) {
      const end = new Date(selectedEndDate);
      end.setHours(0, 0, 0, 0);
      return dayDate.getTime() === end.getTime();
    }

    return false;
  };

  const isInRange = (day) => {
    if (!selectedStartDate || !selectedEndDate) return false;
    
    const dayDate = new Date(currentYear, currentMonth, day);
    dayDate.setHours(0, 0, 0, 0);
    const start = new Date(selectedStartDate);
    start.setHours(0, 0, 0, 0);
    const end = new Date(selectedEndDate);
    end.setHours(0, 0, 0, 0);
    
    return dayDate > start && dayDate < end;
  };

  const handleDateClick = (day) => {
    if (!onDateSelect) return;

    const clickedDate = new Date(currentYear, currentMonth, day);
    clickedDate.setHours(0, 0, 0, 0);

    if (!selectedStartDate || (selectedStartDate && selectedEndDate)) {
      // Start new selection
      onDateSelect(clickedDate, null);
      setSelectingRange(true);
    } else if (selectedStartDate && !selectedEndDate) {
      // Complete the range
      const start = new Date(selectedStartDate);
      start.setHours(0, 0, 0, 0);
      
      if (clickedDate < start) {
        // If clicked date is before start, make it the new start
        onDateSelect(clickedDate, start);
      } else {
        // Normal case: set end date
        onDateSelect(selectedStartDate, clickedDate);
      }
      setSelectingRange(false);
    }
  };

  const daysInMonth = getDaysInMonth(currentMonth, currentYear);
  const firstDay = getFirstDayOfMonth(currentMonth, currentYear);
  const days = [];

  // Add empty cells for days before the first day of the month
  for (let i = 0; i < firstDay; i++) {
    days.push(null);
  }

  // Add all days of the month
  for (let day = 1; day <= daysInMonth; day++) {
    days.push(day);
  }

  return (
    <div className="calendar">
      <div className="calendar-header">
        <button className="calendar-nav" onClick={goToPreviousMonth}>
          ‹
        </button>
        <div className="calendar-month-year">
          <div className="month-year-selectors">
            <select 
              className="month-selector"
              value={currentMonth}
              onChange={handleMonthChange}
              aria-label="Select month"
            >
              {monthNames.map((month, index) => (
                <option key={index} value={index}>
                  {month}
                </option>
              ))}
            </select>
            <select 
              className="year-selector"
              value={currentYear}
              onChange={handleYearChange}
              aria-label="Select year"
            >
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
          <button className="today-button" onClick={goToToday}>Today</button>
        </div>
        <button className="calendar-nav" onClick={goToNextMonth}>
          ›
        </button>
      </div>

      <div className="calendar-weekdays">
        {daysOfWeek.map(day => (
          <div key={day} className="weekday">{day}</div>
        ))}
      </div>

      <div className="calendar-days">
        {days.map((day, index) => {
          if (day === null) {
            return <div key={`empty-${index}`} className="calendar-day empty"></div>;
          }

          const event = getEventForDay(day);
          const isEventDay = hasEvent(day);
          const isTodayDay = isToday(day);
          const isSelected = isDateSelected(day);
          const inRange = isInRange(day);
          const isUpcoming = isEventUpcoming(day);

          return (
            <div
              key={day}
              className={`calendar-day ${isTodayDay ? 'today' : ''} ${isEventDay ? 'has-event' : ''} ${isSelected ? 'selected' : ''} ${inRange ? 'in-range' : ''} ${onDateSelect ? 'clickable' : ''}`}
              title={event ? event.title : ''}
              onClick={() => onDateSelect && handleDateClick(day)}
            >
              <span className="day-number">{day}</span>
              {isEventDay && <span className={`event-dot ${isUpcoming ? 'upcoming' : 'past'}`}></span>}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Calendar;
