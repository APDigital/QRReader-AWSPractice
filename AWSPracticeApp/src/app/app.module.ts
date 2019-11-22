import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CompareProductsComponent } from './compare-products/compare-products.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes =[
  {path:'home', component: HomeComponent},
  {path:'compare', component:CompareProductsComponent},
  {path:'**', component :PageNotFoundComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CompareProductsComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(
      appRoutes,

      {enableTracing:true}
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
