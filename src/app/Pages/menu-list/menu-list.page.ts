import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { ApiService } from 'src/app/Services/api.service';
import { UtilService } from 'src/app/Services/util.service';
import { SingleItemCartPage } from '../single-item-cart/single-item-cart.page';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.page.html',
  styleUrls: ['./menu-list.page.scss'],
})
export class MenuListPage implements OnInit {

  


  slideOpts = {
    speed: 400,
    spaceBetween: 13,
    slidesPerView: 'auto',
  };
  
  productsData: any;
  isCheckOut: boolean = false;
  local:any=[];
  total:any;
  idcate:any;
  categoryData: any;
  
  constructor(
    private navCtrl: NavController,
    private modalCtrl: ModalController,
    private api: ApiService,
    private util:UtilService,
    private route: ActivatedRoute
  ) {
    this.getProductList();
  }

  ngOnInit() {

   
    
  }
  ionViewWillEnter() {
    
    this.getCategory();
    this.total = 0;
    this.local = JSON.parse(localStorage.getItem('cartData'))
      ? JSON.parse(localStorage.getItem('cartData'))
      : [];
    this.local = [...new Set(this.local)];
    this.local.forEach((element) => {
      console.log(element.total);
      this.total += parseFloat(element.total);
      //this.total = this.total.toFixed(2);
    });

    let data = [...new Set(this.local)];
    localStorage.setItem('originalCartData', JSON.stringify(data));
  }


  getCategory() {
    this.util.startLoad();
    this.api.getData('getcatalogbyplace?placeId=WENDY||Sede2||1').subscribe(
      (res: any) => {
        console.log('response data', res);
        if (res.status == 'OK') {
          this.categoryData = res.data[0].values;
          this.util.dismissLoader();
        }else{
          this.util.dismissLoader();
        }
      },
      (err) => {
        console.log('err', err);
        this.util.dismissLoader();
      }
    );
  }

  
  


  getProductList() {
    //this.util.startLoad();
    this.idcate = this.route.snapshot.paramMap.get('cate');
    this.api
      .getData(
        'getproductsbyplace?placeId=WENDY%7C%7CSede2%7C%7C1&categoryId=' +this.idcate
      )
      .subscribe(
        (res: any) => {
          console.log('product list', res);
          if (res.status == 'OK') {
            this.productsData = res.data[0].values;
            this.util.dismissLoader();
          }else{
            this.util.dismissLoader();
          }
        },
        (err) => {
          console.log('err', err);
          this.util.dismissLoader();
        }
      );
  }

 


  getProductList2(data) {
    
    this.util.startLoad();
    this.idcate = data;
   
   // this.idcate = this.route.snapshot.paramMap.get('cate');
    this.api
      .getData(
        'getproductsbyplace?placeId=WENDY%7C%7CSede2%7C%7C1&categoryId=' +this.idcate
      )
      .subscribe(
        (res: any) => {
          console.log('product list', res);
          if (res.status == 'OK') {
            this.productsData = res.data[0].values;
            this.util.dismissLoader();
          }else{
            this.util.dismissLoader();
          }
        },
        (err) => {
          console.log('err', err);
          this.util.dismissLoader();
        }
      );
  }

  
  async doAddToCart(product) {
    const modal = await this.modalCtrl.create({
      component: SingleItemCartPage,
      cssClass: 'single-item-cart-modal',
      backdropDismiss: false,
      componentProps: { data: product },
    });
    modal.onDidDismiss().then((r) => {
      this.total = 0;

      this.local = JSON.parse(localStorage.getItem('cartData'))
        ? JSON.parse(localStorage.getItem('cartData'))
        : [];
      this.local = [...new Set(this.local)];
      console.log('local data', this.local);
      this.local.forEach((element) => {
        console.log('dismiss total', element.total);
        this.total += parseFloat(element.total);
        //this.total = this.total.toFixed(2);
      });
      let data = [...new Set(this.local)];
      localStorage.setItem('originalCartData', JSON.stringify(data));
    });
    return await modal.present();
  }

  goToOrderCart() {
    this.navCtrl.navigateForward('/cart-confirm');
  }
}
