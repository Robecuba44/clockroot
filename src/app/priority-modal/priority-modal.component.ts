import { Component, inject } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-priority-modal',
  templateUrl: './priority-modal.component.html',
  styleUrls: ['./priority-modal.component.scss'],
  standalone: false,
})
export class PriorityModalComponent {
  private modalCtrl = inject(ModalController);

  public img = 'fall';

  public buttonsAndImages = [
    {
      name: 'Fall',
      map: 'fall',
    },
    {
      name: 'Winter',
      map: 'winter',
    },
    {
      name: 'Lake',
      map: 'lake',
    },
    {
      name: 'Mountain',
      map: 'mountain',
    },
  ];

  changeMap(img) {
    this.img = img;
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }
}
