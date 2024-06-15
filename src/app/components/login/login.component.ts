import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    loginForm?: any;

    constructor(private fb: FormBuilder, private authService : AuthService, private router: Router) {}

    ngOnInit(): void {
        this.loginForm = this.fb.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    onSubmit(): void {
        console.log("this.loginForm.valid", this.loginForm)
        if (this.loginForm.valid) {
            var username = this.loginForm.get('username').value;
            var password = this.loginForm.get('password').value;

            if (this.authService.login(username, password)) {
                this.router.navigate(['/product-list']); // Navigate to the ProductListComponent upon successful login
            } else {
            }
        }
    }
}
