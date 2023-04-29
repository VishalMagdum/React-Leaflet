import axios from "axios";

export const getallEmployees = () => async (dispatch) => {
    try {
        dispatch({ type: "LOAD_ALL_EMPLOYEES_REQUEST" });


        const { data } = await axios.get(
            `http://localhost:5100/allemployees`,

        );
        console.log(data)
        dispatch(
            { type: "LOAD_ALL_EMPLOYEES_SUCCESS", payload: data }
        )


    } catch (error) {
        dispatch({ type: "LOAD_ALL_EMPLOYEES_FAIL", payload: error.response.data.message });
        console.log(error)
    }

}

export const getEmployeebyId = (id) => async (dispatch) => {
    try {
        dispatch({ type: "EMPLOYEE_DETAILS_REQUEST" });

        const { data } = await axios.get(`http://localhost:5100/employee/${id}`)

        dispatch({
            type: "EMPLOYEE_DETAILS_SUCCESS",
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: "EMPLOYEE_DETAILS_FAIL",
            payload: error.response.data.message,
        })

    }
}

export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: "CLEAR_ERRORS"
    });
}