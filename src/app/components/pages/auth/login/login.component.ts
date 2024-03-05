import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users/users.service';
import {take} from 'rxjs';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public formulario;

  constructor(private userSvc: UsersService, private formBuilder: FormBuilder, private router:Router) {

    this.formulario = this.formBuilder.group({
      // username: '',
      // password: ''
      username: ['', [  
        Validators.required,
        Validators.pattern('^[^\\s|&#~]+$'),
        Validators.maxLength(20)
      ]],
      password: ['', [
        Validators.required, 
        Validators.pattern('^[^\\s]+$'),
        Validators.maxLength(20)
      ]],
    });

   }

  ngOnInit(): void {
    // this.formulario = this.fb.group({
    //   username: ['', Validators.required],
    //   password: ['', Validators.required],
    // });
  }

  onSubmit(customerData:any): void {
    console.log(customerData);
    this.userSvc
    .login(customerData)
    .pipe(take(1))
    .subscribe(
      (res: any) => {
      console.log('Response->', res);
      Swal.fire('Hey user!', 'autenticación exitosa!', 'success');
      localStorage.setItem('token',res.token)  
      this.router.navigate(['/home'])
      },
      (error: any) => {
        // Swal('Registro exitoso...', 'error', 'error');
        Swal.fire('Hey user!', 'Ha ocurrido un error con las credenciales o la conexión!', 'error');
        console.log('Error:', error);
        // Handle error here, such as displaying an error message to the user
      }
    )
  }

}
