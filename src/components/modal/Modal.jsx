import React from 'react';
import PropTypes from 'prop-types';
import maks_loh from './pizza_1.jpg';

import Portal from '../portal/Portal.jsx';



import './Modal.css';

const Modal = ({
  title, isOpen, onCancel, onSubmit, children,
}) => {

  return (
    <>
      { isOpen &&
          <Portal>
          <div className="modalOverlay">
            <div className="modalWindow">
              <div className="modalBody">
                <img src={maks_loh} />
                <div className='rightSide'>
                  <h1>Maks Loh Classic</h1>
                  <p>Соус, оливки, член, мука, cum, shit, Denis geniy</p>
                  <div className="select">
                    <p>big</p>
                    <p>mid</p>
                    <p className="active">small</p>
                  </div>
                </div>
              </div>
              <div className="modalFooter">
                <button onClick={onCancel}>Cancel</button>
                <button onClick={onSubmit}>Submit</button>
              </div>
            </div>
          </div>
          </Portal>
      }
    </>
  );
};

Modal.propTypes = {
  title: PropTypes.string,
  isOpen: PropTypes.bool,
  children: PropTypes.node,
};

Modal.defaultProps = {
  title: 'Modal title',
  isOpen: false,
  onCancel: () => {},
  onSubmit: () => {},
  children: null,
};

export default Modal;
