<template>
   <AdminNavbar />
   <SideBar />
   <div id="content" class="content-container">
      <div class="row flex-lg-nowrap">

         <div class="col">
            <div class="row">
               <div class="col mb-3">
                  <div class="card">
                     <div class="card-body">
                        <div class="e-profile">
                           <div class="row">
                              <div class="col-12 col-sm-auto mb-3">
                                 <div class="mx-auto" style="width: 140px;">
                                    <div class="d-flex justify-content-center align-items-center rounded"
                                       style="height: 140px; background-color: rgb(233, 236, 239);">
                                       <span style="color: rgb(166, 168, 170); font: bold 8pt Arial;">140x140</span>
                                    </div>
                                 </div>
                              </div>
                              <div class="col d-flex flex-column flex-sm-row justify-content-between mb-3">
                                 <div class="text-center text-sm-left mb-2 mb-sm-0">
                                    <h4 class="pt-sm-2 pb-1 mb-0 text-nowrap">Administrateur</h4>
                                    <div class="mt-2">
                                       <button class="btn btn-primary" type="button">
                                          <i class="fa fa-fw fa-camera"></i>
                                          <span>Changer Photo</span>
                                       </button>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <ul class="nav nav-tabs">
                              <li class="nav-item"><a href="" class="active nav-link">Paramètres</a></li>
                           </ul>
                           <div class="tab-content pt-3">
                              <div class="tab-pane active">
                                 <form class="form" novalidate="">
                                    <div class="row">
                                       <div class="col">
                                          <div class="row">
                                             <div class="col">
                                                <div class="form-group">
                                                   <label>Nom</label>
                                                   <input class="form-control" type="text" name="name"
                                                      placeholder="Votre nom">
                                                </div>
                                             </div>
                                             <div class="col">
                                                <div class="form-group">
                                                   <label>Prénom</label>
                                                   <input class="form-control" type="text" name="username"
                                                      placeholder="Votre prénom">
                                                </div>
                                             </div>
                                          </div>
                                          <div class="row">
                                             <div class="col">
                                                <div class="form-group">
                                                   <label>Email</label>
                                                   <input class="form-control" type="text"
                                                      placeholder="utilisateur@example.com">
                                                </div>
                                             </div>
                                          </div>
                                          <div class="row">
                                             <div class="col">
                                                <div class="form-group">
                                                   <label>Téléphone</label>
                                                   <input class="form-control" type="text" placeholder="xxxxxxxxx">
                                                </div>
                                             </div>
                                          </div>
                                          <div class="row">
                                             <div class="col">
                                                <div class="form-group">
                                                   <label>Ville</label>
                                                   <input class="form-control" type="text" placeholder="Ville">
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                    <br>

                                    <div class="row">
                                       <div class="col-12 col-sm-6 mb-3">
                                          <div class="mb-2"><b>Changer Mot De Passe</b></div>
                                          <div class="row">
                                             <div class="col">
                                                <div class="form-group">
                                                   <label>Mot de passe actuel</label>
                                                   <input class="form-control" type="password" placeholder="••••••••••">
                                                </div>
                                             </div>
                                          </div>
                                          <div class="row">
                                             <div class="col">
                                                <div class="form-group">
                                                   <label>Nouveau mot de passe</label>
                                                   <input class="form-control" type="password" placeholder="••••••••••">
                                                </div>
                                             </div>
                                          </div>
                                          <div the="row">
                                             <div class="col">
                                                <div class="form-group">
                                                   <label>Confirmer <span class="d-none d-xl-inline">Mot de
                                                         passe</span></label>
                                                   <input class="form-control" type="password" placeholder="••••••••••">
                                                </div>
                                             </div>
                                          </div>
                                       </div>

                                    </div>
                                    <div class="row">
                                       <div class="col d-flex justify-content-end">
                                          <button class="btn btn-primary" type="submit">Modifier</button>
                                       </div>
                                    </div>
                                 </form>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>

</template>

<script>
import AdminNavbar from '@/components/AdminNavbar.vue';
import SideBar from '@/components/Sidebar/SideBar.vue';
import { sidebarWidth } from '@/components/Sidebar/state'

export default {
   components: { AdminNavbar, SideBar },
   setup() {
      return { sidebarWidth }
   },
   name: 'AdminProfile',
  
   methods: {
      cancelUpdate() {
         // Add your code to handle cancellation
      },
      updateProfile() {
         // Add your code to handle profile update
      }
   }

};
</script>
<style scoped>
body {
   margin-top: 20px;
   background: #f8f8f8;
}
.content-container {
   margin-left: 300px;
   /* Ajustez cette valeur en fonction de la largeur de votre sidebar */
   margin-top: 0;
   margin-right: 150px;
}

/* Additional CSS for left-aligning form labels */
.form-group>label {
   text-align: left;
   display: block;
}
</style>