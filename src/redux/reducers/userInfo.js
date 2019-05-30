import { USER_INFO } from '../actions/userInfo';

const data = {
    account: '',
    password: ''
};

export default function reducer(state = data, action) {
    switch (action.type) {
        case USER_INFO:
            return {
                account: action.data.account,
                password: action.data.password
            };
        default:
            return state;
    }
}