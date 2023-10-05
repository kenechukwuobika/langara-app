import React from 'react'
import { Link } from 'react-router-dom'
import { 
	FacebookIcon,
	InstagramIcon,
	TwitterIcon,
	LinkedinIcon,
	EnvelopeIcon,
	LocationIcon,
	PhoneAltIcon, 
} from 'assets/svg'
// import { APP_NAME } from 'configs/AppConfig';

export default function FrontFooter() {
	return (
		<footer className="o-footer">
			<div className="o-container">
				<div className="o-row">
					<div className="o-col-lg-4">
						<div className="o-footer-item">
							<div className="o-footer-title">
								<p className="t-24">Quick Information</p>
							</div>
							<p className="t-18">Discover how you can transform your freelance business—and your life—with battle-tested growth strategies</p>
						</div>

						<div className="o-footer-item">
							<div className="o-footer-title">
								<p className="t-24">Stay Connected</p>
							</div>
							<div className="o-footer-icons">
								<a target="_blank" rel="noreferrer" href="https://twitter.com/">
									<TwitterIcon />
								</a>

								<a target="_blank" rel="noreferrer" href="https://facebook.com">
									<FacebookIcon />
								</a>

								<a target="_blank" rel="noreferrer" href="https://linkedin.com">
									<LinkedinIcon />
								</a>

								<a target="_blank" rel="noreferrer" href="https://instagram.com">
									<InstagramIcon />
								</a>
							</div>
						</div>
					</div>

					<div className="o-col-lg-2">
						<div className="o-footer-item">
							<div className="o-footer-title">
								<p className="t-24">Navigation</p>
							</div>
							<ul className="o-footer-list">
								<li>
									<Link to='/home' className="o-footer-link t-18">Home</Link>
								</li>
								<li>
									<Link to='/products' className="o-footer-link t-18">Products</Link>
								</li>
								<li>
									<Link to='/contact' className="o-footer-link t-18">Contact</Link>
								</li>
								<li>
									<Link to='/about' className="o-footer-link t-18">About</Link>
								</li>
							</ul>
						</div>
					</div>

					<div className="o-col-lg-2">
						<div className="o-footer-item">
							<div className="o-footer-title">
								<p className="t-24">Useful Links</p>
							</div>
							<ul className="o-footer-list">
								<li>
									<Link to='/account' className="o-footer-link t-18">Account</Link>
								</li>
								<li>
									<Link to='/messages' className="o-footer-link t-18">Messages</Link>
								</li>
								<li>
									<Link to='/orders' className="o-footer-link t-18">Orders</Link>
								</li>
								<li>
									<Link to='/wishlist' className="o-footer-link t-18">Wishlist</Link>
								</li>
							</ul>
						</div>
					</div>

					<div className="o-col-lg-4">
						<div className="o-footer-item">
							<div className="o-footer-title">
								<p className="t-24">Contact</p>
							</div>
							<ul className="o-footer-list">
								<li className="flex align-base">
									<div className="mr-10">
										<LocationIcon />
									</div>
									<p className="t-18">123 Main Street, Anytown, CA 12345 - CANADA.</p>
								</li>
								<li className="flex align-base">
									<div className="mr-10">
										<PhoneAltIcon />
									</div>
									<p className="t-18">+190939389329</p>
								</li>
								<li className="flex align-base">
									<div className="mr-10">
										<EnvelopeIcon />
									</div>
									<p className="t-18">info@obslend.com</p>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}

