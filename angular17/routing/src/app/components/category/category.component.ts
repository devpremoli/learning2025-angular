import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {

  categoryId: string | null = '';
  products: { id: number; name: string }[] = [];

  productData: Record<string, { id: number; name: string }[]> = {
    electronics: [
      { id: 101, name: 'TV' },
      { id: 102, name: 'Laptop' },
    ],
    kitchen: [
      { id: 201, name: 'Blender' },
      { id: 202, name: 'Toaster' },
    ],
  };

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.paramMap.subscribe(params => {
      this.categoryId = params.get('categoryId');
      this.products = this.productData[this.categoryId || ''] || [];
    });
  }

  navigateToProduct(productId: number, usePromo: boolean) {
    const currentQueryParams = this.route.snapshot.queryParams;
    const newQueryParams = usePromo ? { ...currentQueryParams, ref: 'promo', discount: 10 } : { ...currentQueryParams };
    const queryParams = usePromo ? { ref: 'promo', discount: 10 } : {}; 
    this.router.navigate(['/category', this.categoryId, 'product', productId],
      { queryParams: newQueryParams }
    );
  }

  applyFilter(sortBy: string) {
    this.router.navigate([], {
      queryParams: { sort: sortBy },
      queryParamsHandling: 'merge' // ✅ Merge with existing query params
    });
  }
}
