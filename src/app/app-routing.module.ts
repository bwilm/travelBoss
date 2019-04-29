import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccomodationComponent } from 'src/app/accomodation/accomodation.component';
import { CelebrationsComponent } from 'src/app/celebrations/celebrations.component';
import { FoodAndBeverageComponent } from 'src/app/food-and-beverage/food-and-beverage';
import { LifestyleComponent } from 'src/app/lifestyle/lifestyle.component';
import { WeddingsComponent } from 'src/app/weddings/weddings.component';
import { OffersComponent } from 'src/app/offers/offers.component';
import { SigninComponent } from 'src/app/auth/signin/signin.component';
import { SignupComponent } from 'src/app/auth/signup/signup.component';
import { HomeComponent } from 'src/app/home/home.component';

const routes: Routes = [
  { path: 'accomodation', component: AccomodationComponent},
  { path: 'celebrations', component: CelebrationsComponent},
  { path: 'food-and-beverage', component: FoodAndBeverageComponent},
  { path: 'lifestyle', component: LifestyleComponent},
  { path: 'weddings', component: WeddingsComponent},
  { path: 'offers', component: OffersComponent},
  { path: 'signin', component: SigninComponent},
  { path: 'signup', component: SignupComponent},
  { path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
