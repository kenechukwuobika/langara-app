import React, {useState, useEffect, useContext} from 'react'
import { useNavigate } from "react-router-dom";
import { Card, Table, Input, Menu, notification } from 'antd';
import { EyeOutlined, SearchOutlined } from '@ant-design/icons';

import EllipsisDropdown from 'components/shared-components/EllipsisDropdown';
import Flex from 'components/shared-components/Flex'

import { getEvents } from 'services/eventService';
import EventContext from 'contexts/EventContext';

import utils from 'utils';

const EventList = (props) => {	
	const [list, setList] = useState([]);
	const [selectedRows, setSelectedRows] = useState([])
	const [selectedRowKeys, setSelectedRowKeys] = useState([])
	let history = useNavigate();

    const { events, setEvents } = useContext(EventContext);

	useEffect(() => {
		(async () => {
            const keiks = await getEvents();
            setEvents(keiks)
            console.log(keiks)
        })()
	}, []);

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
		history.push(`/app/admin/events/edit/${row._id}`)
	}

	const tableColumns = [
		{
            title: 'RowHead',
            dataIndex: 'key',
            rowScope: 'row',
			sorter: (a, b) => utils.antdTableSorter(a, b, 'key')
        },
		
		{
			title: 'Text',
			dataIndex: 'text',
			sorter: (a, b) => utils.antdTableSorter(a, b, 'text')
		},
        {
			title: 'Link',
			dataIndex: 'link',
			sorter: (a, b) => utils.antdTableSorter(a, b, 'link')
		},
        {
			title: 'Type',
			dataIndex: 'type',
			sorter: (a, b) => utils.antdTableSorter(a, b, 'type')
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

export default EventList;