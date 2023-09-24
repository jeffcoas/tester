import logo from './logo.svg';
import './App.css';

import React from 'react';
import { Menu } from 'antd';
import ExpensesTable from './views/ExpensesTable';
import ExpenseForm from './views/ExpenseForm';

const menuItems = [
	{
		label: "Create New Expense",
		key:"expense_create",
	},
	{
		label: "View Expenses",
		key:"expenses_view"
	}
];

class App extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			menuItem: "expense_create"
		}
	}

	onClick = (event) => {
		this.setState({
			menuItem: event.key,
		})
	};
	
	render() {

		const {menuItem} = this.state;

		return (
			<div
				style={{
					height:'100%',
					backgroundColor:"white"
				}}
			>
				<Menu 
				items = {menuItems}
				mode="horizontal"
				onClick={this.onClick}
				selectedKeys={[menuItem]}
				/>
			
				{(menuItem == "expenses_view") && <ExpensesTable/>}
				{(menuItem == "expense_create" && <ExpenseForm/>)}
			</div>
		  );
	}
}


export default App;
