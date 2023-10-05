import React from 'react'
import Btn from 'components/shared-components/Btn';

export default function NewsLetter() {
	return (
		<div className="o-newsletter">
			<div className="o-row flex-md align-center">
			<div className="o-col-md-6">
				<div className="o-newsletter-heading">
				<p className="t-43 mb-0">Subscribe To Our Newsletter</p>
				</div>
			</div>

			<div className="o-col-md-6">
				<form className="o-form-newsletter">
					<input type="text" className="o-input o-input-newsletter" placeholder="Your email address" />
					<div className="o-newsletter-submit">
						<Btn
							link=''
							backgroundColor='#2A4272'
							textSize={24}
							rounded={true}
						>
							Subscribe
						</Btn>
					</div>
				</form>
			</div>
			</div>
		</div>
	)
}

