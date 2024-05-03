<template>
<div class="d-flex" id="wrapper">
    <!-- Sidebar -->
    <div class="bg-white" id="sidebar-wrapper">
        <div class="sidebar-heading text-center py-4 primary-text fs-4 fw-bold text-uppercase border-bottom">
            <a class="navbar-brand" href="#">
    <img class="img-fluid" src="../Assets/swimmo.png" alt="Icon" style="width: 80px; height: 80px;">
    
  </a></div>
        <div class="list-group list-group-flush my-3">
            <a href="#" class="list-group-item list-group-item-action bg-transparent second-text active"><i
                    class="fas fa-tachometer-alt me-2"></i>Dashboard</a>
            
            <a href="#" class="list-group-item list-group-item-action bg-transparent second-text fw-bold"><i
                    class="fas fa-chart-line me-2"></i>Analytics</a>
            <a href="#" class="list-group-item list-group-item-action bg-transparent second-text fw-bold"><i
                    class="fas fa-paperclip me-2"></i>Reports</a>
            
            <a href="#" class="list-group-item list-group-item-action bg-transparent second-text fw-bold"><i
                    class="fas fa-gift me-2"></i>Annonces</a>
            <a href="#" class="list-group-item list-group-item-action bg-transparent second-text fw-bold"><i
                    class="fas fa-comment-dots me-2"></i>Chat</a>
            <a href="#" class="list-group-item list-group-item-action bg-transparent second-text fw-bold"><i
                    class="fas fa-map-marker-alt me-2"></i>Outlet</a>
            <a href="#" class="list-group-item list-group-item-action bg-transparent text-danger fw-bold"><i
                    class="fas fa-power-off me-2"></i>Logout</a>
        </div>
    </div>
    <!-- /#sidebar-wrapper -->

    <!-- Page Content -->
    <div id="page-content-wrapper">
        <nav class="navbar navbar-expand-lg navbar-light bg-transparent py-4 px-4">
            <div class="d-flex align-items-center">
                <i class="fas fa-align-left primary-text fs-4 me-3" id="menu-toggle"></i>
                <h2 class="fs-2 m-0">Dashboard</h2>
            </div>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <!-- Nav Item - Alerts -->
                    <li class="nav-item">
                          <router-link to="/Alerts" class="nav-link">
                                <i class="fas fa-bell fa-fw"></i>
                                <!-- Counter - Alerts -->
                              </router-link>
                              </li>         
                  <li class="nav-item">
                    <router-link to="/Messages" class="nav-link">
                      <i class="fas fa-envelope"></i> 
                    </router-link>
                </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle second-text fw-bold" href="#" id="navbarDropdown"
                            role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="fas fa-user me-2"></i>
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a class="dropdown-item" href="#">Profile</a></li>
                            <li><a class="dropdown-item" href="#">Settings</a></li>
                            <li><a class="dropdown-item" href="#">Logout</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>

        <div class="container-fluid px-4">
            <div class="row">

                <div class="row">

<!-- Earnings (Annual) -->
<div class="col-xl-3 col-md-6 mb-4">
    <div class="card text-white bg-light shadow h-100 py-2">
        <div class="card-body">
            <div class="row no-gutters align-items-center">
                <div class="col mr-2">
                    <div class="text-xs font-weight-bold text-black text-uppercase mb-1">
                        Earnings (Annual)</div>
                    <div class="h5 mb-0 font-weight-bold text-black">DT 215,000</div>
                </div>
                <div class="col-auto">
                    <i class="fas fa-dollar-sign fa-2x text-black"></i>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- Properties For Sale -->
<div class="col-xl-3 col-md-6 mb-4">
    <div class="card text-white bg-light shadow h-100 py-2">
        <div class="card-body">
            <div class="row no-gutters align-items-center">
                <div class="col mr-2">
                    <div class="text-xs font-weight-bold text-black text-uppercase mb-1">
                        Properties For Sale</div>
                    <div class="h5 mb-0 font-weight-bold text-black">120</div>
                </div>
                <div class="col-auto">
                    <i class="fas fa-home fa-2x text-black"></i>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- Properties For Rent -->
<div class="col-xl-3 col-md-6 mb-4">
    <div class="card text-black bg-light shadow h-100 py-2">
        <div class="card-body">
            <div class="row no-gutters align-items-center">
                <div class="col mr-2">
                    <div class="text-xs font-weight-bold text-black text-uppercase mb-1">
                        Properties For Rent</div>
                    <div class="h5 mb-0 font-weight-bold text-black">120</div>
                </div>
                <div class="col-auto">
                    <i class="fas fa-home fa-2x text-black"></i>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- Satisfied Clients -->
