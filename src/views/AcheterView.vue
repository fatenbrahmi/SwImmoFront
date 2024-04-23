<template>
    <div class="container-fluid bg-warning mb-4 wow fadeIn" data-wow-delay="0.1s" style="padding: 35px;">
        <div class="container">
            <div class="row g-2">
                <div class="col-md-10">
                    <div class="row g-2">
                        
                            <div class="col-md-4">
                                <select class="form-select border-0 py-3">
                                    <option selected>Location</option>
                                    <option value="1">Tunis</option>
                                    <option value="2">Sousse</option>
                                    <option value="3">Monastir</option>
                                    <option value="3">Sfax</option>
                                    <option value="3">Gabès</option>
                                    <option value="3">Bizerte</option>
                                    <option value="3">Kairouan</option>
                                    <option value="3">Gafsa</option>
                                    <option value="3">Nabeul</option>
                                    <option value="3">La Marsa</option>
                                    <option value="3">Kelibia</option>
                                    <option value="3">Le Kef</option>
                                    <option value="3">Zaghouan</option>
                                    <option value="3">Tozeur</option>
                                    <option value="3">Djebba</option>
                                    <option value="3">Zarzis</option>
                                    <option value="3">Mahdia</option>
                                    <option value="3">Tataouine</option>
                                    <option value="3">Mednine</option>
                                    <option value="3">Sidi Bouzied</option>
                                    <option value="3">Gasrin</option>
                                    <option value="3">Monastir</option>
                                    <option value="3">Monastir</option>
                                    <option value="3">Monastir</option>
                                    <option value="3">Monastir</option>
                                </select>
                            </div>
                        
                        <div class="col-md-4">
                            <input type="text" class="form-control border-0 py-3" placeholder="Budget Max(DT)">
                        </div>
                        <div class="col-md-4">
                            <input type="text" class="form-control border-0 py-3" placeholder="Superficie Max(m²)">
                        </div>
                        <div class="col-md-4">
                                <select class="form-select border-0 py-3">
                                    <option selected>Property Type</option>
                                    <option value="1">Departement</option>
                                    <option value="2">Villa</option>
                                    <option value="3">Maison</option>
                                    <option value="3">Terrain</option>
                                    <option value="3">Autres</option>
                                </select>
                        </div>


                        <div class="col-md-4">
                            <select class="form-select border-0 py-3">
                                <option selected>Nombre de chambres</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5+">5+</option>
                             </select>
                             </div>



                        <div class="col-md-4">
                            <input type="text" class="form-control border-0 py-3" placeholder="Superficie Min(m²)">
                        </div>
                    </div>
                </div>
                <div class="col-md-2">
                    <button class="btn btn-info border-0 w-100 py-3">Search</button>
                </div>
            </div>
        </div>
    </div>




    <div class="container-xxl py-5">
            <div class="container">
                <div class="row g-0 gx-5 align-items-end">
                    <div class="col-lg-6">
                        <div class="text-start mx-auto mb-5 wow slideInLeft" data-wow-delay="0.1s">
                            <h1 class="mb-3">Annonces</h1>
                           
                        </div>
                    </div>
                   
                </div>



                <div class="tab-content">
                    <div id="tab-1" class="tab-pane fade show p-0 active">
                        <div class="row g-4">
                            <div class="col-lg-4 col-md-6">
                                 <div class="property-item rounded overflow-hidden h-100">
                                     <div class="position-relative overflow-hidden">
                                         <a href=""><img class="img-fluid" src="../Assets/img/property-1.jpg" alt=""></a>
                                         <div class="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">À Vendre</div>
                                         <div class="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Appartment</div>
                                     </div>
                                <div class="p-4 pb-0">
                                     <h5 class="text-primary mb-3">299 000 DT</h5>
                                     <small class="flex-fill text-center"><i class="fa fa-ruler-combined text-primary me-2"></i>1000 m²</small>
                                     <p><i class="fa fa-map-marker-alt text-primary me-2"></i>Sfax 4.1 Km du centre</p>
                               </div>
                              <div class="d-flex justify-content-between align-items-center px-4 pb-3">
                                   <button type="button" class="btn btn-warning">Voir Annonce</button>
                                   <i class="bi bi-heart heart-icon"></i> <!-- Icône de cœur -->
                             </div>
                         </div>
     </div>





                            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                                <div class="property-item rounded overflow-hidden h-100">
                                    <div class="position-relative overflow-hidden">
                                        <a href=""><img class="img-fluid" src="../Assets/img/property-2.jpg" alt=""></a>
                                        <div class="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">À Vendre</div>
                                        <div class="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Villa</div>
                                    </div>
                                    <div class="p-4 pb-0">
                                        <h5 class="text-primary mb-3">299 000 DT</h5>
                                        <small class="flex-fill text-center "><i class="fa fa-ruler-combined text-primary me-2"></i>1000 m²</small>
                                        <p><i class="fa fa-map-marker-alt text-primary me-2"></i>Sfax 4.1 Km du centre</p>
                                    </div>
                                    <div class="d-flex justify-content-between align-items-center px-4 pb-3">
                                          <button type="button" class="btn btn-warning">Voir Annonce</button>
                                          <i class="bi bi-heart heart-icon"></i> <!-- Icône de cœur -->
                                    </div>
                                    <br>
                                </div>
                            </div>




                            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                                <div class="property-item rounded overflow-hidden h-100">
                                    <div class="position-relative overflow-hidden">
                                        <a href=""><img class="img-fluid" src="../Assets/terr.jpg" alt=""></a>
                                        <div class="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">À Vendre</div>
                                        <div class="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Terrain</div>
                                    </div>
                                    <div class="p-4 pb-0">
                                        <h5 class="text-primary mb-3">299 000 DT</h5>
                                        <small class="flex-fill text-center "><i class="fa fa-ruler-combined text-primary me-2"></i>1000 m²</small>
                                        <p><i class="fa fa-map-marker-alt text-primary me-2"></i>Sfax 4.1 Km du centre</p>
                                    </div>
                                    <div class="d-flex justify-content-between align-items-center px-4 pb-3">
                                          <button type="button" class="btn btn-warning">Voir Annonce</button>
                                          <i class="bi bi-heart heart-icon"></i> <!-- Icône de cœur -->
                                    </div>
                                   <br>
                                </div>
                            </div>




                            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                                <div class="property-item rounded overflow-hidden">
                                    <div class="position-relative overflow-hidden">
                                        <a href=""><img class="img-fluid" src="../Assets/img/property-4.jpg" alt=""></a>
                                        <div class="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">À Vendre</div>
                                        <div class="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Building</div>
                                    </div>
                                    <div class="p-4 pb-0">
                                        <h5 class="text-primary mb-3">299 000 DT</h5>
                                        <small class="flex-fill text-center "><i class="fa fa-ruler-combined text-primary me-2"></i>1000 m²</small>
                                        <p><i class="fa fa-map-marker-alt text-primary me-2"></i>Sfax 4.1 Km du centre</p>
                                    </div>
                                    <div class="d-flex justify-content-between align-items-center px-4 pb-3">
                                        <button type="button" class="btn btn-warning">Voir Annonce</button>
                                        <i class="bi bi-heart heart-icon"></i> <!-- Icône de cœur -->
                                     </div>
                                    <br>
                                </div>
                            </div>




                            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                                <div class="property-item rounded overflow-hidden">
                                    <div class="position-relative overflow-hidden">
                                        <a href=""><img class="img-fluid" src="../Assets/img/property-5.jpg" alt=""></a>
                                        <div class="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">À Vendre</div>
                                        <div class="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Home</div>
                                    </div>
                                    <div class="p-4 pb-0">
                                        <h5 class="text-primary mb-3">299 000 DT</h5>
                                        <small class="flex-fill text-center "><i class="fa fa-ruler-combined text-primary me-2"></i>1000 m²</small>
                                        <p><i class="fa fa-map-marker-alt text-primary me-2"></i>Sfax 4.1 Km du centre</p>
                                    </div>
                                    <div class="d-flex justify-content-between align-items-center px-4 pb-3">
                                        <button type="button" class="btn btn-warning">Voir Annonce</button>
                                         <i class="bi bi-heart heart-icon"></i> <!-- Icône de cœur -->
                                    </div>
                                    <br>
                                </div>
                            </div>



                            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                                <div class="property-item rounded overflow-hidden">
                                    <div class="position-relative overflow-hidden">
                                        <a href=""><img class="img-fluid" src="../Assets/img/property-6.jpg" alt=""></a>
                                        <div class="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">À Vendre</div>
                                        <div class="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Shop</div>
                                    </div>
                                    <div class="p-4 pb-0">
                                        <h5 class="text-primary mb-3">299 000 DT</h5>
                                        <small class="flex-fill text-center "><i class="fa fa-ruler-combined text-primary me-2"></i>1000 m²</small>
                                        <p><i class="fa fa-map-marker-alt text-primary me-2"></i>Sfax 4.1 Km du centre</p>
                                    </div>
                                    <div class="d-flex justify-content-between align-items-center px-4 pb-3">
                                         <button type="button" class="btn btn-warning">Voir Annonce</button>
                                         <i class="bi bi-heart heart-icon"></i> <!-- Icône de cœur -->
                                     </div>
                                    <br>
                                </div>
                            </div>



                            <div class="paging">
                                  <a href="#" class="disabled">Previous</a>
                                 <div class="page-square current">1</div>
                                 <div class="page-square"> <a href="/page/2">2</a></div>
                                 <div class="page-square"><a href="/page/3">3</a></div>
                                 <div class="page-square"><a href="/page/4">4</a></div>
                                 <div class="page-square"><a href="/page/5">5</a></div>       
                                 <a href="/page/2">Next</a>
                                 <span class="paging-info">Page 1 of 51</span>
                            </div>
                        </div>
                    </div>


                    <div id="tab-2" class="tab-pane fade show p-0">
                        <div class="row g-4">
                            <div class="col-lg-4 col-md-6">
                                <div class="property-item rounded overflow-hidden">
                                    <div class="position-relative overflow-hidden">
                                        <a href=""><img class="img-fluid" src="../Assets/img/property-1.jpg" alt=""></a>
                                        <div class="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">À Vendre</div>
                                        <div class="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Appartment</div>
                                    </div>
                                    <div class="p-4 pb-0">
                                        <h5 class="text-primary mb-3">299 000 DT</h5>
                                        <small class="flex-fill text-center "><i class="fa fa-ruler-combined text-primary me-2"></i>1000 m²</small>
                                        <p><i class="fa fa-map-marker-alt text-primary me-2"></i>Sfax 4.1 Km du centre</p>
                                    </div>
                                    <div>
                                    <button type="button" class="btn btn-warning">Voir Annonce</button>
                                
                                    </div>
                                    <br>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6">
                                <div class="property-item rounded overflow-hidden">
                                    <div class="position-relative overflow-hidden">
                                        <a href=""><img class="img-fluid" src="../Assets/img/property-2.jpg" alt=""></a>
                                        <div class="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">À Vendre</div>
                                        <div class="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Villa</div>
                                    </div>
                                    <div class="p-4 pb-0">
                                        <h5 class="text-primary mb-3">299 000 DT</h5>
                                        <small class="flex-fill text-center "><i class="fa fa-ruler-combined text-primary me-2"></i>1000 m²</small>
                                        <p><i class="fa fa-map-marker-alt text-primary me-2"></i>Sfax 4.1 Km du centre</p>
                                    </div>
                                    <div>
                                    <button type="button" class="btn btn-warning">Voir Annonce</button>
                                
                                    </div>
                                    <br>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6">
                                <div class="property-item rounded overflow-hidden">
                                    <div class="position-relative overflow-hidden">
                                        <a href=""><img class="img-fluid" src="../Assets/img/property-3.jpg" alt=""></a>
                                        <div class="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">À Vendre</div>
                                        <div class="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Office</div>
                                    </div>
                                    <div class="p-4 pb-0">
                                        <h5 class="text-primary mb-3">299 000 DT</h5>
                                        <small class="flex-fill text-center "><i class="fa fa-ruler-combined text-primary me-2"></i>1000 m²</small>
                                        <p><i class="fa fa-map-marker-alt text-primary me-2"></i>Sfax 4.1 Km du centre</p>
                                    </div>
                                    <div>
                                    <button type="button" class="btn btn-warning">Voir Annonce</button>
                                
                                    </div>
                                    <br>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6">
                                <div class="property-item rounded overflow-hidden">
                                    <div class="position-relative overflow-hidden">
                                        <a href=""><img class="img-fluid" src="../Assets/img/property-4.jpg" alt=""></a>
                                        <div class="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">À Vendre</div>
                                        <div class="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Building</div>
                                    </div>
                                    <div class="p-4 pb-0">
                                        <h5 class="text-primary mb-3">299 000 DT</h5>
                                        <small class="flex-fill text-center "><i class="fa fa-ruler-combined text-primary me-2"></i>1000 m²</small>
                                        <p><i class="fa fa-map-marker-alt text-primary me-2"></i>Sfax 4.1 Km du centre</p>
                                    </div>
                                    <div>
                                    <button type="button" class="btn btn-warning">Voir Annonce</button>
                                
                                    </div>
                                    <br>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6">
                                <div class="property-item rounded overflow-hidden">
                                    <div class="position-relative overflow-hidden">
                                        <a href=""><img class="img-fluid" src="../Assets/img/property-5.jpg" alt=""></a>
                                        <div class="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">À Vendre</div>
                                        <div class="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Home</div>
                                    </div>
                                    <div class="p-4 pb-0">
                                        <h5 class="text-primary mb-3">299 000 DT</h5>
                                        <small class="flex-fill text-center "><i class="fa fa-ruler-combined text-primary me-2"></i>1000 m²</small>
                                        <p><i class="fa fa-map-marker-alt text-primary me-2"></i>Sfax 4.1 Km du centre</p>
                                    </div>
                                    <div>
                                    <button type="button" class="btn btn-warning">Voir Annonce</button>
                                
                                    </div>
                                    <br>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6">
                                <div class="property-item rounded overflow-hidden">
                                    <div class="position-relative overflow-hidden">
                                        <a href=""><img class="img-fluid" src="../Assets/img/property-6.jpg" alt=""></a>
                                        <div class="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">À Vendre</div>
                                        <div class="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Shop</div>
                                    </div>
                                    <div class="p-4 pb-0">
                                        <h5 class="text-primary mb-3">299 000 DT</h5>
                                        <small class="flex-fill text-center "><i class="fa fa-ruler-combined text-primary me-2"></i>1000 m²</small>
                                        <p><i class="fa fa-map-marker-alt text-primary me-2"></i>Sfax 4.1 Km du centre</p>
                                    </div>
                                    <div>
                                    <button type="button" class="btn btn-warning">Voir Annonce</button>
                                
                                    </div>
                                    <br>
                                </div>
                            </div>
                            <div class="col-12 text-center">
                                <a class="btn btn-primary py-3 px-5" href="">Browse More Property</a>
                            </div>
                        </div>
                    </div>
                    <div id="tab-3" class="tab-pane fade show p-0">
                        <div class="row g-4">
                            <div class="col-lg-4 col-md-6">
                                <div class="property-item rounded overflow-hidden">
                                    <div class="position-relative overflow-hidden">
                                        <a href=""><img class="img-fluid" src="../Assets/img/property-1.jpg" alt=""></a>
                                        <div class="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">À Vendre</div>
                                        <div class="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Appartment</div>
                                    </div>
                                    <div class="p-4 pb-0">
                                        <h5 class="text-primary mb-3">299 000 DT</h5>
                                        <small class="flex-fill text-center "><i class="fa fa-ruler-combined text-primary me-2"></i>1000 m²</small>
                                        <p><i class="fa fa-map-marker-alt text-primary me-2"></i>Sfax 4.1 Km du centre</p>
                                    </div>
                                    <div>
                                    <button type="button" class="btn btn-warning">Voir Annonce</button>
                                
                                    </div>
                                    <br>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6">
                                <div class="property-item rounded overflow-hidden">
                                    <div class="position-relative overflow-hidden">
                                        <a href=""><img class="img-fluid" src="../Assets/img/property-2.jpg" alt=""></a>
                                        <div class="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">À Vendre</div>
                                        <div class="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Villa</div>
                                    </div>
                                    <div class="p-4 pb-0">
                                        <h5 class="text-primary mb-3">299 000 DT</h5>
                                        <small class="flex-fill text-center "><i class="fa fa-ruler-combined text-primary me-2"></i>1000 m²</small>
                                        <p><i class="fa fa-map-marker-alt text-primary me-2"></i>Sfax 4.1 Km du centre</p>
                                    </div>
                                    <div>
                                    <button type="button" class="btn btn-warning">Voir Annonce</button>
                                
                                    </div>
                                    <br>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6">
                                <div class="property-item rounded overflow-hidden">
                                    <div class="position-relative overflow-hidden">
                                        <a href=""><img class="img-fluid" src="../Assets/img/property-3.jpg" alt=""></a>
                                        <div class="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">À Vendre</div>
                                        <div class="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Office</div>
                                    </div>
                                    <div class="p-4 pb-0">
                                        <h5 class="text-primary mb-3">299 000 DT</h5>
                                        <small class="flex-fill text-center "><i class="fa fa-ruler-combined text-primary me-2"></i>1000 m²</small>
                                        <p><i class="fa fa-map-marker-alt text-primary me-2"></i>Sfax 4.1 Km du centre</p>
                                    </div>
                                    <div>
                                    <button type="button" class="btn btn-warning">Voir Annonce</button>
                                
                                    </div>
                                    <br>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6">
                                <div class="property-item rounded overflow-hidden">
                                    <div class="position-relative overflow-hidden">
                                        <a href=""><img class="img-fluid" src="../Assets/img/property-4.jpg" alt=""></a>
                                        <div class="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">À Vendre</div>
                                        <div class="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Building</div>
                                    </div>
                                    <div class="p-4 pb-0">
                                        <h5 class="text-primary mb-3">299 000 DT</h5>
                                        <small class="flex-fill text-center "><i class="fa fa-ruler-combined text-primary me-2"></i>1000 m²</small>
                                        <p><i class="fa fa-map-marker-alt text-primary me-2"></i>Sfax 4.1 Km du centre</p>
                                    </div>
                                    <div>
                                    <button type="button" class="btn btn-warning">Voir Annonce</button>
                                
                                    </div>
                                    <br>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6">
                                <div class="property-item rounded overflow-hidden">
                                    <div class="position-relative overflow-hidden">
                                        <a href=""><img class="img-fluid" src="../Assets/img/property-5.jpg" alt=""></a>
                                        <div class="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">À Vendre</div>
                                        <div class="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Home</div>
                                    </div>
                                    <div class="p-4 pb-0">
                                        <h5 class="text-primary mb-3">299 000 DT</h5>
                                        <small class="flex-fill text-center "><i class="fa fa-ruler-combined text-primary me-2"></i>1000 m²</small>
                                        <p><i class="fa fa-map-marker-alt text-primary me-2"></i>Sfax 4.1 Km du centre</p>
                                    </div>
                                    <div>
                                    <button type="button" class="btn btn-warning">Voir Annonce</button>
                                
                                    </div>
                                    <br>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6">
                                <div class="property-item rounded overflow-hidden">
                                    <div class="position-relative overflow-hidden">
                                        <a href=""><img class="img-fluid" src="../Assets/img/property-6.jpg" alt=""></a>
                                        <div class="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">À Vendre</div>
                                        <div class="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Shop</div>
                                    </div>
                                    <div class="p-4 pb-0">
                                        <h5 class="text-primary mb-3">299 000 DT</h5>
                                        <small class="flex-fill text-center "><i class="fa fa-ruler-combined text-primary me-2"></i>1000 m²</small>
                                        <p><i class="fa fa-map-marker-alt text-primary me-2"></i>Sfax 4.1 Km du centre</p>
                                    </div>
                                    <div>
                                    <button type="button" class="btn btn-warning">Voir Annonce</button>
                                
                                    </div>
                                    <br>
                                </div>
                            </div>
                            <div class="col-12 text-center">
                                <a class="btn btn-warning py-3 px-5" href="">Browse More Property</a> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Property List End -->
   
