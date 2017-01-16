import { Component, OnInit } from '@angular/core';
import { Router,
         NavigationExtras } from '@angular/router';
import { FormBuilder,
         FormControl,
         FormGroup,
         Validators} from '@angular/forms';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  public isShowAlert: boolean = false;
  public alertMessage: string = '';

  public constructor(public authService: AuthService,
                     public router: Router,
                     public fb: FormBuilder) {
    this.loginForm = fb.group({
      email: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(30), this.emailValidator]],
      password: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(11)]],
      remember: [false]
    });
  }

  public emailValidator(control: FormControl): {[key: string]: boolean} {
    const value = control.value || '';
    const valid = value.match(/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i);
    return valid ? null : {incorrectMailFormat: true}
  }

  public hideAlert(): void {
    this.isShowAlert = false;
  }

  public login(): void{
    let email:string = this.loginForm.value.email;
    let password:string = this.loginForm.value.password;

    this.authService.login(email, password).subscribe(() => {
      if (this.authService.isLoggedIn) {
        // Get the redirect URL from our auth service
        // If no redirect has been set, use the default
        let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/dashboard';

        // Set our navigation extras object
        // that passes on our global query params and fragment
        let navigationExtras: NavigationExtras = {
          preserveQueryParams: true,
          preserveFragment: true
        };

        // Redirect the user
        this.router.navigate([redirect], navigationExtras);
      } else {
        this.isShowAlert = true;
        this.alertMessage = 'User or password incorrect.';
      }
    });
  }

  public logout():void {
    this.authService.logout();
  }

  public submit():void {
    this.hideAlert();
    
    if(this.loginForm.valid){
      this.login();
    } else {
      this.isShowAlert = true;
      this.alertMessage = 'Login form invalid.';
    }
  }

  ngOnInit() {
  }

}
