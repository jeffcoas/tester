import { Form, Input, Button } from 'antd';
import React from 'react';

const layout = {
	labelCol: {
	  span: 8,
	},
	wrapperCol: {
	  span: 16,
	},
  };

class ExpenseForm extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
		}
	}

	render() {

		return (
			<Form
				{...layout}
				layout="vertical"
				autoComplete="off"
				style={{
					margin: '24px',
					maxWidth: 600,
				}}
			>
				<Form.Item
					name="name"
					label="Expense Description"
					rules={[
						{
							required: true,
						}
					]}
				>
					<Input/>
				</Form.Item>

				<Form.Item
					name="amount"
					label="Amount"
					rules={[
						{
							required: true,
						}
					]}
				>
					
					<Input/>
				</Form.Item>

				<Form.Item
					name="submit"
				>
					<Button
						type="primary"
						>
							Submit
						</Button>
				</Form.Item>

			</Form>
		  );
	}
}


export default ExpenseForm;
