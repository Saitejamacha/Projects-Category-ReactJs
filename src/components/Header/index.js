import './index.css'

const Header = () => (
  <nav className="nav-header">
    <div className="nav-content">
      <p className="website-logo">MST</p>
      <ul className="nav-menu">
        <li>
          <img
            className="social-network-img"
            src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
            alt="Linked In"
          />
        </li>
        <li>
          <img
            className="social-network-img1"
            src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
            alt="Git Hub"
          />
        </li>
        <li>
          <img
            className="social-network-img1"
            src="https://i.pinimg.com/736x/ac/57/3b/ac573b439cde3dec8ca1c6739ae7f628.jpg"
            alt="Facebook"
          />
        </li>
        <li>
          <img
            className="social-network-img"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png"
            alt="Instagram"
          />
        </li>
        <li>
          <img
            className="social-network-img"
            src="https://res.cloudinary.com/dmwrugc6z/image/upload/v1621681890/Background_4x_1_bzyjew.png"
            alt="Twitter"
          />
        </li>
      </ul>
    </div>
  </nav>
)

export default Header
