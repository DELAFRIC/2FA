import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
// import { Auth, signInWithPopup, GoogleAuthProvider } from '@angular/fire/auth';
import { Keyboard } from '@capacitor/keyboard';// pour le clavier

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [IonicModule, FormsModule, RouterModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})

export class LoginComponent implements OnInit {

  formulairesLogin!: FormGroup;
  showPassword = false;
  isKeyboardOpen = false; // pour le clavier
  
    constructor(private formBuilder: FormBuilder, private router: Router/*, private auth: Auth*/) {}


    ngOnInit() {

      this.formulairesLogin = this.formBuilder.group({
        email: ['',[Validators.required, Validators.email]],
        password: ['',[Validators.required/*, Validators.minLength(6)*/]]
      });


      // Écouteur d'événement pour le clavier
      Keyboard.addListener('keyboardWillShow', () => {
      this.isKeyboardOpen = true;
       });
      Keyboard.addListener('keyboardWillHide', () => {
      this.isKeyboardOpen = false;
       });
    }
  get email() {
    return this.formulairesLogin.get('email');
  }

  get password() {
    return this.formulairesLogin.get('password');
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  onSubmit() {
    console.log(this.formulairesLogin.value);
  }

  goToInscription() {
    this.router.navigateByUrl('/inscription');
  }
}

  // *********************************************************************************************************************
  // email = '';
  // password = '';
  // showPassword = false;

  // constructor(private router: Router/*, private auth: Auth*/) {}

  // togglePasswordVisibility() {
  //   this.showPassword = !this.showPassword;
  // }

  // login() {
  //   console.log('Connexion avec email :', this.email);
  //   console.log('Mot de passe :', this.password);
  //   // Auth classique à implémenter ici
  // }

  // goToInscription() {
  //   this.router.navigateByUrl('/inscription');
  // }

  // async signInWithGoogle() {
  //   const provider = new GoogleAuthProvider();
  //   try {
  //     const result = await signInWithPopup(this.auth, provider);
  //     console.log('Utilisateur connecté avec Google :', result.user);
  //     // Rediriger après connexion
  //     this.router.navigateByUrl('/dashboard');
  //   } catch (error) {
  //     console.error('Erreur Google Auth :', error);
  //   }
  // }(click)="signInWithGoogle()"
// }
