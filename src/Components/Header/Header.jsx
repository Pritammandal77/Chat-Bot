import React from 'react';
import './Header.css'

function Header() {

  const reloadPage = () => {
    window.location.reload();
  }
  return (
    <>
      <header className="Header">
        <div>
          <p className='AppName' onClick={reloadPage}>AuraAI </p>
        </div>
        <div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2SPTB0m03B4_IoXKTtAg3glTOEjV50XCYlg&s"
            className="img" onClick={reloadPage}/>
        </div>
      </header>
    </>
  );
}

export default Header;
