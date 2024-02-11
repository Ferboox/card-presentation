import  './global.css'

export const Maps = () => {
  return (
    <section className="maps">
        <div className="maps__logo">
            <img className="maps__logo--web" src="/src/assets/maps.png" alt="" />
            <p className='maps__logo__text'>¿Cómo llegar?</p>
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4395.039625821763!2d-100.98439081513345!3d22.134626512984024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842a98a75b1d0ac1%3A0xcd695b8390b329d!2sLlantera%20Pelayo%20Plaza%20Fiesta!5e0!3m2!1ses-419!2smx!4v1707611222442!5m2!1ses-419!2smx" loading="lazy"></iframe>
    </section>
  )
}
