import React, {useState} from 'react';
import PropTypes from 'prop-types';
import maks_loh from './pizza_1.jpg';

import Portal from '../portal/Portal.jsx';



import './Modal.css';

function Modal ({title, isOpen, onCancel, onSubmit, children,})  {

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
                  <Select containerClass={'select'}>
                    <p name={'big'} >big</p>
                    <p name={'mid'}>mid</p>
                    <p name={'small'}>small</p>
                  </Select>
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

function Select({children,containerClass}){
  const [active,setState] = useState(children[0].props.name);

  return(
  <div className={containerClass}>
    {children.map((child)=>{
      if(active === child.props.name) return <child.type {...child.props} key={child.props.name} className={`${child.props.className} active`} onClick={()=>{setState(child.props.name)}} />
       return <child.type {...child.props} key={child.props.name} className={`${child.props.className}`} onClick={()=>{setState(child.props.name)}} />
    })}
  </div>
)
}


export default Modal;

