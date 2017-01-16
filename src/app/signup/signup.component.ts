import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder,
         FormControl,
         FormGroup,
         Validators} from '@angular/forms';
import { AuthService } from 'app/shared/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public signupForm: FormGroup;

  public onClickTerms(event:Event):void {
    event.preventDefault();
  }

  public constructor(
    public router: Router,
    public fb: FormBuilder,
    public authService:AuthService)
  {

      this.signupForm = this.fb.group({
        nameGroup: fb.group({
          first: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
          last: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
        }),
        email: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(30), this.emailValidator]],
        passwordGroup: this.fb.group({
          password: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(11)]],
          pconfirm: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(11)]],
        }, {
          validator: this.equalValidator,
        })
      });
  }

  public emailValidator(control: FormControl): {[key: string]: boolean} {
    const value = control.value || '';
    const valid = value.match(/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i);
    return valid ? null : {incorrectMailFormat: true}
  }

  public equalValidator({value}:FormGroup): {[key: string]: boolean} {
    const [first, ...rest] = Object.keys(value || {});
    const valid = rest.every(v => value[v] === value[first])
    return valid ? null : {notEqual: true}
  }

  ngOnInit() {
  }

  public submit():void {
    if(this.signupForm.valid){
      let user:User = {
        firstname: this.signupForm.value.nameGroup.first,
        lastname: this.signupForm.value.nameGroup.last,
        email: this.signupForm.value.email,
        avatarUrl: 'assets/img/user2-160x160.jpg',
        creationDate: 'Jan. 2017',
        preferredLang: 'en',
        roleName: 'Web Developer',
        password: this.signupForm.value.passwordGroup.password
      }
      this.authService.pushUser(user);
      this.router.navigate(['/']);
    }
  }

}
