export interface UserInfo {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    phoneNumber: string;
    role: string;
  }
  
  export interface Transaction {
    id: number;
    name: string;
    amount: number;
    status: string;
    date: string;
  }
  
  export interface Savings {
    id: number;
    title: string;
    amount: number;
    savings_type: string;
    date: string;
  }
  
  export interface Loan {
    id: number;
    title: string;
    amount: number;
    status: string;
    date: string;
  }
  
  export interface Fee {
    id: number;
    description: string;
    amount: number;
    date: string;
  }
  
  export interface Wallet {
    balance: number;
  }
  
  export interface UserState {
    id: number;
    info: UserInfo;
    transactions: {
      allTransactions: Transaction[];
      creditTransactions: Transaction[];
      debitTransactions: Transaction[];
    };
    savings: Savings[];
    loans: Loan[];
    fees: Fee[];
    wallet: Wallet;
  }
  
  export interface RootState {
    users: {
      user: UserState[];
      loggedInUser: UserState;
      status: string;
    };

    
  }
  
  