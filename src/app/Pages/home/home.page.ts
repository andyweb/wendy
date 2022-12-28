import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ApiService } from 'src/app/Services/api.service';
import { UtilService } from 'src/app/Services/util.service';
import { ProfilePage } from '../profile/profile.page';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  
  slideOpts = {
    speed: 400,
    spaceBetween: 10,
    slidesPerView: 'auto',
  };
  optionList: any = [
    {
      name: 'Offerte',
      image: '../../../assets/images/offer.jpg',
    },
    // {
    //   name: 'Bevande',
    //   image: '../../../assets/images/Bevande.png',
    // },
    // {
    //   name: 'Pizza',
    //   image: '../../../assets/images/pizza-menu.png',
    // },
    // {
    //   name: 'Primi',
    //   image: '../../../assets/images/primi.png',
    // },
  ];
  categoryData: any;
  baseUrl: any = 'https://orione.infoservicenet.it/Wendy/back/';
  constructor(public modalController: ModalController,private navctrl: NavController, private api: ApiService,private util:UtilService) {
    
  }

  ionViewWillEnter(){
    this.getCategory();
  }

  ngOnInit() {}

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

  goToItemList(cate) {
    this.navctrl.navigateForward(['/menu-list', cate]);
  }

  async profileInfo() {

     
      const modal = await this.modalController.create({
        component: ProfilePage,
        cssClass: 'trading-class',
        breakpoints: [0, 0.8],
        initialBreakpoint: 0.8
        
      });
    
      modal.onDidDismiss()
      .then((data) => {
        const segnale= data
        //console.log(segnale)
        
    });
      return await modal.present();
    }

  
}
