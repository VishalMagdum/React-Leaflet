export const employeesReducer = (state = { employees: [] }, action) => {
    switch (action.type) {
        case "LOAD_ALL_EMPLOYEES_REQUEST":

            return {
                loading: true,
                employees: []
            };
        case "LOAD_ALL_EMPLOYEES_SUCCESS":

            return {
                ...state,
                loading: false,
                employees: action.payload

            };

        case "LOAD_ALL_EMPLOYEES_FAIL":

            return {

                loading: false,
                error: action.payload
            };

        case "CLEAR_ERRORS":
            return {
                ...state,
                error: null,
            };

        default:
            return state;
    }

}

export const employeeDetailsReducer = (state = { employee: {} }, action) => {

    switch (action.type) {
        case "EMPLOYEE_DETAILS_REQUEST":
            return {
                loading: true,
                ...state,
            }
        case "EMPLOYEE_DETAILS_SUCCESS":
            return {
                loading: false,
                employee: action.payload,

            }

        case "EMPLOYEE_DETAILS_FAIL":
            return {
                loading: false,
                error: action.payload
            }
        case "CLEAR_ERRORS":
            return {
                ...state,
                error: null,
            }

        default:
            return state;
    }
}