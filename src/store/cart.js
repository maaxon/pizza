import {makeAutoObservable} from "mobx";
import modal from "./modal";
import loadsh from "loadsh";
import {diff} from "../misc/helpers"

class Cart{
    cart=[
    ]
    price=0

    constructor(){
        makeAutoObservable(this)
    }

    addToCart(prod,adds){
        let product = loadsh.clone(prod)
        let added=false
        product.price = this.countItemPrice(product.price,1)
        product = {...product,adds,qty:1}
        this.cart.forEach((item)=>{
            if (diff(adds, item.adds) && product.id === item.id) {
                this.cart[this.cart.indexOf(item)].qty +=1
                added=true
            }
        })
        if (!added) this.cart=[...this.cart,product]


    }


    countItemPrice(price,qty){
        modal.cur_adds.map((id)=>{
            price += modal.adds.find(add => add.id === id).price
        })
        return price*qty
    }
    //increment quantity of selected by id cart item
    increment(id){
        this.cart.find(item=>item.id === id).qty += 1
    }
    //decrement quantity of selected by id cart item
    decrement(id){
        let item = this.cart.find(item=>item.id === id)
        if(item.qty -1 < 1){
            this.deleteItem(item)
        }else{
            item.qty -= 1
        }
    }

    deleteItem(item){
        this.cart = this.cart.filter((item,index)=>index !== this.cart.indexOf(item))
    }
    //count total price of items in cart
    get countPrice(){
        let price = 0
        this.cart.map(item=> price += item.price * item.qty)
        return price
    }
}

export default new Cart();

