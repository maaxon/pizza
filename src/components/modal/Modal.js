import React, {useState} from 'react';
import PropTypes from 'prop-types';
<<<<<<< HEAD
import pizza from '../../misc/pizza.png';
import ketchup from './ketchup.png';

import Portal from '../portal/Portal.jsx';
import {Times} from '@styled-icons/fa-solid/Times'
=======
import pizza from './pizza_1.jpg';
import ketchup from './ketchup.png';

import Portal from '../portal/Portal.jsx';

>>>>>>> origin/main


import './Modal.css';

<<<<<<< HEAD
function Modal ({title, isOpen,onClose, children,})  {
=======
function Modal ({title, isOpen, onCancel, onSubmit, children,})  {
>>>>>>> origin/main

  return (
    <>
      { isOpen &&
          <Portal>
          <div className="modalOverlay">
            <div className="modalWindow">
              <div className="modalBody">
<<<<<<< HEAD
                <Times onClick={onClose} className='close'/>
=======
>>>>>>> origin/main
                <img src={pizza} />
                <div className='rightSide'>
                  <h1>Maks Loh Classic</h1>
                  <p>Соус, оливки, член, мука, cum, shit, Denis geniy</p>
                  <Select containerClass={'select'}>
                    <p name={'big'} >big</p>
                    <p name={'mid'}>mid</p>
                    <p name={'small'}>small</p>
                  </Select>
                  <h1 className='addText'>Adds</h1>
                  <div className='container'>
                      <div className="adds">
                        <img className='addImg' src={ketchup} />
                        <p className='textpodaddom'>Ketchup</p>
                      </div>
                    <div className="adds">
                      <img className='addImg' src={ketchup} />
                      <p className='textpodaddom'>Mayo</p>
                    </div>
                    <div className="adds">
                      <img className='addImg' src={ketchup} />
                      <p className='textpodaddom'>300$</p>
                    </div>
                    <div className="adds">
                      <img className='addImg' src={ketchup} />
                      <p className='textpodaddom'>Shit</p>
                    </div>
                    <div className="adds">
                      <img className='addImg' src={ketchup} />
                      <p className='textpodaddom'>Cum</p>
                    </div>
                    <div className="adds">
                      <img className='addImg' src={ketchup} />
                      <p className='textpodaddom'>Billie</p>
                    </div>
                  </div>
                  <button className='buttonBuy'><b>Buy Cum 300$</b></button>
                </div>
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

