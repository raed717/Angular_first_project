import { Component, OnInit } from '@angular/core';
import { Product } from '../model/Product';


@Component({
  selector: 'app-Product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product: Product[]=[];

  constructor() { }

  ngOnInit(): void {
    this.product = [
      {id: '1', title: "T-shirt 1", price: 18, quantity: 0, like: 0, picture:"https://media.everlane.com/image/upload/c_fill,dpr_2,f_auto,g_face:center,q_auto,w_auto/v1/i/8b27bc0e_969f.jpg"},
      {id: '2', title: "T-shirt 2", price: 21, quantity: 10, like: 0, picture:"https://www.mydesignation.com/wp-content/uploads/2019/08/malayali-tshirt-mydesignation-mockup-image-latest-golden-.jpg"},
      {id: '3', title: "T-shirt 3", price: 16, quantity: 8, like: 0, picture:"https://monadicbd.com/wp-content/uploads/2021/09/NETWORKER-BAHIRE-B-min.jpg"}

    ]
  }

  Buy(id:string) {

    this.product.map(
      (product)=>(product.id.match(id)&&product.quantity>0)&&product.quantity--);
  }

  Like(id:string) {
    this.product.map((product)=>product.id.match(id)&&product.like++);
  }

}
