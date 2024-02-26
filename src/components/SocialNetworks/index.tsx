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
        <a href="https://www.google.com/maps/place/Llantera+Pelayo+Plaza+Fiesta,+Av+Himno+Nacional+4180,+Himno+Nacional+1ra+Secc,+78280+San+Luis+Potos%C3%AD,+S.L.P./@22.135483,-100.981232,14z/data=!4m6!3m5!1s0x842a98a75b1d0ac1:0xcd695b8390b329d!8m2!3d22.1354833!4d-100.9812324!16s%2Fg%2F1tf8td_t?hl=es-419&gl=MX" className="social_networks__logo">
            <img className="social_networks__logo--maps" src="/src/assets/maps.png" alt="" />
            <p className='social_networks__logo__text'>¿Cómo llegar?</p>
        </a>
        
    </div>
  )
}
