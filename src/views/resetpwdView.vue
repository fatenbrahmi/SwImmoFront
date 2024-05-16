<template>
<div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalToggleLabel"> Renseignez votre adresse e-mail et nous vous enverrons tout de suite la marche à suivre.</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
       
        <div class="mb-3">
          <label for="email" class="form-label">Adresse e-mail</label>
          <input type="email" class="custom-input" id="email"  placeholder="Email" required>
        </div>

      </div>
      <div class="modal-footer">
        <button class="btn btn-warning" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" data-bs-dismiss="modal">Rénitialiser Le Mot de Passe</button>
      </div>
    </div>
  </div>
</div>

<a class="btn btn-warning" data-bs-toggle="modal" href="#exampleModalToggle" role="button">Rénitialiser Le Mot de Passe</a>
</template>