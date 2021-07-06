import {makeAutoObservable} from "mobx";
import pizza from '../misc/pizza.png'
import desert from "../misc/desert.png"
import saladTab from "../misc/saladTab.png"
import drinks from '../misc/drinks.png'
import pizza1 from '../misc/pizza1.png'
import pizza2 from '../misc/pizza2.png'
import pizza3 from '../misc/pizza3.png'
import pizza4 from '../misc/pizza4.png'
import pizza5 from '../misc/pizza5.png'
import pizza6 from '../misc/pizza6.png'
import salad1 from '../misc/salad1.png'
import salad2 from '../misc/salad2.png'
import salad3 from '../misc/salad3.png'
import salad4 from '../misc/salad4.png'
import salad5 from '../misc/salad5.png'
import drink1 from '../misc/drink1.png'
import drink2 from '../misc/drink2.png'
import drink3 from '../misc/drink3.png'
import drink4 from '../misc/drink4.png'
import drink5 from '../misc/drink5.png'
import desert1 from '../misc/desert1.png'
import desert2 from '../misc/desert2.png'
import desert3 from '../misc/desert3.png'
import desert4 from '../misc/desert4.png'


class Main{

    slidesCount=this.setSlidesCount();

    categories = [
        {id:1,name:"pizza",img:pizza},
        {id:2,name:"drinks",img:drinks},
        {id:3,name:"desserts",img:desert},
        {id:4,name:"salads",img:saladTab}
    ]

    products=[
        {id:1,img:pizza1,title:'Margarita',subtitle:'Italian herbs, tomato sauce, tomatoes, mozzarella',description:'Italian herbs, tomato sauce, tomatoes, mozzarella',price:20,category:'pizza',adds:[1,2,3]},
        {id:2,img:pizza2,title:'Kapricheza',subtitle:'Chicken, tomatoes, mozzarella, ham',description:'Chicken, tomatoes, mozzarella, ham',price:20,category:'pizza',adds:[1]},
        {id:3,img:pizza3,title:'Ham and mushrooms',subtitle:'Tomato sauce, mozzarella, ham, mushrooms',description:'Tomato sauce, mozzarella, ham, mushrooms',price:25,category:'pizza',adds:[1,2,4,5,6]},
        {id:4,img:pizza4,title:'ROMAN',subtitle:'Lorem ipsum dolor sit amet',description:'Lorem ipsum dolor sit amet',price:20,category:'pizza',adds:[1,2]},
        {id:5,img:pizza5,title:'SPICY WITH SALAMI',subtitle:'Lorem ipsum dolor sit amet',description:'Lorem ipsum dolor sit amet',price:30,category:'pizza',adds:[1,2]},
        {id:6,img:pizza6,title:'Pepperoni',subtitle:'mozzarella cheese, salami, paper',description:'mozzarella cheese, salami, paper',price:15,category:'pizza',adds:[1,2]},
        {id:7,img:desert4,title:'napoleon',subtitle:'Lorem ipsum dolor sit amet',description:'Lorem ipsum dolor sit amet',price:10,category:'desserts',adds:[]},
        {id:8,img:salad1,title:'Greek salad',subtitle:'Lorem ipsum dolor sit amet',description:'Lorem ipsum dolor sit amet',price:15,category:'salads',adds:[]},
        {id:9,img:salad2,title:'caesar salad',subtitle:'Lorem ipsum dolor sit amet',description:'Lorem ipsum dolor sit amet',price:10,category:'salads',adds:[]},
        {id:10,img:salad3,title:'olivier salad',subtitle:'Lorem ipsum dolor sit amet',description:'Lorem ipsum dolor sit amet',price:10,category:'salads',adds:[]},
        {id:11,img:salad4,title:'Italian salad',subtitle:'Lorem ipsum dolor sit amet',description:'Lorem ipsum dolor sit amet',price:10,category:'salads',adds:[]},
        {id:12,img:salad5,title:'Mimosa salad',subtitle:'Lorem ipsum dolor sit amet',description:'Lorem ipsum dolor sit amet',price:10,category:'salads',adds:[]},
        {id:13,img:drink1,title:'Orange juice',subtitle:'Lorem ipsum dolor sit amet',description:'Lorem ipsum dolor sit amet',price:10,category:'drinks',adds:[]},
        {id:14,img:drink2,title:'Coffee',subtitle:'Lorem ipsum dolor sit amet',description:'Lorem ipsum dolor sit amet',price:5,category:'drinks',adds:[]},
        {id:15,img:drink3,title:'Coca Cola',subtitle:'Lorem ipsum dolor sit amet',description:'Lorem ipsum dolor sit amet',price:5,category:'drinks',adds:[]},
        {id:16,img:drink4,title:'Sprite',subtitle:'Lorem ipsum dolor sit amet',description:'Lorem ipsum dolor sit amet',price:5,category:'drinks',adds:[]},
        {id:17,img:drink5,title:'Tea',subtitle:'Lorem ipsum dolor sit amet',description:'Lorem ipsum dolor sit amet',price:7,category:'drinks',adds:[]},
        {id:18,img:desert1,title:'cupcake',subtitle:'Lorem ipsum dolor sit amet',description:'Lorem ipsum dolor sit amet',price:10,category:'desserts',adds:[]},
        {id:19,img:desert2,title:'pie',subtitle:'Lorem ipsum dolor sit amet',description:'Lorem ipsum dolor sit amet',price:8,category:'desserts',adds:[]},
        {id:20,img:desert3,title:'cake',subtitle:'Lorem ipsum dolor sit amet',description:'Lorem ipsum dolor sit amet',price:15,category:'desserts',adds:[]},
    ]

    constructor(){
        makeAutoObservable(this)
    }
    //sets the number of slides depending on the size of the window
    setSlidesCount(){
        const width = window.screen.width
        if(width<=576){
            this.slidesCount=1
        }
        if(width<=1100 && width >576){
            this.slidesCount=2
        }
        if (width>1100){
            this.slidesCount=3
        }
    }


    findByCategory(category){
        return this.products.filter(product=>product.category===category)
    }
}

export default new Main();