</template>


<script>
export default {
    
   mounted() {
        // Sélectionnez chaque icône du cœur individuellement
        const heartIcons = document.querySelectorAll('.heart-icon');

        // Parcourez chaque icône du cœur et ajoutez un écouteur d'événements
        heartIcons.forEach((heartIcon) => {
            heartIcon.addEventListener('click', () => {
                heartIcon.classList.toggle('active');
            });
        });
    },
  name: 'HomeView',
};
</script>

<style scoped>
/* Style de base pour l'icône de cœur */
.heart-icon {
    font-size: 24px;
    color: #ccc;
}

/* Style lorsque l'annonce est ajoutée aux favoris */
.heart-icon.active {
    color: red; /* Couleur rouge pour indiquer que l'annonce est dans les favoris */
}

.paging {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
}

.paging a {
    text-decoration: none;
    color: #333;
    padding: 5px 10px;
    margin: 0 3px;
    border-radius: 3px;
    background-color: #f0f0f0;
    transition: background-color 0.3s ease;
}

.paging a:hover {
    background-color: #ddd;
}

.page-square {
    width: 30px; /* Largeur du carré */
    height: 30px; /* Hauteur du carré */
    text-align: center;
    line-height: 30px; /* Centrer le texte verticalement */
    margin: 0 3px;
    border: 1px solid #ccc;
    border-radius: 3px;
    background-color: #f0f0f0;
}

.page-square a {
    display: block;
    width: 100%;
    height: 100%;
    color: inherit;
    text-decoration: none;
}

.page-square.current {
    background-color: #007bff;
    color: #fff;
}

.paging-info {
    margin-left: 10px;
    color: #777;
}



</style>