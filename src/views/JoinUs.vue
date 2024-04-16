<template>
  <div class="page">
    <div class="container" id="container">
      <div class="form-container sign-up-container">
        <form @submit.prevent="submitForm">
          <h1>Create Account</h1>
          <div class="social-container">
            <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
            <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
            <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
          </div>
          <span>or use your email for registration</span>
          <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                <input type="text" class="form-control" v-model="nom" placeholder="Nom" required/>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <input type="text" class="form-control" v-model="prenom" placeholder="Prénom" required/>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <input type="email" class="form-control" v-model="email" placeholder="Email" required/>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <input type="tel" class="form-control" v-model="telephone" placeholder="Téléphone" required/>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <select class="form-select" v-model="profil" placeholder="Profil" required>
                  <option selected disabled>Choisissez votre profil*</option>
                  <option value="agent">Agent immobilier</option>
                  <option value="acquereur">Acquéreur</option>
                  <option value="locataire">Locataire</option>
                  <option value="proprietaire">Propriétaire</option>
                </select>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <input type="password" class="form-control" v-model="password"  placeholder="Password" required/>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <input type="password" class="form-control" v-model="repeatPassword" placeholder="Repeat Password" required/>
              </div>
            </div>
          </div>
          <button type="submit">Sign Up</button>
        </form>
      </div>
      
      <div class="form-container sign-in-container">
        <form @submit.prevent="loginUser">
          <h1>Sign in</h1>
          <div class="social-container">
            <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
            <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
            <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
          </div>
          <span>or use your account</span>
          <input type="email" v-model="email" placeholder="Email" required />
          <input type="password" v-model="password" placeholder="Password" required/>
          <router-link to="/resetpwd">Forgot your password?</router-link>
          <button type="submit">Sign In</button>
        </form>
      </div>
      
      <div class="overlay-container">
        <div class="overlay">
          <div class="overlay-panel overlay-left">
            <h1>Welcome Back!</h1>
            <p>To keep connected with us please login with your personal info</p>
            <button class="ghost" @click="toggleSignIn">Sign In</button>
          </div>
          <div class="overlay-panel overlay-right">
            <h1>Hello, Friend!</h1>
            <p>Enter your personal details and start journey with us</p>
            <button class="ghost" @click="toggleSignUp">Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import FormData from 'form-data';

