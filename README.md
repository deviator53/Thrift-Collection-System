
Outline of Thrift System Features

Introduction:
The Thrift System, developed with ReactJS, Typescript, ReduxToolkit, MUI, and TailwindCSS, aims to provide users with a seamless financial management experience.

Development Stack:
- ReactJS 
- Typescript 
- ReduxToolkit 
- MUI 
- TailwindCSS 

Limitations:
Due to the unavailability of endpoints, a JSON Mock Server was used to simulate user authentication and data population for savings, loans, and fees.

User Authentication Details for Login:
- Admin:
  - First Name: David
  - Last Name: Bradford
  - Email: bradforddavid082@gmail.com
  - Password: qwerty
  - Role: Admin

- User 1:
  - First Name: Larry
  - Last Name: Gaga
  - Email: larrygaga@gmail.com
  - Password: gladiator12
  - Role: User

- User 2:
  - First Name: Sarah
  - Last Name: Connor
  - Email: sarahconnor1@gmail.com
  - Password: terminator1234
  - Role: User

Dashboard Features:
- User Authentication:
  - Users can log in with provided details.
  - Admin and user roles are distinguished.
  - Admins can view all users and details of a single user.

- Wallet Management:
  - Users can fund/top up their wallet.
  - Redirects to a Paystack modal for test payment.

- Dashboard Overview:
  - Displays total savings, loans, and transaction history.

- Loan Application:
  - Users can apply for one of three available loans.

- Savings Plan:
  - Users can create a savings plan.

- Data Viewing:
  - Users can view loan requests, fees, etc.


Deployed URL for Preview:

-FrontEnd: https://thrift-collection-system.vercel.app/
-Mock Server: https://thrift-collection-system-server.vercel.app/
