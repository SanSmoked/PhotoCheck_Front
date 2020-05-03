import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  /* loginForm = new FormGroup({
     email: new FormControl(''),
     password: new FormControl('')
   });
 */
  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', Validators.required]
    });
  }

  public getError(controlName: string): string {
    let error = '';
    const control = this.loginForm.get(controlName);
    if (control.touched && control.errors != null) {
      switch (controlName) {
        case 'email':
          if (control.errors.required) {
            //error = 'El email es requerido'
            error = 'The email is required';
          } else {
            //error = 'el valor ingresado no corresponde a un email'
            error = 'The input value is not valid for an email';
          }
          break;
        case 'password':
          error = 'The password is required';
          break;

        default:
          break;
      }
    }
    return error;
  }

  login(data) {
    console.log(data);
    this.router.navigate(['/patient']);
  }

}
