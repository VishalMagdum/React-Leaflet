import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getEmployeebyId } from '../action/action'
import './EmployeeDetails.css'
function EmployeeDetails() {
    const dispatch = useDispatch()
    const { id } = useParams()
    const { employee } = useSelector((state) => state.employee)
    useEffect(() => {
        dispatch(getEmployeebyId(id))
    }, [id, dispatch])

    return (
        <div className='container'>
            <div>
                <img src={employee.avatar}></img>
            </div>
            <div><h1>Name : {employee.name}</h1>
                <h1>Department : {employee.Dept}</h1>
                <h1>City : {employee.city}</h1></div>
        </div>
    )
}

export default EmployeeDetails