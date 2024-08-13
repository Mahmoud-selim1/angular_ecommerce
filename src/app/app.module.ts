import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './main/home/home.component';
import { ProductsComponent } from './main/products/products.component';
import { BrandComponent } from './main/brand/brand.component';
import { SubCategoriesComponent } from './main/sub-categories/sub-categories.component';
import { CategoryComponent } from './main/category/category.component';
import { StaticSubcategoriesComponent } from './main/static-subcategories/static-subcategories.component';
import { SubProductComponent } from './sub-product/sub-product.component';
@NgModule({
  declarations: [AppComponent, NavbarComponent, FooterComponent, HomeComponent, ProductsComponent, BrandComponent, SubCategoriesComponent, CategoryComponent, StaticSubcategoriesComponent, SubProductComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
