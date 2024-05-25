<template>
   <div>
      <MyNavbar />
      <div class="background-image">
         <div class="contPwd">
            <div class="cont_ba_opcitiy">
               <h2>Créer un nouveau mot de passe</h2>
               <form @submit.prevent="resetPassword">
                  <div class="mb-3">
                     <input type="password" class="custom-input" v-model="newPassword" id="newPass"
                        placeholder="Nouveau mot de passe" required>
                  </div>
                  <button type="submit" class="btnPwd">Enregistrer</button>
               </form>
            </div>
         </div>
      </div>
   </div>
</template>


<script>
import axios from 'axios';

export default {
   data() {
      return {
         newPassword: '',
         token: this.$route.params.token  // Use params to get the token from the URL
      };
   },
   methods: {
      async resetPassword() {
         try {
            await axios.post('http://localhost:3000/auth/reset-password', {
               token: this.token,
               newPassword: this.newPassword
            });
            alert('Your password has been successfully reset');
         } catch (error) {
            alert('Failed to reset password');
         }
      }
   }
};
</script>
<style scoped>
.custom-input {
   width: 100%;
   /* Adjusted for better mobile responsiveness */
   height: 40px;
   font-size: 1rem;
   padding:10px;
   border-radius: 10px;
   margin-top: 10px;
}

.btnPwd {
   width: 60%;
   /* Adjusted for better mobile responsiveness */
   height: 40px;
   font-size: 1rem;
   padding: 10px;
   border-radius: 10px;
   margin-top: 10px;
   background-color: #f9d211;
   border: none;
   color: #ffffff;
   cursor: pointer;
}

.background-image {
   display: flex;
   justify-content: center;
   align-items: center;
   height: 100vh;
   /* This makes sure that the container takes full viewport height */
   background: url("../Assets/connexion2.jpg") no-repeat center center;
   background-size: cover;
}

.contPwd {
   width: 50%;
   /* Restricts the width of the container to refine alignment */
   min-width: 300px;
   /* Ensures that the form does not become too narrow on smaller screens */
}

.cont_ba_opcitiy {
   background-color: rgba(79, 122, 145, 0.55);
   padding: 20px;
   border-radius: 10px;
   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
   /* Adds subtle shadow for better layering */
   display: flex;
   flex-direction: column;
   align-items: center;
   /* Centers the children (form elements) horizontally */
}
.cont_ba_opcitiy h2 {
   color: #ffffff;
   /* Sets the text color of the h2 element to white */
}
</style>
