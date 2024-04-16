<template>
    <div class="card">
      <div class="row page-message-container">
        <p class="message"></p>
      </div>
      <div class="row">
        <h1 class="page-title">Mot de passe oublié ?</h1>
        <p class="subhead">Entrez l'adresse e-mail que vous utilisez pour vous connecter et nous vous enverrons par e-mail un lien permettant de réinitialiser votre mot de passe. Si vous ne recevez pas cet e-mail, vérifiez votre dossier de courrier indésirable.</p>
  
        <form action="#">
          <input type="hidden" name="csrf_token" value="" class="js-csrf-input" aria-hidden="true">
          
          <div class="field">
            <label for="email">Adresse e-mail</label>
            <input type="email" class="input" name="email" id="email" value="" autocomplete="email" autocapitalize="off" autocorrect="off">
          </div>
  
          <label tabindex="0" role="button" class="medium primary btn" id="forgot-password-cta">
            <span class="btn-text">Réinitialiser le mot de passe</span>
            <!-- Supprimez l'attribut "id" redondant -->
            <input class="_hidden" type="submit" value="">
          </label>
        </form>            
      </div>
    </div>
  </template>
  