<div class="col-xl-3 col-md-6 mb-4">
    <div class="card text-white bg-light shadow h-100 py-2">
        <div class="card-body">
            <div class="row no-gutters align-items-center">
                <div class="col mr-2">
                    <div class="text-xs font-weight-bold text-black text-uppercase mb-1">
                        Satisfied Clients</div>
                    <div class="h5 mb-0 font-weight-bold text-black">85%</div>
                </div>
                <div class="col-auto">
                    <i class="fas fa-thumbs-up fa-2x text-black"></i>
                </div>
            </div>
        </div>
    </div>
</div>

</div>


</div>


            <div class="row my-5">
                <h3 class="fs-4 mb-3">Recent Annonces</h3>
                <div class="col">
                    <table class="table bg-white rounded shadow-sm  table-hover">
                        <thead>
                            <tr>
                                <th scope="col" width="50">#</th>
                                <th scope="col">Product</th>
                                <th scope="col">Customer</th>
                                <th scope="col">Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Television</td>
                                <td>Jonny</td>
                                <td>$1200</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Laptop</td>
                                <td>Kenny</td>
                                <td>$750</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Cell Phone</td>
                                <td>Jenny</td>
                                <td>$600</td>
                            </tr>
                            <tr>
                                <th scope="row">4</th>
                                <td>Fridge</td>
                                <td>Killy</td>
                                <td>$300</td>
                            </tr>
                            <tr>
                                <th scope="row">5</th>
                                <td>Books</td>
                                <td>Filly</td>
                                <td>$120</td>
                            </tr>
                            <tr>
                                <th scope="row">6</th>
                                <td>Gold</td>
                                <td>Bumbo</td>
                                <td>$1800</td>
                            </tr>
                            <tr>
                                <th scope="row">7</th>
                                <td>Pen</td>
                                <td>Bilbo</td>
                                <td>$75</td>
                            </tr>
                            <tr>
                                <th scope="row">8</th>
                                <td>Notebook</td>
                                <td>Frodo</td>
                                <td>$36</td>
                            </tr>
                            <tr>
                                <th scope="row">9</th>
                                <td>Dress</td>
                                <td>Kimo</td>
                                <td>$255</td>
                            </tr>
                            <tr>
                                <th scope="row">10</th>
                                <td>Paint</td>
                                <td>Zico</td>
                                <td>$434</td>
                            </tr>
                            <tr>
                                <th scope="row">11</th>
                                <td>Carpet</td>
                                <td>Jeco</td>
                                <td>$1236</td>
                            </tr>
                            <tr>
                                <th scope="row">12</th>
                                <td>Food</td>
                                <td>Haso</td>
                                <td>$422</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    </div>
</div>
<!-- /#page-content-wrapper -->

</template>

  
  <style scoped>
:root {
  --main-bg-color: #ece957;
  --main-text-color: #e1e515;
  --second-text-color: #c1bc1b;
  --second-bg-color: #e7e776;
}

.primary-text {
  color: var(--main-text-color);
}

.second-text {
  color: var(--second-text-color);
}

.primary-bg {
  background-color: var(--main-bg-color);
}

.secondary-bg {
  background-color: var(--second-bg-color);
}

.rounded-full {
  border-radius: 100%;
}

#wrapper {
  overflow-x: hidden;
  background-image: linear-gradient(
    to right,
    #fad644,
    #f6d981,
    #fbd76e,
    #f9da5f,
    #fad644
  );
}

#sidebar-wrapper {
  min-height: 100vh;
  margin-left: -15rem;
  -webkit-transition: margin 0.25s ease-out;
  -moz-transition: margin 0.25s ease-out;
  -o-transition: margin 0.25s ease-out;
  transition: margin 0.25s ease-out;
}

#sidebar-wrapper .sidebar-heading {
  padding: 0.875rem 1.25rem;
  font-size: 1.2rem;
}

#sidebar-wrapper .list-group {
  width: 15rem;
}

#page-content-wrapper {
  min-width: 100vw;
}

#wrapper.toggled #sidebar-wrapper {
  margin-left: 0;
}

#menu-toggle {
  cursor: pointer;
}

.list-group-item {
  border: none;
  padding: 20px 30px;
}

.list-group-item.active {
  background-color: transparent;
  color: var(--main-text-color);
  font-weight: bold;
  border: none;
}

@media (min-width: 768px) {
  #sidebar-wrapper {
    margin-left: 0;
  }

  #page-content-wrapper {
    min-width: 0;
    width: 100%;
  }

  #wrapper.toggled #sidebar-wrapper {
    margin-left: -15rem;
  }
}
  </style>
  

