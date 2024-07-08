import React, { useState } from 'react';
import './Footer.css'; 

const Footer = () => {
  const [isMoreVisible, setIsMoreVisible] = useState({
    realEstate: false,
    popularSearches: false,
    exploreTrulia: false,
    forProfessionals: false,
  });

  const toggleMore = (section) => {
    setIsMoreVisible((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    <div className="footer">
      <div className="footer-logo">
        <h1>discover 
          <img src="https://www.trulia.com/images/icons/txl3/LocationLincolnIcon.svg" alt="" className="img-icon"/>
         a place
            <img src="https://www.trulia.com/images/icons/txl3/TownHouseIcon.svg" alt="" className="img-icon"/>
          you'll love
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" role="img" aria-label="" aria-hidden="true" class="w_24 xs:w_32 h_24 xs:h_32 svg"><path d="M16.157 6.31A7.874 7.874 0 1 1 27.3 17.433l-1.913 1.912-9.254 9.254-1.88-1.88-7.373-7.374-1.91-1.91a7.874 7.874 0 1 1 11.137-11.13l.027.025.022-.022z" fill="#f00"></path></svg> 
            to live
            </h1>
      </div>
      <div className="footer-links">
        <div className="footer-column">
          <h3 className='text_grey'>Real Estate Markets</h3>
          <ul>
            <li><a href="#">Alaska Real Estate</a></li>
            <li><a href="#">Alabama Real Estate</a></li>
            <li><a href="#">Arkansas Real Estate</a></li>
            <li><a href="#">Arizona Real Estate</a></li>
            {isMoreVisible.realEstate && (
              <>
                <li><a href="#">California Real Estate</a></li>
                <li><a href="#">Colorado Real Estate</a></li>
              </>
            )}
          </ul>
          <a className="more-link" onClick={() => toggleMore('realEstate')}>
            {isMoreVisible.realEstate ? 'Less ▲' : 'More ▼'}
          </a>
        </div>
        <div className="footer-column">
          <h3 className='text_grey'>Popular Searches</h3>
          <ul>
            <li><a href="#">Cheap Apartments for Rent Near Me</a></li>
            <li><a href="#">Pet Friendly Apartments Near Me</a></li>
            <li><a href="#">Land for Sale Near Me</a></li>
            <li><a href="#">Townhomes for Rent Near Me</a></li>
            {isMoreVisible.popularSearches && (
              <>
                <li><a href="#">Luxury Apartments for Rent</a></li>
                <li><a href="#">Homes with Pools</a></li>
              </>
            )}
          </ul>
          <a className="more-link" onClick={() => toggleMore('popularSearches')}>
            {isMoreVisible.popularSearches ? 'Less ▲' : 'More ▼'}
          </a>
        </div>
        <div className="footer-column">
          <h3 className='text_grey'>Explore Trulia</h3>
          <ul>
            <li><a href="#"><span><svg xmlns="http://www.w3.org/2000/svg" width="15px" height="15" viewBox="0 0 24 24" role="img" aria-label="" aria-hidden="true" class="w_16 h_16 svg"><path d="M13.416 20v-7.313h2.442l.376-2.843h-2.818V8.03c0-.406.086-.737.259-.992.172-.255.555-.383 1.15-.383h1.503v-2.53c-.125-.031-.391-.06-.798-.086A22.06 22.06 0 0 0 14.136 4c-.542 0-1.04.08-1.495.242a3.07 3.07 0 0 0-1.158.719 3.292 3.292 0 0 0-.744 1.172c-.177.463-.266 1.002-.266 1.617v2.094H8v2.844h2.473V20h2.943z"></path></svg></span>Facebook</a></li>
            <li><a href="#"><span><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" role="img" aria-label="" aria-hidden="true" class="w_16 h_16 svg"><path d="M21 6.815c-.653.283-1.203.292-1.786.013.752-.437.787-.745 1.059-1.57a7.44 7.44 0 0 1-2.315.858A3.694 3.694 0 0 0 15.298 5c-2.012 0-3.644 1.584-3.644 3.534 0 .277.032.547.094.806a10.453 10.453 0 0 1-7.511-3.693 3.438 3.438 0 0 0-.494 1.777c0 1.227.644 2.308 1.621 2.942a3.717 3.717 0 0 1-1.65-.442v.044c0 1.713 1.256 3.141 2.924 3.466a3.78 3.78 0 0 1-1.647.062c.465 1.403 1.81 2.425 3.405 2.454A7.494 7.494 0 0 1 3 17.413 10.553 10.553 0 0 0 8.587 19c6.703 0 10.368-5.385 10.368-10.056 0-.154-.002-.306-.01-.457.712-.498 1.567-.962 2.055-1.672z"></path></svg></span>Twitter</a></li>
            <li><a href="#"><span><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" role="img" aria-label="" aria-hidden="true" class="w_16 h_16 svg"><path d="M12 3c2.444 0 2.75.01 3.71.054.959.044 1.613.196 2.185.419.592.23 1.094.537 1.594 1.038.5.5.809 1.002 1.039 1.594.222.572.374 1.226.418 2.184C20.99 9.25 21 9.556 21 12s-.01 2.75-.054 3.71c-.044.959-.196 1.613-.418 2.185a4.412 4.412 0 0 1-1.039 1.594c-.5.5-1.002.809-1.594 1.039-.572.222-1.226.374-2.184.418-.96.044-1.267.054-3.711.054s-2.75-.01-3.71-.054c-.959-.044-1.613-.196-2.185-.418a4.412 4.412 0 0 1-1.594-1.039c-.5-.5-.809-1.002-1.038-1.594-.223-.572-.375-1.226-.419-2.184C3.01 14.75 3 14.444 3 12s.01-2.75.054-3.71c.044-.959.196-1.613.419-2.185A4.411 4.411 0 0 1 4.51 4.51c.5-.5 1.002-.809 1.594-1.038.572-.223 1.226-.375 2.184-.419C9.25 3.01 9.556 3 12 3zm0 1.622c-2.403 0-2.688.009-3.637.052-.877.04-1.354.187-1.67.31a2.79 2.79 0 0 0-1.036.673c-.315.315-.51.615-.673 1.035-.123.317-.27.794-.31 1.671-.043.95-.052 1.234-.052 3.637s.009 2.688.052 3.637c.04.877.187 1.354.31 1.67.163.421.358.72.673 1.036.315.315.615.51 1.035.673.317.123.794.27 1.671.31.95.043 1.234.052 3.637.052s2.688-.009 3.637-.052c.877-.04 1.354-.187 1.67-.31a2.79 2.79 0 0 0 1.036-.673c.315-.315.51-.615.673-1.035.123-.317.27-.794.31-1.671.043-.95.052-1.234.052-3.637s-.009-2.688-.052-3.637c-.04-.877-.187-1.354-.31-1.67a2.788 2.788 0 0 0-.673-1.036 2.788 2.788 0 0 0-1.035-.673c-.317-.123-.794-.27-1.671-.31-.95-.043-1.234-.052-3.637-.052zM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-7.622a4.622 4.622 0 1 1 0 9.244 4.622 4.622 0 0 1 0-9.244zm5.884-.182a1.08 1.08 0 1 1-2.16 0 1.08 1.08 0 0 1 2.16 0z"></path></svg></span>Instagram</a></li>
            <li><a href="#"><span><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" role="img" aria-label="" aria-hidden="true" class="w_16 h_16 svg"><path d="M12 3c-4.963 0-9 4.037-9 9s4.037 9 9 9 9-4.037 9-9-4.037-9-9-9zm1.043 11.671c-.744 0-1.444-.4-1.683-.857 0 0-.401 1.587-.484 1.894-.299 1.082-1.177 2.167-1.245 2.255-.047.063-.152.044-.164-.04-.019-.137-.242-1.503.02-2.618l.888-3.756s-.22-.441-.22-1.091c0-1.021.592-1.784 1.328-1.784.627 0 .93.47.93 1.034 0 .63-.401 1.573-.609 2.446-.173.732.368 1.329 1.088 1.329 1.306 0 2.186-1.679 2.186-3.666 0-1.51-1.017-2.641-2.868-2.641-2.09 0-3.394 1.56-3.394 3.3 0 .373.07.678.187.934l-1.136.604c-.266-.477-.395-1.075-.395-1.709C7.472 8.348 9.124 6 12.398 6c2.633 0 4.364 1.904 4.364 3.95 0 2.702-1.503 4.722-3.719 4.722z"></path></svg></span>Pinterest</a></li>
            {isMoreVisible.exploreTrulia && (
              <>
                <li><a href="#">YouTube</a></li>
                <li><a href="#">LinkedIn</a></li>
              </>
            )}
          </ul>
          <a className="more-link" onClick={() => toggleMore('exploreTrulia')}>
            {isMoreVisible.exploreTrulia ? 'Less ▲' : 'More ▼'}
          </a>
        </div>
        <div className="footer-column">
          <h3 className='text_grey'>For Professionals</h3>
          <ul>
            <li><a href="#">Popular Counties</a></li>
            <li><a href="#">Rental Communities</a></li>
            <li><a href="#">Real Estate Leads</a></li>
            {isMoreVisible.forProfessionals && (
              <>
                <li><a href="#">Agent Resources</a></li>
                <li><a href="#">Broker Resources</a></li>
              </>
            )}
          </ul>
          <a className="more-link" onClick={() => toggleMore('forProfessionals')}>
            {isMoreVisible.forProfessionals ? 'Less ▲' : 'More ▼'}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;

