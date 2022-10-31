<div>

                <div className="container mt-5">
                    <div className="row justify-content-center">
                        <div className="col-md-4">
                            <div class="card text-white text-center border-0">
                                <img src="https://source.unsplash.com/random/600x900/?nature" class="card-img" alt="..." />
                                <div class="card-img-overlay">
                                    <form>
                                        <div class="input-group mb-3 w-75 mx-auto">
                                            <input type="search" class="form-control" id="search" placeholder="Search City" aria-label="RSearch City" aria-describedby="basic-addon2" />
                                            <button type="submit" class="input-group-text" id="basic-addon2">
                                                <i className="fas fa-search"></i>
                                            </button>
                                        </div>
                                    </form>
                                    <div className="bg-dark bg-opacity-50 py-3">
                                        <h2 class="card-title">{data.name}</h2>
                                        <p class="card-text lead">Monday, October 24 2022</p>
                                        <hr />
                                        <i className="fas fa-cloud fa-4x"></i>
                                        <h1 className="fw-bolder mb-5">{data.main.temp} &deg;C</h1>
                                        <p className="lead fw-bolder mb-0">Clouds</p>
                                        <p className="lead">33.01&deg;C | 35.01&deg;C</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>