import ACTIONS from "./actions";

const evaluate = (state) => {
    let { lastOperand, currentOperand, operation } = state;
    let last = parseFloat(lastOperand), current = parseFloat(currentOperand);
    // console.log(state);
    switch (operation) {
        case '+':
            return (last + current).toString();
        case '-':
            return (last - current).toString();
        case '×':
            return (last * current).toString();
        case '÷':
            return (last / current).toString();
        default:
            return "";
    }
    // let res = "";
    // switch (operation) {
    //     case '+':
    //         res = last + current;
    //         break;
    //     case '-':
    //         res = last - current;
    //         break;
    //     case '×':
    //         res = last * current;
    //         break;
    //     case '÷':
    //         res = last / current;
    //         break;
    // }
    // return res.toString();
}

const reducer = (state = {
    currentOperand: "",
    lastOperand: "",
    operation: "",
    over: false,
}, action) => {
    switch (action.type) {
        case ACTIONS.ADD_DIGIT:
            if (state.over)
                return {
                    ...state,
                    currentOperand: action.digit,
                    over: false,
                };
            if (state.currentOperand === '0' && action.digit === "0")
                return state;
            if (state.currentOperand.includes('.') && action.digit === ".")
                return state;
            if (state.currentOperand === '0' && action.digit !== ".")
                return {
                    ...state,
                    currentOperand: action.digit,
                }
            if (state.currentOperand === "" && action.digit === ".")
                return {
                    ...state,
                    currentOperand: "0.",
                }
            return {
                ...state,
                currentOperand: state.currentOperand + action.digit,
            }
        case ACTIONS.DELETE_DIGIT:
            if (state.over) {
                return {
                    ...state,
                    currentOperand: "",
                    over: false,
                }
            }
            if (state.currentOperand === "")
                return state;
            return {
                ...state,
                currentOperand: state.currentOperand.slice(0, -1),
            };
        case ACTIONS.CHOOSE_OPERATION:
            if (state.lastOperand === "" && state.currentOperand === "")
                return state;
            if (state.lastOperand === "")
                return {
                    ...state,
                    lastOperand: state.currentOperand,
                    operation: action.operation,
                    currentOperand: "",
                };
            if (state.currentOperand === "")
                return {
                    ...state,
                    operation: action.operation,
                };
            return {
                ...state,
                lastOperand: evaluate(state),
                operation: action.operation,
                currentOperand: "",
            };
        case ACTIONS.CLEAR:
            return {
                ...state,
                lastOperand: "",
                currentOperand: "",
                operation: "",
            };
        case ACTIONS.EVALUATE:
            if (state.currentOperand === "" ||
                state.lastOperand === "" ||
                state.operation === "")
                return state;
            return {
                ...state,
                currentOperand: evaluate(state),
                operation: "",
                lastOperand: "",
                over: true,
            }
        default: return state;
    }
};

export default reducer;