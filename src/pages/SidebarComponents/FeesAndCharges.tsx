import React, { useState } from "react";
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
import { UserState } from "../../redux/types";

interface AnchorEl {
  [key: number]: HTMLElement;
}

interface AnchorPosition {
  [key: number]: {
    top: number;
    left: number;
  };
}


const FeesAndCharges: React.FC<{ loggedUser: UserState }> = ({loggedUser}) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState<number | null>(null);
  const [anchorPosition, setAnchorPosition] = useState<AnchorPosition>({});
  const [anchorEl, setAnchorEl] = useState<AnchorEl>({});

  const handleClickMenu =
    (index: number) => (event: React.MouseEvent<HTMLButtonElement>) => {
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
      <h2 className="text-[#213F7D] text-2xl font-semibold my-3">
        Fees and Charges
      </h2>

      <div className="p-6 bg-white">
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <p className="text-[15px] text-[#898989] font-bold">Description</p>{" "}
                </TableCell>
                <TableCell>
                  <p className="text-[15px] text-[#898989] font-bold">
                    Amount
                  </p>
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
              ) : loggedUser.fees.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={6} className="text-center">
                    No Order
                  </TableCell>
                </TableRow>
              ) : (
                loggedUser.fees?.map((order, index) => (
                  <TableRow key={order.id}>
                    <TableCell>{order.description}</TableCell>
                    <TableCell>₦{order.amount}</TableCell>
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
      </div>
    </>
  );
};

export default FeesAndCharges;
