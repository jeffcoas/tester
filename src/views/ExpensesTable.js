import { Space, Table, Tag } from 'antd';
import React from 'react';

class ExpensesTable extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			datasource: [
				{
					key: 1,
					name: "Lunch with Mike",
					amount: 35.49,
					currency: "USD",
					tags: [
						"lunch",
						"friends"
					]
				},
				{
					key: 2,
					name: "Shopping - Target",
					amount: 132.99,
					currency: "USD",
					tags: [
						"clothes",
						"filter"
					]
				}
			]
		}

		this.columns = [
			{
				title: "Expense Name",
				dataIndex: "name",
				key: "name"
			},
			{
				title: "Amount",
				dataIndex: "amount",
				key: "amount"
			},
			{
				title: "Tags",
				dataIndex: "tags",
				key: "tags",
				render: (_, {tags}) => (
					<>
						{
							tags.map((tag) => {
								return (
									<Tag color='geekblue' key={tag}>
										{tag}
									</Tag>
								);
							})
						}
					</>
				)
			},
			{
				title: "Action",
				key: "action",
				render: (_, record) => (
					<Space size="middle">
						<a href='https://www.google.com'>Edit</a>
						<a href='https://www.google.com'>Delete</a>
					</Space>
				)
			}
		]
	}
	
	render() {

		return (
			<Table
				bordered
				columns={this.columns}
				dataSource={this.state.datasource}
				/>
		  );
	}
}


export default ExpensesTable;
