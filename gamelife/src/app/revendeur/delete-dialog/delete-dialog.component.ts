import {Component} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {
  MatDialogActions,
  MatDialogClose, MatDialogContainer,
  MatDialogContent,
  MatDialogRef
} from "@angular/material/dialog";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatIcon} from "@angular/material/icon";
import {MatInput} from "@angular/material/input";
import { ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-delete-dialog',
  standalone: true,
  imports: [
    MatButton,
    MatDialogActions,
    MatDialogContent,
    MatFormField,
    MatIcon,
    MatInput,
    MatLabel,
    ReactiveFormsModule,
    MatDialogClose,
    MatDialogContainer
  ],
  templateUrl: './delete-dialog.component.html',
  styleUrl: './delete-dialog.component.scss'
})
export class DeleteDialogComponent {



  constructor(
    public dialogRef: MatDialogRef<DeleteDialogComponent>,
  ) { }
  ngOnInit(): void {
  }
  confirmDeletion(): void {
    // This method closes the dialog and sends back a true value
    this.dialogRef.close(true);
  }
  onNoClick(): void {
    this.dialogRef.close();
  }


}
