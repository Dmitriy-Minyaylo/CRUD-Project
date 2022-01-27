import EmployeesListItem from '../employees-list-item/employees-list-item'

import './employees-list.css'

const EmployeesList = ({ data }) => {
	const elems = data.map(item => {
		const { id, ...itemProps } = item
		// вместо name={item.name} в данном случае можно исп spread - {...item}
		return <EmployeesListItem key={id} {...itemProps} />
	})
	return <ul className='app-list list-group'>{elems}</ul>
}

export default EmployeesList
