import IAction from "../../models/ActionInterface"
import AuthRequest from "../../models/AuthRequestInterface"

const INITIAL_STATE: AuthRequest = {}

const authReducer = (state: AuthRequest = INITIAL_STATE, action: IAction<any>): AuthRequest=>{
        return state
}

export default authReducer