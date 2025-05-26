import React from 'react';
import styles from './OrbitAnimation.module.css';
// Assuming you have your logo as an SVG or image
// import YourLogo from './YourLogo.svg'; // Example

const OrbitAnimation = () => {
  // You can generate these dynamically if needed
  const orbitsConfig = [
    {
      id: 1,
      style: styles.orbit1,
      dots: [{ id: 'd1a', className: styles['orbit1-dot1'] }, { id: 'd1b', className: styles['orbit1-dot2'] }],
      orbitRadius: 75, // half of width/height
    },
    {
      id: 2,
      style: styles.orbit2,
      dots: [{ id: 'd2a', className: styles['orbit2-dot1'] }, { id: 'd2b', className: styles['orbit2-dot2'] }],
      orbitRadius: 110,
    },
    {
      id: 3,
      style: styles.orbit3,
      dots: [{ id: 'd3a', className: styles['orbit3-dot1'] }, { id: 'd3b', className: styles['orbit3-dot2'] }],
      orbitRadius: 145,
    },
  ];

  // Function to get initial dot position (optional, CSS handles it mostly)
  // This is more for if you wanted JS control over initial placement beyond animation-delay
  const getDotPosition = (orbitRadius:any, angleDegrees: any) => {
    const angleRadians = (angleDegrees * Math.PI) / 180;
    // We position the dot on the left (0px) of the orbit wrapper.
    // The rotation of the orbit wrapper handles the movement.
    // The CSS handles placing it on the circumference.
    // This function would be more useful if you were calculating absolute positions with JS.
    return {
        top: '50%', // CSS handles fine adjustment
        left: '0px', // CSS handles fine adjustment
    };
  };


  return (
    <div className={styles.orbitContainer}>
      <div className={styles.centerBall}>
        {/* If using an image: <img src={YourLogo} alt="Center Logo" /> */}
        {/* Or an SVG icon component */}
        <svg width="30" height="30" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>

      {orbitsConfig.map(orbit => (
        <div key={orbit.id} className={`${styles.orbit} ${orbit.style}`}>
          {orbit.dots.map((dot, index) => {
            // Example of slightly different initial visual placement using inline style for rotation
            // This is an alternative or complement to animation-delay
            // The dot itself is positioned at (0, radius) relative to the orbit center
            // then the orbit rotates.
            // CSS positions the dot at the 'left: 0' edge of the rotating orbit path.
            const initialAngle = (360 / orbit.dots.length) * index + (orbit.id * 30); // Stagger start
            const dotStyle = {
                // transform: `rotate(${initialAngle}deg) translateX(${orbit.orbitRadius}px) rotate(-${initialAngle}deg) translate(-50%, -50%)`
                // The CSS method with animation-delay for initial offset is simpler.
            };
            return <div key={dot.id} className={`${styles.orbitDot} ${dot.className}`} style={dotStyle}></div>;
          })}
        </div>
      ))}
    </div>
  );
};

export default OrbitAnimation;