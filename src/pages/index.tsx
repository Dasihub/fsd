import { FC } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { TaskListPages } from './task-list-pages'
import { TaskDetailsPages } from './task-details-pages'

export const Routing: FC = () => {
	return (
		<Routes>
			<Route path='/task/:id' element={<TaskDetailsPages />} />
			<Route path='/task-list' element={<TaskListPages />} />
			<Route path='/' element={<Navigate to='/task-list' />} />
		</Routes>
	)
}
