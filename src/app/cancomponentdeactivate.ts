import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { Observable } from "rxjs";
import { Promise } from "q";
import { AppHomeComponent } from './home/home.component';

/*export interface CanComponentDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}*/

@Injectable()
export class DeactivateGuardService implements  CanDeactivate<AppHomeComponent>{

  canDeactivate(component: AppHomeComponent) {
    return component.canDeactivate ? component.canDeactivate() : true;
  }
}