"use client"

const RegisterPage = () => {
  return (
    <div className="hero-content flex-col lg:flex-row-reverse">
      <div className="card shrink-0 w-[100%] shadow-2xl bg-base-100">
        <form className="card-body">
          <h2 className="card-title">Register</h2>
            <div className="lg:flex">
            <div className="f1 lg:mr-2">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" placeholder="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="text" placeholder="name" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Lastname</span>
              </label>
              <input type="text" placeholder="lastname" className="input input-bordered" required />
            </div>
          </div>
          <div className="f2 lg:mr-2">
            <div className="form-control">
              <label className="label">
                <span className="label-text">ID</span>
              </label>
              <div className="flex">
                <select className="select select-bordered w-auto">
                  <option disabled selected>Type</option>
                  <option>CC</option>
                  <option>TI</option>
                  <option>RC</option>
                  <option>CE</option>
                  <option>CI</option>
                  <option>DNI</option>
                </select>
                <input type="text" placeholder="id" className="input input-bordered ml-2 w-[100%]" required />
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Number Phone</span>
              </label>
              <input type="text" placeholder="phone" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Address</span>
              </label>
              <input type="text" placeholder="address" className="input input-bordered" required />
            </div>
          </div>
          <div className="f3">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" placeholder="password" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input type="password" placeholder="password" className="input input-bordered" required />
            </div>
            <div className="form-control mt-9">
              <button className="btn btn-primary">Register</button>
            </div>
          </div>
            </div>
        </form>
      </div>
    </div>
  )
}

export default RegisterPage;
