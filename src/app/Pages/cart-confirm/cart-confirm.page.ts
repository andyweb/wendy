import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ApiService } from 'src/app/Services/api.service';
import { UtilService } from 'src/app/Services/util.service';
@Component({
  selector: 'app-cart-confirm',
  templateUrl: './cart-confirm.page.html',
  styleUrls: ['./cart-confirm.page.scss'],
})
export class CartConfirmPage implements OnInit {
  constructor(private navCtrl: NavController,private api: ApiService,private util:UtilService) {}
  local:any=[];
  total:any=0;
  ngOnInit() {}

  goToConfirm() {
    this.onPressCartConfirm()
    // this.navCtrl.navigateForward('/payment');
  }

  cartUpdate(from,item){
    this.total=0
    if(from=='add'){
      item.qty+=1;
      item.total = item.qty * item.price
    }else{
      if(item.qty!==1){
        item.qty-=1;
        item.total = item.qty * item.price
      }
    }

    
    console.log(this.local);
    if(this.local.length==0){
      this.local.push(item);
      localStorage.setItem("cartData",JSON.stringify(this.local))
    }else{
      this.local.forEach(element => {                    
        if(element.art===item.art){
          console.log("if match");
          
          element.qty = item.qty
          element.total = element.qty*element.price
          // checkIfPushable=true
        }
      });
    }
    // if(!checkIfPushable){
    //   this.local.forEach((element)=>{
    //     if(element.art!==this.data.art){
    //       this.local.push(this.data);
    //     }
    //   })
    // }
    
    localStorage.setItem("cartData",JSON.stringify([...new Set(this.local)]))
    
    
    this.local.forEach(element => {
      this.total+=element.total
    });
    
  }

  ionViewWillEnter(){
    this.local = localStorage.getItem("cartData") ? JSON.parse(localStorage.getItem("cartData")):[];

    this.local.forEach(element => {
      this.total+=element.total
      //this.total = this.total.toFixed(2)
    });
  }


  deleteProduct(item){
    this.total=0;
    this.local.forEach((element,index)=>{
      if(item.art==element.art){
        console.log("Found Index",index);
        this.local.splice(index,1)        ;
      }
    });

    localStorage.setItem("cartData",JSON.stringify(this.local));

    this.local.forEach((element)=>{
      this.total+=element.total
    })
  }


  onPressCartConfirm(){
    let data=[];
    this.local.forEach((element)=>{
      let pushableData={
        qta:element.qty,
        art:element.art
      };
      data.push(pushableData)
    })

   
   
    let apiPayload= [
      {
          "userId": "c1CLngI1bmYekLSJFSlzre91dAo2",
          "placeId": "WENDY||Sede2||1",
          "orderData": {
              "num": "21",
              "stato": "1",
              "pag": "1",
              "note": "Ordine per testare gli eventi",
              "righe": data
          }
      }
  ]

  this.util.startLoad();
  
  this.api.postData('setorderbyplace',apiPayload).subscribe(
    (res: any) => {
      
      console.log('response data', res); 
      alert(res);
      if (res.status == 'OK') {
        
        localStorage.removeItem("cartData");
        localStorage.removeItem("originalCartData")
        this.util.presentToast("Order Placed Successfully");
        this.navCtrl.navigateRoot("home");
        this.util.dismissLoader();
      }else{
        this.util.dismissLoader();
      }
    },
    (err) => {
      console.log('errore', err);
      this.util.dismissLoader();
    }
  );
  }
}