export default {
  data() {
    return {
      nom: '',
      prenom: '',
      email: '',
      password: '',
      repeatPassword: '',
      telephone: '',
      profil: '',
    };
  },
  
  methods: {
    toggleSignUp() {
      const container = document.getElementById('container');
      container.classList.add("right-panel-active");
    },
    toggleSignIn() {
      const container = document.getElementById('container');
      container.classList.remove("right-panel-active");
    },
    loginUser() {
      axios.post('http://localhost:3000/auth/login', {
          email: this.email,
          password: this.password
        })
        .then(response => {
          console.log(response.data);
          // Handle server response
        })
        .catch(error => {
          console.error(error);
          // Handle request errors
        });
    },
    async submitForm() {
      const formData = new FormData();
      formData.append('nom', this.nom);
      formData.append('prenom', this.prenom);
      formData.append('email', this.email);
      formData.append('password', this.password);
      formData.append('repeatPassword', this.repeatPassword);
      formData.append('telephone', this.telephone);
      formData.append('profil', this.profil);
      
      try {
        const response = await axios.post('http://localhost:3000/auth/register', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        
        console.log(response.data);
        
        // Réinitialiser les champs du formulaire après l'envoi
        this.nom = '';
        this.prenom = '';
        this.email = '';
        this.password = '';
        this.repeatPassword = '';
        this.telephone = '';
        this.profil = '';
      } catch (error) {
        console.error(error);
      }
    },
  },
}
</script>

<style scoped>
/* Ajoutez vos styles CSS personnalisés ici */
</style>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,800');

* {
	box-sizing: border-box;
}


.page {
  background: #FFFFFF;
  display: flex;
  flex-direction: column;
  height: calc(100% - 40px);
  position: absolute;
  place-content: center;
  width: calc(100% - 40px);
}
h1 {
	font-weight: bold;
	margin: 0;
}

h2 {
	text-align: center;
}

p {
	font-size: 14px;
	font-weight: 100;
	line-height: 20px;
	letter-spacing: 0.5px;
	margin: 20px 0 30px;
}

span {
	font-size: 12px;
}

a {
	color: #333;
	font-size: 14px;
	text-decoration: none;
	margin: 15px 0;
}

button {
	border-radius: 20px;
	border: 1px solid #FCCA07;
	background-color: #FCCA07;
	color: #FFFFFF;
	font-size: 12px;
	font-weight: bold;
	padding: 12px 45px;
	letter-spacing: 1px;
	text-transform: uppercase;
	transition: transform 80ms ease-in;
}

button:active {
	transform: scale(0.95);
}

button:focus {
	outline: none;
}

button.ghost {
	background-color: transparent;
	border-color: #FFFFFF;
}

form {
	background-color: #FFFFFF;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	padding: 0 50px;
	height: 100%;
	text-align: center;
}

input {
	background-color: #eee;
	border: none;
	padding: 12px 15px;
	margin: 8px 0;
	width: 100%;
}

.container {
	background-color: #FFFFFF;
	border-radius: 10px;
 
	overflow: hidden;
	width: 768px;
	max-width: 100%;
	min-height: 480px;
}

.form-container {
	position: absolute;
	top: 0;
	height: 100%;
	transition: all 0.6s ease-in-out;
}

.sign-in-container {
	left: 0;
	width: 50%;
	z-index: 2;
}

.container.right-panel-active .sign-in-container {
	transform: translateX(100%);
}

.sign-up-container {
	left: 0;
	width: 50%;
	opacity: 0;
	z-index: 1;
}

.container.right-panel-active .sign-up-container {
	transform: translateX(100%);
	opacity: 1;
	z-index: 5;
	animation: show 0.6s;
}

@keyframes show {
	0%, 49.99% {
		opacity: 0;
		z-index: 1;
	}
	
	50%, 100% {
		opacity: 1;
		z-index: 5;
	}
}

.overlay-container {
	position: absolute;
	top: 0;
	left: 50%;
	width: 50%;
	height: 100%;
	overflow: hidden;
	transition: transform 0.6s ease-in-out;
	z-index: 100;
}

.container.right-panel-active .overlay-container{
	transform: translateX(-100%);
}

.overlay {
	background: #FCCA07;
	background: -webkit-linear-gradient(to right, #FCCA07, #FCCA07);
	background: linear-gradient(to right, #FCCA07, #FCCA07);
	background-repeat: no-repeat;
	background-size: cover;
	background-position: 0 0;
	color: #FFFFFF;
	position: relative;
	left: -100%;
	height: 100%;
	width: 200%;
  transform: translateX(0);
	transition: transform 0.6s ease-in-out;
}

.container.right-panel-active .overlay {
  transform: translateX(50%);
}

.overlay-panel {
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	padding: 0 40px;
	text-align: center;
	top: 0;
	height: 100%;
	width: 50%;
	transform: translateX(0);
	transition: transform 0.6s ease-in-out;
}

.overlay-left {
	transform: translateX(-20%);
}

.container.right-panel-active .overlay-left {
	transform: translateX(0);
}

.overlay-right {
	right: 0;
	transform: translateX(0);
}

.container.right-panel-active .overlay-right {
	transform: translateX(20%);
}

.social-container {
	margin: 20px 0;
}

.social-container a {
	border: 1px solid #DDDDDD;
	border-radius: 50%;
	display: inline-flex;
	justify-content: center;
	align-items: center;
	margin: 0 5px;
	height: 40px;
	width: 40px;
}







.form-group {
  margin-bottom: 20px;
}

.form-control {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
}

.form-select {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
}

.btn {
  padding: 10px 20px;
  background-color: #FCCA07;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.btn:hover {
  background-color: #FCCA07;
}

.form-check-input {
  margin-right: 10px;
}
</style>