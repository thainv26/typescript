const Header = () => {
  return (
    <>
      <nav className='navbar p-3 navbar-expand-sm navbar-dark bg-dark fixed-top'>
        <div className='container-fluid'>
          <a className='navbar-brand' href='javascript:void(0)'>
            <img src="../image/logo.jpg" alt="" width={50} className='rounded-circle' />
          </a>
          <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#mynavbar'>
            <span className='navbar-toggler-icon' />
          </button>
          <div className='collapse navbar-collapse' id='mynavbar'>
            <ul className='navbar-nav me-auto'>
              <li className='nav-item'>
                <a className='nav-link' href='javascript:void(0)'>
                  Danh muc
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='javascript:void(0)'>
                  gio hang
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='javascript:void(0)'>
                  dang ki
                </a>
              </li>
            </ul>
            <form className='d-flex'>
              <input className='form-control me-2' type='text' placeholder='Search' />
              <button className='btn btn-primary' type='button'>
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header
