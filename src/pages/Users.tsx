import React, { useState, useEffect, useDebugValue } from "react";
import UserIcon from "../images/user-icon.png";
import LoanIcon from "../images/loans-icon.png";
import ActiveUser from "../images/active-icon.png";
import SavingsIcon from "../images/savings-icon.png";
import {
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';import MoreVertIcon from "@mui/icons-material/MoreVert";
import Pagination from "@mui/material/Pagination";
import TablePagination from "@mui/material/TablePagination";
import { Stack, Box } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Axios from "axios";
import { Link } from "react-router-dom";

type User = {
  id: string;
  orgName: string;
  userName: string;
  phoneNumber: string;
  email: string;
  createdAt: string;
  status: string;
};

// type UserStatus = {
//   [userId: number]: string | "inactive";
// };


const Users = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null); // Keep track of selected user ID
  const [userStatus, setUserStatus] = useState<string>("Inactive");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await Axios.get(
          "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users"
        );
        console.log(response.data);
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
        setError("Failed to fetch users");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  
  const formatCreatedAt = (createdAt: string) => {
    const date = new Date(createdAt);
    const options = {
      year: "numeric" as const,
      month: "long" as const,
      day: "numeric" as const,
      hour: "numeric" as const,
      minute: "numeric" as const,
      hour12: true,
    };
    return new Intl.DateTimeFormat("en-US", options).format(date); // Format the date using Intl.DateTimeFormat
  };

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangePagination = (
    event: React.ChangeEvent<unknown>,
    newPage: number
  ) => {
    setPage(newPage - 1);
  };

  const startIndex = page * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;

  // const usersPerPage = 10;
  // const startIndex = (page - 1) * usersPerPage;
  // const endIndex = startIndex + usersPerPage;
  const displayedUsers = users.slice(startIndex, endIndex);

  console.log('displayed users are:');
  displayedUsers.forEach((user) => {
    console.log(JSON.stringify(user));
  });

  const handleMenuOpen = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    userId: string
  ) => {
    setAnchorEl(event.currentTarget);
    setSelectedUserId(userId); // Set the selected user ID
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

//   // Initialize user status object
// const initialUserStatus: UserStatus = {};

// // Function to update user status
// const setUserStatus = (userId: number, status: string) => {
//   // Update user status object
//   initialUserStatus[userId] = status;
// };

  const handleMenuItemClick = (menuItem: string, userId: string) => {
    switch (menuItem) {
      case "View Details":
        window.location.href = `/users/${userId}`;
        break;
      case "Blacklist User":
        setUsers((prevUsers) =>
          prevUsers.map((user) =>
            user.id === userId ? { ...user } : user
          )
        );
        setUserStatus("Blacklisted");
        handleMenuClose();
        break;
      case "Activate User":
        setUsers((prevUsers) =>
          prevUsers.map((user) => 
            user.id === userId ? { ...user } : user
          )
        );
        setUserStatus("Activated");
        handleMenuClose();
        break;
      default:
        setUsers((prevUsers) =>
          prevUsers.map((user) =>
            user.id === userId ? { ...user } : user
          )
        );
        break;
    }
    handleMenuClose();

  };


  return (
    <>
      <div className="p-5">
        <h2 className="text-[#213F7D] text-2xl font-semibold my-3">Users</h2>
        <div className="flex flex-wrap gap-7">
          <div className="w-[240px] h-[160px] bg-white shadow-md">
            <div className="p-6">
              <div className="w-[50px] h-[50px]">
                <img
                  src={UserIcon}
                  alt="userIcon"
                  className="w-full h-full object-fit"
                />
              </div>
              <p className="ml-2 my-2 text-[#545F7D]">USERS</p>
              <p className="ml-2 font-semibold text-lg text-[#213F7D]">{users.length}</p>
            </div>
          </div>

          <div className="w-[240px] h-[160px] bg-white shadow-md">
            <div className="p-6">
              <div className="w-[50px] h-[50px]">
                <img
                  src={ActiveUser}
                  alt="userIcon"
                  className="w-full h-full object-fit"
                />
              </div>
              <p className="ml-2 my-2 text-[#545F7D]">ACTIVE USERS</p>
              <p className="ml-2 font-semibold text-lg text-[#213F7D]">{users.length}</p>
            </div>
          </div>

          <div className="w-[240px] h-[160px] bg-white shadow-md">
            <div className="p-6">
              <div className="w-[50px] h-[50px]">
                <img
                  src={LoanIcon}
                  alt="userIcon"
                  className="w-full h-full object-fit"
                />
              </div>
              <p className="ml-2 my-2 text-[#545F7D]">USERS WITH LOANS</p>
              <p className="ml-2 font-semibold text-lg text-[#213F7D]">
                12,453
              </p>
            </div>
          </div>

          <div className="w-[240px] h-[160px] bg-white shadow-md">
            <div className="p-6">
              <div className="w-[50px] h-[50px]">
                <img
                  src={SavingsIcon}
                  alt="userIcon"
                  className="w-full h-full object-fit"
                />
              </div>
              <p className="ml-2 my-2 text-[#545F7D]">USERS WITH SAVINGS</p>
              <p className="ml-2 font-semibold text-lg text-[#213F7D]">
                102,453
              </p>
            </div>
          </div>
        </div>
        <div className="mt-[40px] pb-[100px]">
          <div className="w-full h-full  rounded-md shadow-md bg-white">
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>
                      ORGANIZATION{" "}
                      <IconButton>
                        <FilterListIcon />
                      </IconButton>
                    </TableCell>
                    <TableCell>
                      USERNAME{" "}
                      <IconButton>
                        <FilterListIcon />
                      </IconButton>
                    </TableCell>
                    <TableCell>
                      EMAIL{" "}
                      <IconButton>
                        <FilterListIcon />
                      </IconButton>
                    </TableCell>
                    <TableCell>
                      PHONE NUMBER{" "}
                      <IconButton>
                        <FilterListIcon />
                      </IconButton>
                    </TableCell>
                    <TableCell>
                      DATE JOINED{" "}
                      <IconButton>
                        <FilterListIcon />
                      </IconButton>
                    </TableCell>
                    <TableCell>
                      {" "}
                      STATUS{" "}
                      <IconButton>
                        <FilterListIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {error ? (
                    <div>Error: {error}</div>
                  ) : loading ? (
                    <div className="flex justify-center p-[40px] text-2xl font-bold">
                      Loading...
                    </div>
                  ) : (
                    displayedUsers?.map((user, index) => (
                      <TableRow key={index}>
                        <TableCell>{user.orgName}</TableCell>
                        <TableCell>{user.userName}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{user.phoneNumber}</TableCell>
                        <TableCell>{formatCreatedAt(user.createdAt)}</TableCell>
                        <TableCell>
                          <span className={`p-2 rounded-full ${
                            userStatus === "Inactive"
                            ? "bg-gray-200"
                            : userStatus === "Blacklisted"
                            ? "bg-red-200"
                            : userStatus === "Activated"
                            ? "bg-green-200"
                            :""
                          }`}>
                            {userStatus}
                          </span>
                        </TableCell>
                        <TableCell>
                          <IconButton
                          component="button"
                            onClick={(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => handleMenuOpen(event, user.id)}
                          >
                            <MoreVertIcon />
                          </IconButton>{" "}
                          <Menu
                              anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={handleMenuClose}
                            keepMounted
                          >
                            <MenuItem>
                              <div className="flex justify-center items-center"><span><IconButton><RemoveRedEyeOutlinedIcon /></IconButton></span> <Link to={`${user.id}`}><span>View Details</span></Link></div>
                            </MenuItem>
                            <MenuItem
                              onClick={() => handleMenuItemClick("Blacklist User", user.id)}
                            >
                              <div className="flex justify-center items-center"><span><IconButton><PersonAddAltIcon/></IconButton></span> <span>Blacklist User</span> </div>
                            </MenuItem>
                            <MenuItem
                              onClick={() => handleMenuItemClick("Activate User", user.id)}
                            >
                              <div className="flex justify-center items-center"><span className="ml-2"><PersonOutlineOutlinedIcon/></span><span className="ml-3">Activate User</span></div>
                            </MenuItem>
                          </Menu>
                        </TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
          <Stack
            direction="row"
            justifyContent="between"
            alignItems="center"
            spacing={2}
            mt={2}
          >
            <TablePagination
              component="div"
              count={users.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
            <Box sx={{ flexGrow: 1 }} />
            <Pagination
              count={Math.ceil(users.length / rowsPerPage)}
              shape="rounded"
              page={page + 1}
              onChange={handleChangePagination}
              sx={{ flexDirection: "flex-end" }}
            />
          </Stack>
        </div>
      </div>
    </>
  );
};

export default Users;
