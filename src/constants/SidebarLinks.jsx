import React from 'react';
import HOME from "../images/home.png";
import BRIEFCASE from "../images/briefcase.png";
import USER from "../images/user-friends 1.png";
import GROUPUSER from "../images/users 1.png";
import LOAN from "../images/sack 1.png";
import HANDSHAKE from "../images/handshake-regular 1.png";
import PIGGYBANK from "../images/piggy-bank 1.png";
import REQUEST from "../images/Group 104.png";
import USERCHECK from "../images/user-check 1.png";
import USERCANCEL from "../images/user-times 1.png";
import SAVINGSPRODUCT from "../images/np_bank_148501_000000 1.png";
import FEES from "../images/coins-solid 1.png";
import TRANSACTIONS from "../images/icon.png";
import SERVICES from "../images/galaxy 1.png";
import SERVICEACCOUNT from "../images/user-cog 1.png";
import SETTLEMENTS from "../images/scroll 1.png";
import REPORTS from "../images/chart-bar 2.png";
import PREFERENCES from "../images/sliders-h 1.png";
import PRICING from "../images/badge-percent 1.png";
import AUDIT from "../images/clipboard-list 1.png";
import SYSTEMMESSAGE from "../images/tire 1.png";
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
        key: 'transactions',
        label: 'Transactions',
        path: 'transactions',
        icon: TRANSACTIONS
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