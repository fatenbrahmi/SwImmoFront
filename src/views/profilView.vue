<template>
<div class="container">
    <div class="row gutters">
    <div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
        <div class="card h-100">
            <div class="card-body">
                <div class="account-settings">
                    <div class="user-profile">
                       
                        <div class="user-avatar position-relative">

    <input type="file" id="profile-image" accept="image/*" style="display: none;">
    <label for="profile-image">
      
        <i class="bi bi-pencil-square position-absolute" style="right: 5px; bottom: 5px;"></i>
        
        <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Maxwell Admin" id="profile-preview" class="img-fluid">
       
    </label>
</div>
                        <!-- MODIFABLE -->
                        <h5 class="user-name" contenteditable="true">Yuki Hayashi</h5>
                        <!-- Champ d'édition pour l'e-mail -->
                        <h6 class="user-email" contenteditable="true">yuki@Maxwell.com</h6>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>


<div class="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
<div class="card h-100">
	<div class="card-body">
		<div class="row gutters">
			<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
				<h6 class="mb-2 text-warning">Personal Details</h6>
			</div>
			<div class="row">
            <div class="col-md-6">
              <div class="form-group">
                <input type="text" class="form-control" placeholder="Nom" required/>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <input type="text" class="form-control"  placeholder="Prénom" required/>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <input type="email" class="form-control"  placeholder="Email" required/>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <input type="tel" class="form-control"  placeholder="Téléphone" required/>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <select class="form-select"  placeholder="Profil" required>
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
                <input type="password" class="form-control"   placeholder="Password" required/>
              </div>
            </div>
            </div>
			
		</div>
		<br><br><br>
		<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
    <div class="text-right">
        <button type="button" id="submit" name="submit" class="btn btn-secondary">Cancel</button>
        <!-- Ajoutez une classe "btn-margin" pour définir la marge -->
        <button type="button" id="submit" name="submit" class="btn btn-warning btn-margin">Update</button>
    </div>
</div>
	</div>
</div>
</div>
</div>
</div>

</template>
<script>
export default {
  mounted() {
    
    document.getElementById('profile-image').addEventListener('change', function(event) {
      // Récupérer le fichier sélectionné
      const file = event.target.files[0];

      // Créer un objet URL pour la prévisualisation de l'image
      const imageURL = URL.createObjectURL(file);

      // Mettre à jour l'attribut src de l'élément d'image avec la nouvelle image
      document.getElementById('profile-preview').src = imageURL;
    });
  }
}
</script>
<style>
.btn-margin {
    margin-left: 10px; /* Ajoute une marge de 10px à gauche du bouton */
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
body {
    margin: 0;
    padding-top: 40px;
    color: #2e323c;
    background: #f5f6fa;
    position: relative;
    height: 100%;
}
.account-settings .user-profile {
    margin: 0 0 1rem 0;
    padding-bottom: 1rem;
    text-align: center;
}
.account-settings .user-profile .user-avatar {
    margin: 0 0 1rem 0;
}
.account-settings .user-profile .user-avatar img {
    width: 90px;
    height: 90px;
    -webkit-border-radius: 100px;
    -moz-border-radius: 100px;
    border-radius: 100px;
}
.account-settings .user-profile h5.user-name {
    margin: 0 0 0.5rem 0;
}
.account-settings .user-profile h6.user-email {
    margin: 0;
    font-size: 0.8rem;
    font-weight: 400;
    color: #9fa8b9;
}
.account-settings .about {
    margin: 2rem 0 0 0;
    text-align: center;
}
.account-settings .about h5 {
    margin: 0 0 15px 0;
    color: #007ae1;
}
.account-settings .about p {
    font-size: 0.825rem;
}
.form-control {
    border: 1px solid #cfd1d8;
    -webkit-border-radius: 2px;
    -moz-border-radius: 2px;
    border-radius: 2px;
    font-size: .825rem;
    background: #ffffff;
    color: #2e323c;
}

.card {
    background: #ffffff;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    border: 0;
    margin-bottom: 1rem;
}
</style>