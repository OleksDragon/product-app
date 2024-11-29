import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Product } from '../../models/product';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input() product!: Product;
  showImage = false;

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  showDescription(description: string): void {
    alert(description);
  }
}
