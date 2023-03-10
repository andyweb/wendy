import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.page.html',
  styleUrls: ['./rating.page.scss'],
})
export class RatingPage implements OnInit {
  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {}

  doClosaeModal() {
    this.modalCtrl.dismiss();
  }
}
