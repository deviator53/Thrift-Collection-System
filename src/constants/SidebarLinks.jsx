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
        key: 'organization',
        label: 'Switch Organization',
        path: 'organization',
        icon: BRIEFCASE ,
        dropdown:<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 14l-4-4h8z" fill="rgba(154,154,165,1)"/></svg>,
    },
    {
        key: 'dashboard',
        label: 'Dashboard',
        path: '/dashboard',
        icon: HOME ,
    }
]

export const CUSTOMER_SIDEBAR_LINKS = [
    {
        key: 'users',
        label: 'Users',
        path: 'users',
        icon: USER,
    },
    {
        key: 'guarantors',
        label: 'Guarantors',
        path: 'guarantors',
        icon: GROUPUSER
    },
    {
        key: 'loans',
        label: 'Loans',
        path: 'loans',
        icon: LOAN
    },
    {
        key: 'decision',
        label: 'Decisions Models',
        path: 'decision',
        icon: HANDSHAKE
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
        key: 'whitelist',
        label: 'Whitelist',
        path: 'whitelist',
        icon: USERCHECK
    },
    {
        key: 'karma',
        label: 'Karma',
        path: 'karma',
        icon: USERCANCEL
    }
]

export const BUSINESS_SIDEBAR_LINKS = [ 
    {
        key: 'b.organization',
        label: 'Organization',
        path: 'business',
        icon: BRIEFCASE
    },
    {
        key: 'products',
        label: 'Loan Products',
        path: 'products',
        icon: REQUEST
    },
    {
        key: 's.products',
        label: 'Savings Products',
        path: 'savings-products',
        icon: SAVINGSPRODUCT
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
        path: 'karma',
        icon: SERVICES
    },
    {
        key: 'account',
        label: 'Service Account',
        path: 'service-account',
        icon: SERVICEACCOUNT
    },
    {
        key: 'settlements',
        label: 'Settlements',
        path: 'settlements',
        icon: SETTLEMENTS
    },
    {
        key: 'reports',
        label: 'Reports',
        path: 'reports',
        icon: REPORTS
    }
]

export const SETTINGS_SIDEBAR_LINKS = [
    {
        key: 'preferences',
        label: 'Preferences',
        path: 'preferences',
        icon: PREFERENCES
    },
    {
        key: 'pricing',
        label: 'Fees and Pricing',
        path: 'pricing',
        icon: PRICING
    },
    {
        key: 'audit',
        label: 'Audit Logs',
        path: 'audit',
        icon: AUDIT
    },
    {
        key: 'message',
        label: 'System Message',
        path: 'message',
        icon: SYSTEMMESSAGE
    }
]

export const SIGNOUT = [
    {
        key: 'logout',
        label: 'Logout',
        path: 'logout',
        icon: LOGOUT
    }
    
]