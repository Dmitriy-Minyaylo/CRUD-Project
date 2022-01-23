import EmployeesListItem from '../employees-list-item/employees-list-item'

import './employees-list.css'

const EmployeesList = ({ data }) => {
	const elems = data.map(item => {
		// вместо props в данном случае можно исп spread - {...item}
		return (
			<EmployeesListItem
				name={item.name}
				salary={item.salary}
				incEmp={item.incEmp}
			/>
		)
	})
	return <ul className='app-list list-group'>{elems}</ul>
}

export default EmployeesList
