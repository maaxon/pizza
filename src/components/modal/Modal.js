import React, {useEffect,useState} from 'react';
import modal from "../../store/modal"
import cart from "../../store/cart"
import {observer} from 'mobx-react-lite'
import Portal from '../portal/Portal.js';
import {Times} from '@styled-icons/fa-solid/Times'
import classes from './modal.module.scss';
import Select from '../Select/Select'
import Add from '../Add/Add'


function Modal({isOpen,onClose, children,}) {

  const product = modal.product

  useEffect(()=>{
    modal.countPrice()
  },[modal.cur_adds])

  function addToCart(){
    cart.addToCart(product,modal.cur_adds)
    modal.unsetAdds()
  }


  function renderAdds(){
      //if product hasn`t adds returns empty container
      if (product.adds.length < 1) return <div className={classes.container}></div>

      return(
       <>
         <Select containerClass={classes.select}>
           <p name={'big'} >big</p>
           <p name={'mid'}>mid</p>
           <p name={'small'}>small</p>
         </Select>
       <h1 className={classes.addText}>Adds</h1>
         <div className={classes.container}>
          { product.adds.map(id=>{
            return(
              <Add key={`add${id}`} className={classes.adds} img={modal.adds[id].img} id={id}/>
            )
          })}
        </div>
       </>
   )


  }

  return (
    <>
      { isOpen &&
        <Portal>
          <div className={classes.modalOverlay}>
            <div className={classes.modalWindow}>
              <div className={classes.modalBody}>
                <Times onClick={onClose} className={classes.close}/>
                <img className={classes.pizza} src={product.img} />
                <div className={classes.rightSide}>
                  <h1>{product.title}</h1>
                  <p className={classes.disc}>{product.description}</p>
                  {renderAdds()}
                  <button onClick={addToCart} className={classes.buttonBuy}><b>Add to cart for {modal.price}$</b></button>
                  </div>
                </div>
              </div>
            </div>
          </Portal>
      }
    </>
  )
}

export default observer(Modal)


