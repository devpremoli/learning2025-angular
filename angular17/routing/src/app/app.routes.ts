import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CategoryComponent } from './components/category/category.component';
import { authGuard } from './guards/auth.guard';


export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { 
        path: 'admin',
        loadComponent: () => import('./components/admin/admin.component')
          .then(m => {
            console.log('AdminComponent Lazy Loaded');
            return m.AdminComponent;
          }),
        canActivate: [authGuard]
    },
    // Dynamic category route (Must be AFTER `/admin`)
    { path: ':categoryId', component: CategoryComponent },
    { 
        path: 'category/:categoryId/product/:id', 
        loadComponent: () => import('./components/product/product.component').then(m => m.ProductComponent)
    },
    { path: '**', component: NotFoundComponent } // 404 route
];

