import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import this for ngClass
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule, // Add this line
  ],
})
export class HomeModule { }
