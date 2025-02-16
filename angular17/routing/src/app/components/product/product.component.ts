import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  categoryId: string | null = '';
  productId: string | null = '';
  ref: string | null = null;
  discount: number | null = null;

  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe(params => {
      this.categoryId = params.get('categoryId'); // Get categoryId from URL
      this.productId = params.get('id'); // Get "id" from URL
    });

    this.route.queryParamMap.subscribe(params => {
      this.ref = params.get('ref') || null; // Extract "ref" parameter, default to null if not provided
      const discountValue = params.get('discount');
      this.discount = discountValue !== null ? Number(discountValue) : null; // Extract "discount" parameter, default to null if missing
    });
  }
}
