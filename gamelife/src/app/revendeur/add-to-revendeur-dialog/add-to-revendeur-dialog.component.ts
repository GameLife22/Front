import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-to-revendeur-dialog',
  templateUrl: './add-to-revendeur-dialog.component.html',
  styleUrls: ['./add-to-revendeur-dialog.component.scss']
})
export class AddToRevendeurDialogComponent {
  form: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<AddToRevendeurDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.form = new FormGroup({
      stockSize: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
