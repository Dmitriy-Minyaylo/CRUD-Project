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
			term: '',
			filter: 'all',
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
		this.setState(({ data }) => ({
			data: data.map(item => {
				if (item.id === id) {
					return { ...item, [prop]: !item[prop] }
				}
				return item
			}),
		}))
	}

	searchEmp = (items, term) => {
		if (term.length === 0) {
			return items
		}
		return items.filter(item => {
			return item.name.indexOf(term) > -1
		})
	}

	onUpdateSearch = term => {
		// если передаем одинаковые названия ключа и заначения, то можно сократить до term
		this.setState({ term: term })
	}

	filterPost = (items, filter) => {
		switch (filter) {
			case 'incReady':
				return items.filter(item => item.incReady)
			case 'moreThen1000':
				return items.filter(item => item.salary > 1000)
			default:
				return items
		}
	}

	onFilterSelect = filter => {
		this.setState({ filter })
	}

	render() {
		const { data, term, filter } = this.state
		const employees = this.state.data.length
		const incEmployees = this.state.data.filter(item => item.increase).length
		// комбинированный нужный результат сначала идет поиск в data. Потом filter
		const visibleData = this.filterPost(this.searchEmp(data, term), filter)

		return (
			<div className='app'>
				<AppInfo employees={employees} incEmployees={incEmployees} />
				<div className='search-panel'>
					<SearchPanel onUpdateSearch={this.onUpdateSearch} />
					<AppFilter filter={filter} onFilterSelect={this.onFilterSelect} />
				</div>
				<EmployeesList
					data={visibleData}
					onDelete={this.deleteItem}
					onToggleProp={this.onToggleProp}
				/>
				<EmployeesAddForm data={this.state.data} onAdd={this.addItem} />
			</div>
		)
	}
}
export default App
