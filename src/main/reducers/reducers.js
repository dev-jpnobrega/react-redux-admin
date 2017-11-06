import { combineReducers } from 'redux';
import { reducer as toastrReducer } from 'react-redux-toastr';
import authReducer from  '../../components/auth/auth-reducer';
import clientReducer from  '../../components/client/client-reducer';
import DashboardReducer from  '../../components/dashboard/dashboard-reducer';

export default combineReducers({
    toastr: toastrReducer,
    auth: authReducer,
    clients: clientReducer,
    dashboard: DashboardReducer
});