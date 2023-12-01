import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { UserLoginRequest } from 'src/app/models/User.model';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginPageComponent implements OnInit{
    formData = {} as UserLoginRequest;
    form!: FormGroup;

    constructor(private formBuilder: FormBuilder, private authenticationService: AuthenticationService,
        private router: Router){}

    ngOnInit():void {
        this.initForm();
    }

    initForm(): void {
        this.form = this.formBuilder.group({
            email: [this.formData.email, Validators.required],
            password: [this.formData.password, Validators.required]
        })
    }

    onSubmit():void {
        const request: UserLoginRequest = {
            email: this.form.controls['email'].value,
            password: this.form.controls['password'].value
        }

        this.authenticationService.authenticate(request).subscribe((res) => {
            if(res){
                this.router.navigate(["/", "products"])
                localStorage.setItem('jwt', res.token);
            }
        });
    }
 }
