import React, { useState } from 'react';
import { Link } from "react-router-dom";

import {
  IconButton,
  Menu,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

interface AnchorEl {
  [key: number]: HTMLElement;
}

interface AnchorPosition {
  [key: number]: {
    top: number;
    left: number;
  };
}

const totalOrder = [
  {
    id: 1,
    title: "Savings Towards Holiday trip",
    amount: 2500,
    savings_type: "monthly",
    date: "25-10-2023"
  },
  {
    id: 2,
    title: "Savings For Laptop",
    amount: 2000,
    savings_type: "weekly",
    date: "20-10-2023"
  },
  {
    id: 3,
    title: "Savings For Rent",
    amount: 1000,
    savings_type: "daily",
    date: "25-10-2023"
  },
]

const SavingsTable = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState<number | null>(null);
  const [anchorPosition, setAnchorPosition] = useState<AnchorPosition>({});
  const [anchorEl, setAnchorEl] = useState<AnchorEl>({});

  const handleClickMenu = (index: number) => (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();

    if (filter === index) {
      setFilter(null);
    } else {
      setFilter(index);
      setAnchorPosition((prevPositions) => ({
        ...prevPositions,
        [index]: {
          top: event.pageY,
          left: event.pageX,
        },
      }));
      setAnchorEl((prevElements) => ({
        ...prevElements,
        [index]: event.currentTarget,
      }));
    }
  };

  function closeModal() {
    setFilter(null);
  }
  const handleClose = () => {
    setFilter(null);
  };

  return (
    <>
     <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <p className="text-[15px] text-[#898989] font-bold">Title</p>{" "}
              </TableCell>
              <TableCell>
                <p className="text-[15px] text-[#898989] font-bold">
                  Amount
                </p>
              </TableCell>
              <TableCell>
                <p className="text-[15px] text-[#898989] font-bold">Savings Type</p>{" "}
              </TableCell>
              <TableCell>
                <p className="text-[15px] text-[#898989] font-bold">
                  Date
                </p>
              </TableCell>
              
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {error ? (
              <div className="w-full flex justify-center py-4">
                Error: {error}
              </div>
            ) : totalOrder.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} className="text-center">
                  No Order
                </TableCell>
              </TableRow>
            ) : (
              totalOrder?.map((order, index) => (
                <TableRow key={order.id}>
                  <TableCell>{order.title}</TableCell>
                  <TableCell>
                    {order.amount} 
                  </TableCell>
                  
                  <TableCell>
                        
                          {order.savings_type}
                      </TableCell>
                      <TableCell>{order.date}</TableCell>

                  <TableCell>
                    <IconButton onClick={handleClickMenu(index)}>
                      <MoreVertIcon />
                    </IconButton>
                    <Menu
                      anchorEl={anchorEl[index]}
                      open={filter === index}
                      onClose={handleClose}
                      anchorReference="anchorPosition"
                      anchorPosition={anchorPosition[index]}
                      anchorOrigin={{
                        vertical: "top",
                        horizontal: "left",
                      }}
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "left",
                      }}
                    >
                      <MenuItem component={Link} to={`customer-desc`}>
                        View
                      </MenuItem>
                      <MenuItem component={Link} to={`customer-description`}>
                        Track
                      </MenuItem>
                      
                        <MenuItem>
                          Delete
                        </MenuItem>
                      
                    </Menu>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}

export default SavingsTable;