import { Component } from 'react'

import AppInfo from '../app-info/app-info'
import SearchPanel from '../search-panel/search-panel'
import AppFilter from '../app-filter/app-filter'
import EmployeesList from '../employees-list/employees-list'
import EmployeesAddForm from '../employees-add-form/employees-add-forn'

import './app.css'

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			data: [
				{
					name: 'Phillip',
					salary: 560,
					increase: false,
					incReady: false,
					id: 1,
				},
				{ name: 'Adolf', salary: 1560, increase: true, incReady: false, id: 2 },
				{ name: 'Masha', salary: 660, increase: false, incReady: true, id: 3 },
				{ name: 'Hanck', salary: 1060, increase: true, incReady: false, id: 4 },
				{ name: 'Bank', salary: 160, increase: true, incReady: false, id: 5 },
				{
					name: 'Ha-banck',
					salary: 1460,
					increase: true,
					incReady: false,
					id: 6,
				},
			],
		}
		this.maxId = 7
	}
	deleteItem = id => {
		this.setState(({ data }) => {
			// длинный способ получения нового массива
			// const index = data.findIndex(elem => elem.id === id)
			// const before = data.slice(0, index)
			// const after = data.slice(index + 1)
			// const newArr = [...before, ...after]
			return { data: data.filter(item => item.id !== id) }
		})
	}
	addItem = (name, salary) => {
		const newItem = {
			name,
			salary,
			increase: false,
			incReady: false,
			id: this.maxId++,
		}
		this.setState(({ data }) => {
			const newArr = [...data, newItem]
			return {
				data: newArr,
			}
		})
	}

	onToggleProp = (id, prop) => {
		this.setState(({ data }) => {
			data: data.map(item => {
				if (item.id === id) {
					return { ...item, [prop]: !item[prop] }
				}
				return item
			})
		})
	}

	render() {
		const employees = this.state.data.length
		const incEmployees = this.state.data.filter(item => item.increase).length
		return (
			<div className='app'>
				<AppInfo employees={employees} incEmployees={incEmployees} />
				<div className='search-panel'>
					<SearchPanel />
					<AppFilter />
				</div>
				<EmployeesList
					data={this.state.data}
					onDelete={this.deleteItem}
					onToggleProp={this.onToggleProp}
				/>
				<EmployeesAddForm data={this.state.data} onAdd={this.addItem} />
			</div>
		)
	}
}
export default App
