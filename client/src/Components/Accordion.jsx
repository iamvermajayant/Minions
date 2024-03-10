import { useState } from 'react';
import './Accordion.css';

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const accordionData = [
    {
      title: 'Accordion Item #1',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      title: 'Accordion Item #2',
      content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    // Add more items as needed
  ];

  return (
    <div className="accordion">
      {accordionData.map((item, index) => (
        <div className={`accordion-item ${activeIndex === index ? 'active' : ''}`} key={index}>
          <div
            className={`accordion-header ${activeIndex === index ? 'active' : ''}`}
            onClick={() => handleToggle(index)}
          >
            {item.title}
          </div>
          {activeIndex === index && (
            <div className="accordion-content">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
