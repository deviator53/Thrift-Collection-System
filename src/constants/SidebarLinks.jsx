import HOME from "../images/home.png";
import LOAN from "../images/sack 1.png";
import PIGGYBANK from "../images/piggy-bank 1.png";
import REQUEST from "../images/Group 104.png";
import FEES from "../images/coins-solid 1.png";
import SERVICES from "../images/galaxy 1.png";
import PREFERENCES from "../images/sliders-h 1.png";
import LOGOUT from "../images/sign-out 1.png";




export const DASHBOARD_SIDEBAR_LINKS = [
    {
        key: 'dashboard',
        label: 'Dashboard',
        path: '/dashboard',
        icon: HOME ,
    },
    {
        key: 'loans',
        label: 'Loans',
        path: 'loans',
        icon: LOAN
    },
    {
        key: 'savings',
        label: 'Savings',
        path: 'savings',
        icon: PIGGYBANK
    },
    {
        key: 'loan',
        label: 'Loan Requests',
        path: 'loan',
        icon: REQUEST
    },
    {
        key: 'fees',
        label: 'Fees and Charges',
        path: 'fees',
        icon: FEES
    },
    {
        key: 'services',
        label: 'Services',
        path: 'services',
        icon: SERVICES
    },
    {
        key: 'preferences',
        label: 'Preferences',
        path: 'preferences',
        icon: PREFERENCES
    },
]


export const SIGNOUT = [
    {
        key: 'logout',
        label: 'Logout',
        path: 'logout',
        icon: LOGOUT
    }
    
]