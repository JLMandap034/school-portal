import { useState } from 'react';
import ImageCarousel from '../components/ImageCarousel';
import '../styles/Gallery.css';

function Gallery() {
  // Image sets for each specific gallery item
  const itemImages = {
    'School Campus': [
      { id: 1, title: 'Main Building', category: 'Campus' },
      { id: 2, title: 'School Entrance', category: 'Campus' },
      { id: 3, title: 'Campus Aerial View', category: 'Campus' },
      { id: 4, title: 'Student Parking', category: 'Campus' },
      { id: 5, title: 'Campus Garden', category: 'Campus' },
      { id: 6, title: 'Administration Building', category: 'Campus' },
      { id: 7, title: 'Campus Walkway', category: 'Campus' },
      { id: 8, title: 'School Gate', category: 'Campus' },
    ],
    'Playground': [
      { id: 1, title: 'Playground Overview', category: 'Campus' },
      { id: 2, title: 'Swing Set Area', category: 'Campus' },
      { id: 3, title: 'Basketball Court', category: 'Campus' },
      { id: 4, title: 'Playing Field', category: 'Campus' },
      { id: 5, title: 'Playground Equipment', category: 'Campus' },
    ],
    'Science Lab': [
      { id: 1, title: 'Chemistry Lab Equipment', category: 'Facilities' },
      { id: 2, title: 'Biology Lab Setup', category: 'Facilities' },
      { id: 3, title: 'Physics Lab Apparatus', category: 'Facilities' },
      { id: 4, title: 'Science Lab Classroom', category: 'Facilities' },
      { id: 5, title: 'Lab Safety Equipment', category: 'Facilities' },
    ],
    'Library': [
      { id: 1, title: 'Library Reading Area', category: 'Facilities' },
      { id: 2, title: 'Book Collection', category: 'Facilities' },
      { id: 3, title: 'Study Rooms', category: 'Facilities' },
      { id: 4, title: 'Reference Section', category: 'Facilities' },
      { id: 5, title: 'Digital Resources', category: 'Facilities' },
      { id: 6, title: 'Library Interior', category: 'Facilities' },
    ],
    'Computer Lab': [
      { id: 1, title: 'Computer Workstations', category: 'Facilities' },
      { id: 2, title: 'Lab Setup', category: 'Facilities' },
      { id: 3, title: 'Network Infrastructure', category: 'Facilities' },
      { id: 4, title: 'Students at Work', category: 'Facilities' },
      { id: 5, title: 'Lab Equipment', category: 'Facilities' },
    ],
    'Music Room': [
      { id: 1, title: 'Music Instruments', category: 'Facilities' },
      { id: 2, title: 'Practice Room', category: 'Facilities' },
      { id: 3, title: 'Recording Studio', category: 'Facilities' },
      { id: 4, title: 'Performance Space', category: 'Facilities' },
      { id: 5, title: 'Music Library', category: 'Facilities' },
    ],
    'Sports Day': [
      { id: 1, title: 'Opening Ceremony', category: 'Events' },
      { id: 2, title: 'Track Events', category: 'Events' },
      { id: 3, title: 'Team Competitions', category: 'Events' },
      { id: 4, title: 'Award Ceremony', category: 'Events' },
      { id: 5, title: 'Victory Celebration', category: 'Events' },
    ],
    'Graduation Ceremony': [
      { id: 1, title: 'Graduation Procession', category: 'Events' },
      { id: 2, title: 'Diploma Presentation', category: 'Events' },
      { id: 3, title: 'Graduation Hall', category: 'Events' },
      { id: 4, title: 'Graduate Photos', category: 'Events' },
      { id: 5, title: 'Family Celebration', category: 'Events' },
      { id: 6, title: 'Graduation Speech', category: 'Events' },
    ],
    'Art Exhibition': [
      { id: 1, title: 'Student Artwork Display', category: 'Events' },
      { id: 2, title: 'Gallery Opening', category: 'Events' },
      { id: 3, title: 'Artwork Collection', category: 'Events' },
      { id: 4, title: 'Visitor Viewing', category: 'Events' },
      { id: 5, title: 'Art Awards', category: 'Events' },
      { id: 6, title: 'Exhibition Hall', category: 'Events' },
      { id: 7, title: 'Artist Presentations', category: 'Events' },
      { id: 8, title: 'Closing Reception', category: 'Events' },
    ],
  };

  // Gallery items for display
  const galleryItems = [
    { id: 1, title: 'School Campus', category: 'Campus' },
    { id: 2, title: 'Science Lab', category: 'Facilities' },
    { id: 3, title: 'Sports Day', category: 'Events' },
    { id: 4, title: 'Library', category: 'Facilities' },
    { id: 5, title: 'Graduation Ceremony', category: 'Events' },
    { id: 6, title: 'Computer Lab', category: 'Facilities' },
    { id: 7, title: 'Art Exhibition', category: 'Events' },
    { id: 8, title: 'Playground', category: 'Campus' },
    { id: 9, title: 'Music Room', category: 'Facilities' },
  ];

  const [carouselOpen, setCarouselOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [carouselImages, setCarouselImages] = useState([]);

  const handleViewClick = (item) => {
    // Get images specific to this gallery item
    const images = itemImages[item.title] || [];
    setCarouselImages(images);
    setCurrentImageIndex(0);
    setCarouselOpen(true);
  };

  return (
    <div className="gallery-container">
      <div className="container">
        <h1>School Gallery</h1>
        <p className="gallery-intro">
          Explore our campus, facilities, and events through our photo gallery.
        </p>

        <div className="gallery-grid">
          {galleryItems.map((item) => {
            // Get the number of images for this item
            const imageCount = itemImages[item.title]?.length || 0;

            return (
              <div key={item.id} className="gallery-item">
                <div className="gallery-image-placeholder">
                  <div className="placeholder-icon">📷</div>
                  <div className="placeholder-text">{item.title}</div>
                </div>
                <div className="gallery-item-info">
                  <div className="gallery-item-header">
                    <h3>{item.title}</h3>
                    {imageCount > 0 && (
                      <button 
                        className="view-button"
                        onClick={() => handleViewClick(item)}
                        aria-label={`View ${item.title}`}
                      >
                        View
                      </button>
                    )}
                  </div>
                  <span className="gallery-category">{item.category}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {carouselOpen && carouselImages.length > 0 && (
        <ImageCarousel
          images={carouselImages}
          currentIndex={currentImageIndex}
          onClose={() => setCarouselOpen(false)}
        />
      )}
    </div>
  );
}

export default Gallery;
