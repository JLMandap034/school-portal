import { useState } from 'react';
import Calendar from './Calendar';
import '../styles/Announcements.css';

function Announcements() {
  const today = new Date();
  
  // Sample events data
  const allEvents = [
    {
      id: 1,
      title: 'Annual Science Fair',
      date: new Date(2024, 11, 15), // December 15, 2024
      type: 'upcoming',
      description: 'Students showcase their innovative science projects.',
    },
    {
      id: 2,
      title: 'Parent-Teacher Conference',
      date: new Date(2024, 11, 20), // December 20, 2024
      type: 'upcoming',
      description: 'Meet with teachers to discuss student progress.',
    },
    {
      id: 3,
      title: 'Winter Break',
      date: new Date(2024, 11, 23), // December 23, 2024
      type: 'upcoming',
      description: 'School closed for winter holidays.',
    },
    {
      id: 4,
      title: 'Basketball Championship',
      date: new Date(2025, 0, 10), // January 10, 2025
      type: 'upcoming',
      description: 'Annual inter-school basketball tournament.',
    },
    {
      id: 5,
      title: 'Graduation Ceremony',
      date: new Date(2024, 10, 30), // November 30, 2024
      type: 'past',
      description: 'Class of 2024 graduation celebration.',
    },
    {
      id: 6,
      title: 'Art Exhibition',
      date: new Date(2024, 10, 15), // November 15, 2024
      type: 'past',
      description: 'Student artwork showcase.',
    },
    {
      id: 7,
      title: 'Sports Day',
      date: new Date(2024, 9, 25), // October 25, 2024
      type: 'past',
      description: 'Annual sports day competition.',
    },
    {
      id: 8,
      title: 'Science Lab Opening',
      date: new Date(2025, 0, 5), // January 5, 2025
      type: 'upcoming',
      description: 'Grand opening of the new science laboratory.',
    },
    {
      id: 9,
      title: 'New Year Assembly',
      date: new Date(2026, 0, 8), // January 8, 2026
      type: 'upcoming',
      description: 'Welcome back assembly to start the new year.',
    },
    {
      id: 10,
      title: 'Math Olympiad',
      date: new Date(2026, 0, 15), // January 15, 2026
      type: 'upcoming',
      description: 'Competitive mathematics competition for students.',
    },
    {
      id: 11,
      title: 'Career Day',
      date: new Date(2026, 0, 22), // January 22, 2026
      type: 'upcoming',
      description: 'Explore various career paths with guest speakers.',
    },
    {
      id: 12,
      title: 'Debate Competition',
      date: new Date(2026, 0, 28), // January 28, 2026
      type: 'upcoming',
      description: 'Inter-school debate championship.',
    },
    {
      id: 13,
      title: 'Valentine\'s Day Celebration',
      date: new Date(2026, 1, 14), // February 14, 2026
      type: 'upcoming',
      description: 'School-wide celebration of friendship and kindness.',
    },
    {
      id: 14,
      title: 'Science Week',
      date: new Date(2026, 1, 17), // February 17, 2026
      type: 'upcoming',
      description: 'Week-long celebration of science with experiments and workshops.',
    },
    {
      id: 15,
      title: 'Book Fair',
      date: new Date(2026, 1, 25), // February 25, 2026
      type: 'upcoming',
      description: 'Annual book fair featuring new releases and author visits.',
    },
    {
      id: 16,
      title: 'Spring Concert',
      date: new Date(2026, 2, 10), // March 10, 2026
      type: 'upcoming',
      description: 'Musical performances by students and school bands.',
    },
    {
      id: 17,
      title: 'Field Trip - Museum',
      date: new Date(2026, 2, 18), // March 18, 2026
      type: 'upcoming',
      description: 'Educational field trip to the local history museum.',
    },
    {
      id: 18,
      title: 'Talent Show',
      date: new Date(2026, 2, 25), // March 25, 2026
      type: 'upcoming',
      description: 'Showcase of student talents in music, dance, and drama.',
    },
  ];

  const [selectedType, setSelectedType] = useState('upcoming');
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [selectedEndDate, setSelectedEndDate] = useState(null);

  const handleDateSelect = (startDate, endDate) => {
    setSelectedStartDate(startDate);
    setSelectedEndDate(endDate);
  };

  const filterEventsByDateRange = (events) => {
    if (!selectedStartDate && !selectedEndDate) {
      return events;
    }

    return events.filter(event => {
      const eventDate = new Date(event.date);
      eventDate.setHours(0, 0, 0, 0);

      if (selectedStartDate && selectedEndDate) {
        const start = new Date(selectedStartDate);
        start.setHours(0, 0, 0, 0);
        const end = new Date(selectedEndDate);
        end.setHours(23, 59, 59, 999);
        return eventDate >= start && eventDate <= end;
      } else if (selectedStartDate) {
        const start = new Date(selectedStartDate);
        start.setHours(0, 0, 0, 0);
        return eventDate.getTime() === start.getTime();
      } else if (selectedEndDate) {
        const end = new Date(selectedEndDate);
        end.setHours(23, 59, 59, 999);
        return eventDate <= end;
      }

      return true;
    });
  };

  // Categorize events based on current date, not just the type field
  const upcomingEvents = allEvents.filter(event => {
    const eventDate = new Date(event.date);
    eventDate.setHours(0, 0, 0, 0);
    const todayDate = new Date(today);
    todayDate.setHours(0, 0, 0, 0);
    // Event is upcoming if its date is today or in the future
    return eventDate >= todayDate;
  }).sort((a, b) => new Date(a.date) - new Date(b.date));

  const pastEvents = allEvents.filter(event => {
    const eventDate = new Date(event.date);
    eventDate.setHours(0, 0, 0, 0);
    const todayDate = new Date(today);
    todayDate.setHours(0, 0, 0, 0);
    // Event is past if its date is before today
    return eventDate < todayDate;
  }).sort((a, b) => new Date(b.date) - new Date(a.date));

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const hasActiveFilters = selectedStartDate || selectedEndDate;

  // Limit events to 5 when no filter is active
  const baseEvents = selectedType === 'upcoming' 
    ? (hasActiveFilters ? upcomingEvents : upcomingEvents.slice(0, 5))
    : (hasActiveFilters ? pastEvents : pastEvents.slice(0, 5));
  
  const displayEvents = filterEventsByDateRange(baseEvents);

  const clearFilters = () => {
    setSelectedStartDate(null);
    setSelectedEndDate(null);
  };

  return (
    <section className="announcements-section section-alt-1">
      <div className="container">
        <h2>Announcements & Events</h2>
        
        <div className="announcements-content">
          <div className="announcements-list">
            <div className="announcements-tabs">
              <button
                className={`tab-button ${selectedType === 'upcoming' ? 'active' : ''}`}
                onClick={() => setSelectedType('upcoming')}
              >
                Upcoming Events
              </button>
              <button
                className={`tab-button ${selectedType === 'past' ? 'active' : ''}`}
                onClick={() => setSelectedType('past')}
              >
                Past Events
              </button>
            </div>

            <div className="date-filter-info">
              <p className="filter-instruction">
                Click on dates in the calendar to filter events. Click a date to start, then click another to set a range.
              </p>
              {hasActiveFilters && (
                <div className="filter-status">
                  <span className="filter-text">
                    {selectedStartDate && selectedEndDate
                      ? `Showing events from ${formatDate(selectedStartDate)} to ${formatDate(selectedEndDate)}`
                      : selectedStartDate
                      ? `Showing events on ${formatDate(selectedStartDate)}`
                      : selectedEndDate
                      ? `Showing events up to ${formatDate(selectedEndDate)}`
                      : ''}
                  </span>
                  <button className="clear-filters-btn" onClick={clearFilters}>
                    Clear Filter
                  </button>
                </div>
              )}
            </div>

            <div className="events-list">
              {displayEvents.length > 0 ? (
                displayEvents.map((event) => (
                  <div key={event.id} className="event-card">
                    <div className="event-date">
                      <div className="event-day">{new Date(event.date).getDate()}</div>
                      <div className="event-month">{new Date(event.date).toLocaleDateString('en-US', { month: 'short' })}</div>
                    </div>
                    <div className="event-details">
                      <h3>{event.title}</h3>
                      <p className="event-date-text">{formatDate(event.date)}</p>
                      <p className="event-description">{event.description}</p>
                    </div>
                  </div>
                ))
              ) : (
                <div className="no-events">No {selectedType === 'upcoming' ? 'upcoming' : 'past'} events at this time.</div>
              )}
            </div>
          </div>

          <div className="calendar-container">
            <Calendar 
              events={allEvents}
              onDateSelect={handleDateSelect}
              selectedStartDate={selectedStartDate}
              selectedEndDate={selectedEndDate}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Announcements;
