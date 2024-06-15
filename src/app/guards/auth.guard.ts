import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanDeactivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { ProductRatingsComponent } from '../components/product-ratings/product-ratings.component';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate, CanActivateChild, CanDeactivate<ProductRatingsComponent>, CanLoad {

    constructor(private authService: AuthService, private router: Router) {}

    canActivate(): boolean {
        return this.checkAuth();
    }

    canActivateChild(): boolean {
        return this.checkAuth();
    }

    canDeactivate(component: ProductRatingsComponent): boolean {
        if (component.hasUnsavedChanges()) {
            return window.confirm('You have unsaved changes. Do you really want to leave?');
        }
        return true;
    }

    canLoad(): boolean {
        return this.checkAuth();
    }

    private checkAuth(): boolean {
        if (this.authService.isAuthenticatedUser()) {
            return true;
        } else {
            this.router.navigate(['/login']);
            return false;
        }
    }
}
