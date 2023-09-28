import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import {Router} from '@angular/router';
export const authenticationGuard: CanActivateFn = (route, state) => {

  const router: Router= inject(Router);

  if(sessionStorage.getItem('status')!="active")
  {
    alert('please login to continue..');
    router.navigateByUrl('/login');
    return false ;
  }
  else
  {
    return true;
  }
};
