import { Injectable } from '@angular/core';
import { AlertController, LoadingController, ModalController, NavController, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UtilService {
  isLoading: boolean;
  constructor(
    private loadingController: LoadingController,
    private toastController: ToastController,
    public nav: NavController,
    public modal: ModalController,
    public alert: AlertController
  ) { }

  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000,
      mode: "ios"
    });
    toast.present();
  }

  async alerwt(msg) {
    const al = await this.alert.create({
      message: msg
    });
    return await al.present();
  }
  async startLoad() {
    this.isLoading = true;
    return await this.loadingController
      .create({
        message: "Please Wait...",
        mode: "md",
        cssClass: "my-custom-class",
        animated: true
      })
      .then((a) => {
        a.present().then(() => {
          // this.dismissLoader();//remove in future
          if (!this.isLoading) {
            a.dismiss().then(() => { });
          }
        });
      });
  }
  async dismissLoader() {
    this.isLoading = false;
    return await this.loadingController.dismiss();
  }
}
