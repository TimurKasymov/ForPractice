import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { FormGroup, FormControl, Validators,  FormsModule, ReactiveFormsModule, FormBuilder  } from "@angular/forms";

@Component({
  selector: 'app-car-wash-point',
  templateUrl: './car-wash-point.component.html',
  styleUrls: ['./car-wash-point.component.scss'],
})
export class CarWashPointComponent {

  items = [];

  constructor(

      private formBuilder: FormBuilder) {   }

  addToCart(product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  checkoutForm = this.formBuilder.group({
    name: '',
    address: '',
    employeesName: '',
    employeesYearsOld: '',
    carWashPointType: '',
  });


  onSubmit(): void {
    this.addToCart(this.checkoutForm.value);
    this.checkoutForm.reset();
  }
}
