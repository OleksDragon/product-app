import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';
import { ProductItemComponent } from '../product-item/product-item.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductItemComponent, FormsModule, CommonModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products: Product[] = [];
  newProduct: Product = {
    id: 0,
    typeProduct: '',
    vendor: '',
    model: '',
    price: 0,
    img: '',
    count: 0,
    vendorEmail: '',
    description: ''
  };

  constructor(private productService: ProductService) {
    this.products = this.productService.getProducts();
  }

  addProduct(): void {
    if (this.newProduct.typeProduct && this.newProduct.vendor && this.newProduct.price > 100 && this.newProduct.count > 0) {
      this.newProduct.id = Date.now();
      this.productService.addProduct(this.newProduct);
      this.products = this.productService.getProducts();
      this.newProduct = { id: 0, typeProduct: '', vendor: '', model: '', price: 0, img: '', count: 0, vendorEmail: '', description: '' };
    } else {
      alert('Заполните все обязательные поля и убедитесь, что цена больше 100 и количество больше 0');
    }
  }

  deleteProduct(productId: number): void {
    this.productService.deleteProduct(productId);
    this.products = this.productService.getProducts();
  }
}
