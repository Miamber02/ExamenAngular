import { inject } from '@angular/core';
import { CanActivateFn, CanMatchFn, Route } from '@angular/router';
import { AutenticationService } from '../services/autentication.service';

export const authGuard: CanMatchFn = (route, state) => {
    const authService = inject(AutenticationService);
    return authService.getAutenticationByToken();
};
