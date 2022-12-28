import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { RatingPage } from '../rating/rating.page';

@Component({
  selector: 'app-order-steps',
  templateUrl: './order-steps.page.html',
  styleUrls: ['./order-steps.page.scss'],
})
export class OrderStepsPage implements OnInit {
  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {
    this.openRatingModal();
  }

  async openRatingModal() {
    const modal = await this.modalCtrl.create({
      component: RatingPage,
      cssClass: 'add-rating-modal',
      backdropDismiss: false,
    });
    modal.onDidDismiss().then((r) => {
      if (r.data) {
        // this.isCheckOut = true;
      }
    });
    return await modal.present();
  }
}
