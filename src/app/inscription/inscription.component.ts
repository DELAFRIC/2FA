import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inscription',
    standalone: true,
  imports: [IonicModule, CommonModule, ReactiveFormsModule],
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss'],
})

export class InscriptionComponent  implements OnInit {


  inscriptionForm!: FormGroup;

  constructor(private fb: FormBuilder, private route: Router) {}

  ngOnInit() {
    this.inscriptionForm = this.fb.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    });
  }

  onSubmit() {
    if(this.inscriptionForm.valid) {
      console.log(this.inscriptionForm.value);
      // ici tu peux envoyer les données au backend ou vers l'étape suivante (OTP par exemple)
    }
  }
//acceder a se connecter 
  goToLogin() {
   this.route.navigateByUrl('/login');
}

}
