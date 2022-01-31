import './app-info.css'

const AppInfo = ({ employees, incEmployees }) => {
	return (
		<div className='app-info'>
			<h1>Учет сотрудников в компании Global-Evil</h1>
			<h2>Общее число сотрудников: {employees} </h2>
			<h2>Премию получат: {incEmployees} </h2>
		</div>
	)
}

export default AppInfo
