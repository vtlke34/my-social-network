import '../App.css';

function Section() {
  return (
    <section className='section'>
      <div className='section-bg'></div>
      <div className='profile'>
        <img className='profile-icon' src="https://www.seekpng.com/png/detail/966-9665493_my-profile-icon-blank-profile-image-circle.png" alt="My Profile Icon" />
        <div className='profile-info'>
          <h2>Obukh Vitali</h2>
          <ul>
            <li>
              Date of birth: 17 july
            </li>
            <li>
              City: Nesvizh
            </li>
            <li>
              Education: BSUIR
            </li>
            <li>
              Contacts: <a href='vk.com/vtlke34'>vk.com/vtlke34</a>
            </li>
          </ul>
        </div>
      </div>
      <div className='posts'>
        <h2>
          My posts
        </h2>
        <div className='new-post'>

        </div>
        <div className='all-post'>

        </div>
      </div>
    </section>
  );
}

export default Section;
