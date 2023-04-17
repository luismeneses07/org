import "./Footer.css"
const Footer = () => {
    return  <footer className='footer' style={{ backgroundImage: "url(/img/footer.png)" }}>
    <div className='redes'>
        <a href='https://www.facebook.com/payini.menesesflores'>
            <img src="/img/facebook.png" alt='Facebook' />
        </a>
        <a href='https://twitter.com/luismeneses1007'>
            <img src="/img/twitter.png" alt='twitter' />
        </a>
        <a href='https://www.instagram.com/luis_meneses_flores?igshid=YmMyMTA2M2Y='>
            <img src="/img/instagram.png" alt='instagram' />
        </a>
    </div>
    <img src='/img/Logo.png' alt='org' />
    <strong>Desarrollado por Luis Florencio Meneses Flores</strong>
</footer>
};

export default Footer;