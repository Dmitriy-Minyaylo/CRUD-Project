import AppInfo from '../app-info/app-info'
import SearchPanel from '../search-panel/search-panel'
import AppFilter from '../app-filter/app-filter'
import EmployeesList from '../employees-list/employees-list'
import EmployeesAddForm from '../employees-add-form/employees-add-forn'

import './app.css'

function App() {
	const data = [
		{ name: 'Phillip', salary: 560, incEmp: false },
		{ name: 'Adolf', salary: 1560, incEmp: true },
		{ name: 'Masha', salary: 660, incEmp: false },
		{ name: 'Hanck', salary: 1060, incEmp: true },
		{ name: 'Bank', salary: 160, incEmp: true },
		{ name: 'Ha-backonck', salary: 1460, incEmp: true },
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
