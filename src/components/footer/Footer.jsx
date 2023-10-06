import './Footer.scss';

const Footer = () => {
	return ( 
		<footer>
			<div className="main-title-container">
				<h2 className="main-title">
					This company is not real and was made by <a href="https://github.com/hateq" target='_blank'>hateq (Github)</a>
				</h2>
			</div>
			<div className="footer-bottom">
				<a href="https://github.com/hateq" target='_blank'>Github</a>
				<a href="https://t.me/fhdhddjb" target='_blank'>Telegram</a>
				<a href="https://vk.com/cvrsdxdx" target='_blank'>VK</a>
				<a href="https://www.linkedin.com/in/vadim-konyukhov-a958b9283/" target='_blank'>LinkedIn</a>
			</div>
		</footer>
	 );
}
 
export default Footer;