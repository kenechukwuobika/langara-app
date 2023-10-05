import React from 'react'
import { Input, Row, Col, Card, Form } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { ImageSvg } from 'assets/svg'
import CustomIcon from 'components/util-components/CustomIcon'


const rules = {
	firstName: [
		{
			required: true,
			message: 'first name is required',
		}
	],
	lastName: [
		{
			required: true,
			message: 'last name is required',
		}
	],
	role: [
		{
			required: true,
			message: 'role is required',
		}
	],
	email: [
		{
			required: true,
			message: 'email is required',
		}
	],
	phoneNumber: [
		{
			required: true,
			message: 'phone number is required',
		}
	],
	password: [
		{
			required: true,
			message: 'password is required',
		}
	],
	passwordConfirm: [
		{
			required: true,
			message: 'password Confirm is required',
		}
	],
}

const GeneralField = props => {
	return(
	<Row gutter={16}>
		<Col xs={24} sm={24} md={17}>
			<Card title="Basic Info">
				<Form.Item name="_id" label="Booking No">
					<Input placeholder="Booking No" readOnly={true} />
				</Form.Item>
				<Form.Item name="totalAmount" label="Total Amount">
					<Input placeholder="Total Amount" readOnly={true} />
				</Form.Item>
				<Form.Item name="status" label="Status">
					<Input placeholder="Status" readOnly={true} />
				</Form.Item>
				<Form.Item name="userID" label="Booked By">
					<Input placeholder="Booked By" readOnly={true} />
				</Form.Item>
			</Card>
		</Col>
		<Col xs={24} sm={24} md={7}>
			
		</Col>
	</Row>)
}

export default GeneralField
