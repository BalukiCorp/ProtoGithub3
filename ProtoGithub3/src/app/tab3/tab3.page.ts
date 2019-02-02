import { Component, ElementRef, ViewChild } from '@angular/core';
//import {AngularFireStorage} from '@angular/fire/storage';
import {finalize} from 'rxjs/operators';
import {Observable} from 'rxjs/Observable';
import { pipe } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, NavParams } from '@ionic/angular';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  event_name: string = '';
    manager_name: string = '';
    category: string = '';
    hour: string = '';
    ubication: string = '';
    date: string = '';
    description: string = '';
    final_date: string = '';
    final_hour: string = '';
    value: string = '';
    photoURL: string= '';
    today = Date.now();
    register = [];
    myForm: FormGroup;
    public orderForm:any;

    
  
}
