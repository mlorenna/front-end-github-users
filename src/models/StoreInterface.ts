import { RouterState } from 'connected-react-router';
import AuthRequestInterface from './AuthRequestInterface'

export default interface IStore{
    readonly router: RouterState,
    readonly authRequest: AuthRequestInterface
}