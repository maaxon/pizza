import {makeAutoObservable} from "mobx";
import loadsh from "loadsh"
import ketchup from '../misc/ketchup.png';
import cheese from '../misc/cheese.png'
import ham from '../misc/ham.png'
import cheeseBoard from '../misc/cheeseBoard.png'
import olives from '../misc/olives.png'
import tomato from '../misc/tomato.png'
import shampinion from '../misc/shampinion.png'

class Modal{
    adds=[
        {id:0,name:"ketchup",price:0,img:ketchup},
        {id:1,name:"cheese",price:10,img:cheese},
        {id:2,name:"cheese board",price:10,img:cheeseBoard},
        {id:3,name:"shampinion",price:10,img:shampinion},
        {id:4,name:"ham",price:10,img:ham},
        {id:5,name:"tomato",price:10,img:tomato},
        {id:6,name:"olives",price:10,img:olives},

    ]
    price=0
    product={}
    cur_adds=[]

    constructor(){
        makeAutoObservable(this)
    }

    setProduct(product) {
        this.product = loadsh.clone(product)
        this.price = loadsh.clone(this.product.price)
    }
    //puts selected additive to additives array
    onAdd(id){
        if(this.cur_adds.indexOf(id)>-1){
           this.cur_adds = this.cur_adds.filter((add)=>add!==id)
        }else{
            this.cur_adds =[...this.cur_adds,id]
        }
    }

    countPrice(){
        this.price = this.product.price
        this.cur_adds.map((id)=>{
            this.price += this.adds.find(add => add.id === id).price
        })
    }

    unsetModal(){
        this.product= {}
        this.cur_adds=[]
        this.price =0
    }

    unsetAdds(){
        this.cur_adds = []
    }
}

export default new Modal();