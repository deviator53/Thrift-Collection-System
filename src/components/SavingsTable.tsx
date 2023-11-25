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
import { UserState } from '../redux/types';

interface AnchorEl {
  [key: number]: HTMLElement;
}

interface AnchorPosition {
  [key: number]: {
    top: number;
    left: number;
  };
}


const SavingsTable: React.FC<{ loggedUser: UserState }> = ({loggedUser}) => {
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
            ) : loggedUser.savings.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} className="text-center">
                  No Order
                </TableCell>
              </TableRow>
            ) : (
              loggedUser?.savings?.map((order, index) => (
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
                      <MenuItem>
                        View
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