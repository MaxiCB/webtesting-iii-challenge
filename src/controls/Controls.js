import React from 'react';

const Controls = props => {
  const { locked, closed, toggleLocked, toggleClosed } = props;

  return (
    <div className="controls panel">
      <button data-testid='btn1' disabled={!closed} onClick={e => toggleLocked} className="toggle-btn">
        {locked ? 'Unlock Gate' : 'Lock Gate'}
      </button>
      <button data-testid='btn2' disabled={locked} onClick={e => toggleClosed} className="toggle-btn">
        {closed ? 'Open Gate' : 'Close Gate'}
      </button>
    </div>
  );
};

export default Controls;
