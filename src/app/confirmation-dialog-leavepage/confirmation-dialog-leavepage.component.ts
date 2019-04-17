import { Component, Inject, ViewChild, ElementRef } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
    selector: 'confirmation-dialog-leavepage',
    templateUrl: 'confirmation-dialog-leavepage.html'
})

export class ConfirmationDialogLeavePage {
    constructor(public dialogRef: MatDialogRef<ConfirmationDialogLeavePage>, @Inject(MAT_DIALOG_DATA) private data: any) {        
    }
}
