import { Component, CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';

@Component({
  selector: 'app-card-carousel',
  standalone: true,
  imports: [],
  templateUrl: './card-carousel.component.html',
  styleUrl: './card-carousel.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CardCarouselComponent {

  breakpoints: object = {
    0: {
      direction: 'vertical',
      slidesPerView: '1.5'
    },
    700: {
      direction: 'horizontal',
      slidesPerView: '1.5'
    },
    900: {
      direction: 'horizontal',
      slidesPerView: '2.1'
    },
    1200: {
      direction: 'horizontal',
      slidesPerView: '2.5'
    },
    1500: {
      direction: 'horizontal',
      slidesPerView: '3.5'
    }
  }

  readonly dialog = inject(MatDialog);

  openDialog() {
    this.dialog.open(ModalTemplate)
  }
}

@Component({
  selector: 'app-modal-dialog',
  templateUrl: './modal/modal-template.html',
  styleUrl: './modal/modal-template.css',
  standalone: true,
  imports: [
    MatIcon,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
  ],
})
export class ModalTemplate {
  readonly dialogRef = inject(MatDialogRef<ModalTemplate>);

}
