export const SET_OPEN = 'SET_OPEN';
export const SET_CLOSED = 'SET_CLOSED';
export const SET_UNLOCKED = 'SET_UNLOCKED';
export const SET_LOCKED = 'SET_LOCKED';

export const setOpen = () => {
    return {
      type: SET_OPEN,
      payload: true
    };
  };

  export const setClosed = () => {
    return {
      type: SET_CLOSED,
      payload: true
    };
  };

  export const setUnlocked = () => {
    return {
      type: SET_UNLOCKED,
      payload: true
    };
  };

  export const setLocked = () => {
    return {
      type: SET_LOCKED,
      payload: true
    };
  };