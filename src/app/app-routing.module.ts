import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import { AppHomeComponent } from './home/home.component';
import { AppContactComponent } from './contact/contact.component';
import { CanDeactivate } from "@angular/router";
import { ActivatedRouteSnapshot } from "@angular/router";
import { RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";

import { DeactivateGuardService } from './cancomponentdeactivate';

const routes: Routes = [
    	{
        	path: '',
	        component: AppHomeComponent,
    	}
	    ,{
        	path: 'home',
	        component: AppHomeComponent,
	        canDeactivate: [DeactivateGuardService]
    	}
	    ,{
            path: 'contact',
            component: AppContactComponent            
        }	    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
