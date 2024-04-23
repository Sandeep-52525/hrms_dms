"use client";
import { callAPIwithHeaders, callAPIwithParams } from "@/api/commonAPI";
import Wrapper from "@/components/Wrapper";
import Loader from "@/components/common/Loader";
import { Add } from "@mui/icons-material";
import {
  Autocomplete,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TablePagination,
  TextField,
} from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Page = () => {
  const [userData, setUserData] = useState([]);
  const [loaded, setLoaded] = useState<boolean>(false);
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [userFormData, setUserFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    contactPhone: "",
    roleId: 0,
    isActive: true,
    id: 0,
    password: "",
  });

  const getManageUserData = () => {
    const callBack = async (status: boolean, message: string, data: any) => {
      if (status) {
        setLoaded(true);
        setUserData(data);
      } else {
        toast.error(message);
        setLoaded(true);
      }
    };

    callAPIwithHeaders("/ManageUser/GetManageUser", "post", callBack, {
      UserId: null,
    });
  };

  const sendInvite = (id: number) => {
    setLoaded(false);
    console.log(id);

    const callBack = async (status: boolean, message: string, data: any) => {
      if (status) {
        setLoaded(true);
        toast.success(message);
      } else {
        setLoaded(true);
        toast.error(message);
      }
    };

    callAPIwithParams(
      "/ManageUser/SendDocInvite",
      "post",
      callBack,
      {},
      { name: "UserId", value: id.toString() }
    );
  };

  useEffect(() => {
    getManageUserData();
  }, []);

  const handleClose = () => {
    setDialogOpen(false);
  };

  const columns: GridColDef[] = [
    {
      field: "firstName",
      headerName: "Name",
      flex: 1,
      renderHeader: (params) => (
        <span className="capitalize font-semibold text-sm text-[#535255]">
          Name
        </span>
      ),
      renderCell: (params) => {
        return <div>{params.row.firstName + " " + params.row.lastName}</div>;
      },
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
      renderHeader: (params) => (
        <span className="capitalize font-semibold text-sm text-[#535255]">
          Email
        </span>
      ),
    },
    // {
    //   field: "department",
    //   headerName: "Department",
    //   flex: 1,
    //   renderHeader: (params) => (
    //     <span className="capitalize font-semibold text-sm text-[#535255]">
    //       Department
    //     </span>
    //   ),
    // },
    {
      field: "contactPhone",
      headerName: "Mobile",
      flex: 1,
      renderHeader: (params) => (
        <span className="capitalize font-semibold text-sm text-[#535255]">
          Mobile
        </span>
      ),
    },
    {
      field: "isActive",
      headerName: "Status",
      flex: 1,
      renderHeader: (params) => (
        <span className="capitalize font-semibold text-sm text-[#535255]">
          Status
        </span>
      ),
      renderCell: (params) => {
        return (
          <div
            className={`${
              params.row.isActive ? "text-green-600" : "text-red-600"
            }`}
          >
            {params.row.isActive ? "Active" : "Deactive"}
          </div>
        );
      },
    },
    {
      field: "id",
      headerName: "Action",
      flex: 1,
      renderHeader: (params) => (
        <span className="capitalize font-semibold text-sm text-[#535255]">
          Action
        </span>
      ),
      renderCell: (params) => {
        return (
          <div className="flex gap-4">
            <span
              className="underline cursor-pointer text-blue-600"
              onClick={() => {
                sendInvite(params.row.id);
              }}
            >
              Send Invite
            </span>
            <span className="underline cursor-pointer text-blue-600">View</span>
          </div>
        );
      },
    },
  ];

  return (
    <>
      {!loaded && <Loader />}
      <Wrapper>
        <div className="flex-row flex flex-wrap pb-2 justify-between w-full">
          <div className="mx-5 justify-between flex flex-wrap w-full">
            <div className="justify-start flex items-center">Manage Users</div>

            <Button
              className="flex gap-2"
              variant="contained"
              onClick={() => setDialogOpen(true)}
            >
              Add User <Add className="text-sm" />
            </Button>
          </div>
        </div>
        <div className="mx-auto flex flex-col w-full mt-4">
          <div className="tableStyle">
            <DataGrid
              disableColumnMenu
              disableRowSelectionOnClick
              sx={{
                fontSize: "12px",
                height: "70vh",
                "&.MuiDataGrid-root .MuiDataGrid-cell:focus-within": {
                  outline: "none !important",
                },
              }}
              getRowId={(row) => row.id}
              rows={userData}
              columns={columns}
              //   slots={{
              //     footer: () => (
              //       <div className="flex justify-end">
              //         <TablePagination
              //           rowsPerPage={10}
              //           onPageChange={() => {}}
              //           onRowsPerPageChange={() => {}}
              //           count={0}
              //           page={0}
              //           rowsPerPageOptions={[5, 10, 15]}
              //         />
              //       </div>
              //     ),
              //   }}
            />
          </div>
        </div>
      </Wrapper>

      <Dialog
        open={dialogOpen}
        onClose={handleClose}
        PaperProps={{
          component: "form",
          //   onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
          //     event.preventDefault();
          //     const formData = new FormData(event.currentTarget);
          //     const formJson = Object.fromEntries((formData as any).entries());
          //     const email = formJson.email;
          //     console.log(email);
          //     handleClose();
          //   },
        }}
      >
        <DialogTitle>Enter User Details</DialogTitle>
        <DialogContent className="w-[500px] flex flex-col gap-4">
          <div className="flex gap-2">
            <TextField
              required
              id="firstName"
              name="firstName"
              label="First Name"
              type="text"
              fullWidth
              variant="standard"
              onChange={(e) =>
                setUserFormData({ ...userFormData, firstName: e.target.value })
              }
            />
            <TextField
              required
              id="lastName"
              name="lastName"
              label="Last Name"
              type="text"
              fullWidth
              variant="standard"
              onChange={(e) =>
                setUserFormData({ ...userFormData, lastName: e.target.value })
              }
            />
          </div>
          <TextField
            required
            id="email"
            name="email"
            label="Email"
            type="email"
            fullWidth
            variant="standard"
            error={emailError}
            helperText={emailError ? "Not Valid" : ""}
            onChange={(e) => {
              setEmailError(false);
              setUserFormData({ ...userFormData, email: e.target.value });
            }}
            onBlur={(e) => {
              if (
                !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(e.target.value.trim())
              ) {
                setEmailError(true);
              }
            }}
          />
          <TextField
            required
            id="contactPhone"
            name="contactPhone"
            label="Contact Number"
            type="text"
            fullWidth
            variant="standard"
            onChange={(e) => {
              if (e.target.value.length >= 10) {
                return;
              } else {
                setUserFormData({
                  ...userFormData,
                  contactPhone: e.target.value,
                });
              }
            }}
          />
          {/* <Autocomplete
            className="mt-1"
            options={[]}
            renderInput={(params) => (
              <TextField {...params} label="Department" variant="standard" />
            )}
          /> */}
        </DialogContent>
        <DialogActions>
          <Button color="error" onClick={handleClose}>
            Cancel
          </Button>
          <Button>Submit</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Page;
