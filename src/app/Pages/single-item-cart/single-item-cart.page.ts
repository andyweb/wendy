import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UtilService } from 'src/app/Services/util.service';

@Component({
  selector: 'app-single-item-cart',
  templateUrl: './single-item-cart.page.html',
  styleUrls: ['./single-item-cart.page.scss'],
})
export class SingleItemCartPage implements OnInit {
  @Input('data') data: any;  
  constructor(private modalCtrl: ModalController,private util:UtilService) {}
  description:any='';
  local:any=[];
  ngOnInit() {
  
    this.data.qty = 1;
    console.log('product data', this.data);
  }

  ionViewWillEnter(){
    this.local=JSON.parse(localStorage.getItem("cartData")) ? JSON.parse(localStorage.getItem("cartData")):[];

    this.local.forEach((element)=>{
      if(element.art==this.data.art){
        this.data.qty=element.qty;
        this.data.note=element.note;
      }
    })
  }

  doCreate() {
    let checkIfPushable = false;
    if (this.data.available == 1 && this.data.price !== null) {
      if (this.local.length == 0) {
        this.data.total = this.data.qty * this.data.price;
        this.local.push(this.data);
        localStorage.setItem('cartData', JSON.stringify(this.local));
      } else {
        this.local.forEach((element) => {
          if (element.art === this.data.art) {
            element.qty = this.data.qty;
            element.total = element.qty * element.price;
            checkIfPushable = true;
          }
        });
      }
      if (!checkIfPushable) {
        this.local.forEach((element) => {
          if (element.art !== this.data.art) {
            this.data.total = this.data.qty * this.data.price;
            this.local.push(this.data);
          }
        });
      }

      localStorage.setItem(
        'cartData',
        JSON.stringify([...new Set(this.local)])
      );

      this.modalCtrl.dismiss(this.local);
    } else {
      this.util.presentToast('This Product is no longer available');
      this.modalCtrl.dismiss(true);
    }
  }

  productClick(from, item) {
    if (item.available == 1) {
      if (from == 'add') {
        item.qty += 1;
      } else {
        if (item.qty !== 1) {
          item.qty -= 1;
        }
      }
      item.note = this.description;
      item.total = item.qty * item.price;
      console.log('dataUpdatation', this.data);
    } else {
      this.util.presentToast('This product is no longer available');
    }
  }
}
