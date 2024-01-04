import React, { useState, useEffect } from 'react'
import { connect } from "react-redux";

import PageHeaderAlt from 'components/layout-components/PageHeaderAlt'
import { Tabs, Form, Row, Col, Card, Table, Input  } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import Flex from 'components/shared-components/Flex'
import GeneralField from './GeneralField'
import { getBooking, createBooking, updateBooking } from "redux/actions/booking"
import utils from 'utils'

const { TabPane } = Tabs;
const ADD = 'ADD'
const EDIT = 'EDIT'

const BookingForm = props => {
	const [list, setList] = useState([]);

	const { mode = EDIT, param, booking, getBooking } = props

	const [form] = Form.useForm();

	useEffect(() => {
			const { id } = param
			getBooking(id)
  	}, [param, getBooking]);

	  useEffect(() => {
		if(booking) {
			setList(booking.bookingItems)
		}
  	}, [booking]);

	useEffect(() => {
    	if(booking) {
			form.setFieldsValue({
				_id: booking._id,
				totalAmount: booking.totalAmount,
				status: booking.status,
				userID: `${booking.userID.firstName} ${booking.userID.lastName}`,
			});
		}
	}, [booking, form])

	const tableColumns = [
		{
			title: 'Item No',
			dataIndex: '_id',
			sorter: (a, b) => utils.antdTableSorter(a, b, '_id')
		},
		{
			title: 'Product Name',
			dataIndex: 'productID',
			render: productID => (
				<>
					{productID ? utils.titleCase(productID.name) : 'Deleted Product'}
				</>
			),
			sorter: (a, b) => utils.antdTableSorter(a, b, '_id')
		},
		{
			title: 'Amount',
			dataIndex: 'amount',
			render: amount => (
				<>
					{`$${utils.formatNumber(amount)}`}
				</>
			),
			sorter: (a, b) => utils.antdTableSorter(a, b, 'Amount')
		},
		{
			title: 'Lender',
			dataIndex: 'lenderID',
			render: lenderID => (
				<>
					{utils.titleCase(`${lenderID.firstName} ${lenderID.lastName}`)}
				</>
			),
			sorter: (a, b) => utils.antdTableSorter(a, b, 'lenderID')
		},
		{
			title: 'Start Date',
			dataIndex: 'startDate',
			render: startDate => (
				<>
					{ (startDate.split('T')[0]).replace(/['"]+/g, '') }
				</>
			),
			sorter: (a, b) => utils.antdTableSorter(a, b, 'startDate')
		},

		{
			title: 'End Date',
			dataIndex: 'endDate',
			render: endDate => (
				<>
					{ (endDate.split('T')[0]).replace(/['"]+/g, '') }
				</>
			),
			sorter: (a, b) => utils.antdTableSorter(a, b, 'endDate')
		}
	];


	const onSearch = e => {
		const value = e.currentTarget.value
		const searchArray = e.currentTarget.value? list : booking && booking.bookingItems
		const data = utils.wildCardSearch(searchArray, value)
		setList(data)
	}

	return (
		<Row gutter={24}>
			<Col xs={24} sm={24} md={24} lg={24} className="mb-24">
			<Form
				layout="vertical"
				form={form}
				name="advanced_search"
				className="ant-advanced-search-form"
				initialValues={{
					heightUnit: 'cm',
					widthUnit: 'cm',
					weightUnit: 'kg'
				}}
			>
				<PageHeaderAlt className="border-bottom" overlap>
					<div className="container">
						<Flex className="py-2" mobileFlex={false} justifyContent="between" alignItems="center">
							<h2 className="mb-3">{mode === 'ADD'? 'Add New Booking' : `Edit Booking`} </h2>
						</Flex>
					</div>
				</PageHeaderAlt>
				<div className="container">
					<Tabs defaultActiveKey="1" style={{marginTop: 30}}>
						<TabPane tab="General" key="1">
							<GeneralField 
								mode={mode}
							/>
						</TabPane>
					</Tabs>
				</div>
			</Form>
			</Col>

			<Col xs={24} sm={24} md={24} lg={24} className="mb-24">
				<Card title="Products">
				<Flex alignItems="center" justifyContent="between" mobileFlex={false}>
					<Flex className="mb-1" mobileFlex={false}>
						<div className="mr-md-3 mb-3">
							<Input placeholder="Search" prefix={<SearchOutlined />} onChange={e => onSearch(e)}/>
						</div>
					</Flex>
				</Flex>
				<div className="table-responsive">
					<Table 
						columns={tableColumns} 
						dataSource={list} 
						rowKey='_id' 
					/>
				</div>
				</Card>
			</Col>
		</Row>
	)
}

const mapStateToProps = ({ bookingReducer }) => {
	const { booking, message } = bookingReducer;
	return {
		booking, message
	}
}

const mapDispatchToProps = {
	getBooking, createBooking, updateBooking
}

export default connect(mapStateToProps, mapDispatchToProps)(BookingForm);
