import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'menu-code',
    pathMatch: 'full',
  },
  {
    path: 'menu-code',
    loadChildren: () =>
      import('./Pages/menu-code/menu-code.module').then(
        (m) => m.MenuCodePageModule
      ),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./Pages/home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'menu-list/:cate',
    loadChildren: () => import('./Pages/menu-list/menu-list.module').then( m => m.MenuListPageModule)
  },
  {
    path: 'single-item-cart',
    loadChildren: () => import('./Pages/single-item-cart/single-item-cart.module').then( m => m.SingleItemCartPageModule)
  },
  {
    path: 'cart-confirm',
    loadChildren: () => import('./Pages/cart-confirm/cart-confirm.module').then( m => m.CartConfirmPageModule)
  },
  {
    path: 'payment',
    loadChildren: () => import('./Pages/payment/payment.module').then( m => m.PaymentPageModule)
  },
  {
    path: 'order-steps',
    loadChildren: () => import('./Pages/order-steps/order-steps.module').then( m => m.OrderStepsPageModule)
  },
  {
    path: 'rating',
    loadChildren: () => import('./Pages/rating/rating.module').then( m => m.RatingPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./Pages/profile/profile.module').then( m => m.ProfilePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
