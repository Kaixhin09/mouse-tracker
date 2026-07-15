import React, {useState} from 'react';
import MouseTracker from './MouseTracker';


function ParentComponent() {
  const [showComponent, setShowComponent] = React.useState(true);

  const toggleComponent = () => {
    setShowComponent(!showComponent);
  }

  return (
    <div>
      <button onClick={toggleComponent}>
        {showComponent ? 'Unmount' : 'Mount Tracker'} Mouse Tracker
      </button>
      {showComponent && <MouseTracker />}
    </div>
  );
}

export default ParentComponent;