import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { Card, Table, Input, Menu, notification } from 'antd';
import { EyeOutlined, SearchOutlined } from '@ant-design/icons';
import EllipsisDropdown from 'components/shared-components/EllipsisDropdown';
import Flex from 'components/shared-components/Flex'
import utils from 'utils';
import { getEvents } from 'redux/actions/events';

const EventList = (props) => {	
	
	const { getEvents, events } = props;
	let history = useNavigate();
	const [list, setList] = useState([]);
	const [selectedRows, setSelectedRows] = useState([])
	const [selectedRowKeys, setSelectedRowKeys] = useState([])

	useEffect(() => {
		getEvents();
	}, [getEvents]);

	useEffect(() => {
		setList(events)
	}, [events]);

	const dropdownMenu = row => (
		<Menu>
			<Menu.Item key={0} onClick={() => viewDetails(row)}>
				<Flex alignItems="center">
					<EyeOutlined />
					<span className="ml-2">View Details</span>
				</Flex>
			</Menu.Item>
		</Menu>
	);
	
	const viewDetails = row => {
		history.push(`/app/admin/bookings/edit/${row._id}`)
	}

	const tableColumns = [
		{
			title: 'Booking No',
			dataIndex: '_id',
			sorter: (a, b) => utils.antdTableSorter(a, b, '_id')
		},
		{
			title: 'Total Amount',
			dataIndex: 'totalAmount',
			render: totalAmount => (
				<>
					{`$${utils.formatNumber(totalAmount)}`}
				</>
			),
			sorter: (a, b) => utils.antdTableSorter(a, b, 'totalAmount')
		},
		{
			title: 'Status',
			dataIndex: 'status',
			sorter: (a, b) => utils.antdTableSorter(a, b, 'status')
		},
		{
			title: 'Booked by',
			dataIndex: 'userID',
			render: userID => (
				<>
					{`${userID.firstName} ${userID.lastName}`} 
				</>
			),
			sorter: (a, b) => utils.antdTableSorter(a, b, 'userID')
		},
		{
			title: '',
			dataIndex: 'actions',
			render: (_, elm) => (
				<div className="text-right">
					<EllipsisDropdown menu={dropdownMenu(elm)}/>
				</div>
			)
		}
	];

	const onSearch = e => {
		const value = e.currentTarget.value
		const searchArray = e.currentTarget.value? list : events
		const data = utils.wildCardSearch(searchArray, value)
		setList(data)
		setSelectedRowKeys([])
	}

	
		return (
			<Card>
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
		)
	// return <Loading cover="content"/>	
}




function mapStateToProps({ bookingReducer }){
	const { events } = bookingReducer;
	return { events };
}

const mapDispatchToProps = { getEvents }

export default connect(mapStateToProps, mapDispatchToProps
)(EventList);

// export default EventList;
