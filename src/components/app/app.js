import AppInfo from '../app-info/app-info'
import SearchPanel from '../search-panel/search-panel'
import AppFilter from '../app-filter/app-filter'
import EmployeesList from '../employees-list/employees-list'
import EmployeesAddForm from '../employees-add-form/employees-add-forn'

import './app.css'

function App() {
	const data = [
		{ name: 'Phillip', salary: 560, increase: false, id: 1 },
		{ name: 'Adolf', salary: 1560, increase: true, id: 2 },
		{ name: 'Masha', salary: 660, increase: false, id: 3 },
		{ name: 'Hanck', salary: 1060, increase: true, id: 4 },
		{ name: 'Bank', salary: 160, increase: true, id: 5 },
		{ name: 'Ha-backonck', salary: 1460, increase: true, id: 6 },
	]

	return (
		<div className='app'>
			<AppInfo />
			<div className='search-panel'>
				<SearchPanel />
				<AppFilter />
			</div>
			<EmployeesList data={data} />
			<EmployeesAddForm />
		</div>
	)
}

export default App
