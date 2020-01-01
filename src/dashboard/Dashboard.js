import React from 'react';

import Display from '../display/Display';
import Controls from '../controls/Controls';

import { connect } from 'react-redux';
import { setOpen, setLocked } from '../actions/actions';

const Dashboard = props => {
  // state = {
  //   locked: false,
  //   closed: false,
  // };

  // render() {
  //   const { closed, locked } = this.state;

  const toggleLocked = () => {
    // this.setState(prev => ({ locked: !prev.locked }));
    const toggle = props.setLocked;
    toggle(!props.unlocked)
  };

   const toggleClosed = () => {
    const toggle = props.setOpen;
    toggle(!props.open)
    // this.setState(prev => ({ closed: !prev.closed }));
  };

  console.log(props.open, props.unlocked)

    return (
      <>
        <Display locked={props.unlocked} closed={props.open} />
        <Controls
          locked={props.unlocked}
          closed={props.open}
          toggleLocked={toggleLocked}
          toggleClosed={toggleClosed}
        />
      </>
    );
  }
// }

const mapStateToProps = state => {
  return {
    open: state.open,
    unlocked: state.unlocked,
  }
}

export default connect(mapStateToProps, { setOpen, setLocked })(Dashboard)