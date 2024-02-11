import  './global.css'

export const SocialNetworks = () => {
  return (
    <div className="social_networks">
        <a href="" className="social_networks__logo">
            <img className="social_networks__logo--facebook" src="/src/assets/facebook.png" alt="" />
            <p className='social_networks__logo__text'>Facebook</p>
        </a>
        <a href="" className="social_networks__logo">
            <img className="social_networks__logo--instagram" src="/src/assets/instagram.png" alt="" />
            <p className='social_networks__logo__text'>Instagram</p>
        </a>
        <a href="" className="social_networks__logo">
            <img className="social_networks__logo--web" src="/src/assets/web.png" alt="" />
            <p className='social_networks__logo__text'>Página web</p>
        </a>
        {/* <div>
            <a href="" className="social_networks__logo">
                <img className="social_networks__logo--web" src="/src/assets/web.png" alt="" />
                <p className='social_networks__logo__text'>¿Cómo llegar?</p>
            </a>
            <div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4395.039625821763!2d-100.98439081513345!3d22.134626512984024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842a98a75b1d0ac1%3A0xcd695b8390b329d!2sLlantera%20Pelayo%20Plaza%20Fiesta!5e0!3m2!1ses-419!2smx!4v1707611222442!5m2!1ses-419!2smx" width="400" height="300" loading="lazy"></iframe>
            </div>
        </div> */}
        
    </div>
  )
}
