import { Component } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ConfirmationDialogLeavePage } from '../confirmation-dialog-leavepage/confirmation-dialog-leavepage.component';
import { HostListener } from "@angular/core";


import { Observable, Subject } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/first';

@Component({
  selector: 'home-component',
  templateUrl: './home.component.html'
})
export class AppHomeComponent {    
    @HostListener("window:beforeunload", ["$event"]) unloadHandler(event: Event) {
        if(!this.loading){
            event.returnValue = false;
        }
    }   
    
  title = 'HOME COMPONENT';  
  loading: boolean = false;
  //some behaviour that change the loading value
  
  constructor(public dialog: MatDialog) {
      
  }
  
  canDeactivate() : Observable<boolean> | boolean {      
      if (this.loading) {
          alert('no, you wont navigate anywhere');
          console.log('no, you wont navigate anywhere');
          return false;
      } else {    
          
         // return true;
          let data = {};
          let dialogRef = this.dialog.open(ConfirmationDialogLeavePage, {
              width: '400px',
              height: 'auto',
              data: data
          });       
          return dialogRef.afterClosed().map(result => {
              if(!result.answer){
                  
              }
              return result.answer;
          }).first();
          
         // return true;   
      }

  }
}
