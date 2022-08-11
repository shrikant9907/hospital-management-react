import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { createSearchParams, useNavigate } from 'react-router-dom';
import AddUserForm from '../components/common/Form/AddUserForm';
import AddUserRoleForm from '../components/common/Form/AddUserRoleForm';
import CustomModal from '../components/common/Modal/Modal';
import TableWithActions from '../components/common/Table/TableWithActions';
import DashboardLayout from '../_layouts/DashboardLayout';
import localStorageDatabase from '../_services/localStorageDataService';

const UsersPage = () => {

  const navigate = useNavigate();

  const [usersData, setUsersData] = useState([]);
  const [showAddUserForm, setShowAddUserForm] = useState(false);
  const [showAddRoleForm, setShowAddRoleForm] = useState(false);
  const [showAssignRoleForm, setShowAssignRoleForm] = useState(false);


  useEffect(() => {
    const users = localStorageDatabase.get('users');
    setUsersData(users)
  }, [])

  const tableHead = ['#', 'Name', 'Email', 'Phone', 'Role', "Date", "Actions"];

  const handleOnDelete = (id) => {
    let users = localStorageDatabase.get('users');
    const deletedUsers = users.filter(u => u.id !== id)
    localStorageDatabase.set('users', deletedUsers)
    setUsersData(deletedUsers)
    toast.success("User deleted successfully.")
  }

  const handleOnEdit = (id) => {
    navigate({
      pathname: "/",
      search: createSearchParams({
        uid: id
      }).toString()
    });

  }

  return (
    <>
      <DashboardLayout heading="Users">

        <div className="actions-row text-end">
          <button onClick={() => setShowAssignRoleForm(true)} className='btn btn-outline-primary btn-sm mb-2 me-2'>Assign Role</button>
          <button onClick={() => setShowAddRoleForm(true)} className='btn btn-outline-primary btn-sm mb-2 me-2'>Add Role</button>
          <button onClick={() => setShowAddUserForm(true)} className='btn btn-outline-primary btn-sm mb-2'>Add User</button>
        </div>

        {showAddUserForm &&
          <CustomModal
            title="Add New User"
            onClose={() => setShowAddUserForm(false)}
          >
            <AddUserForm />
          </CustomModal>
        }

        {showAddRoleForm &&
        <CustomModal
          title="Add New Role"
          onClose={() => setShowAddRoleForm(false)}
        >
          <AddUserRoleForm />
        </CustomModal>
        }

        {showAssignRoleForm &&
          <CustomModal
            title="Assign User Role"
            onClose={() => setShowAssignRoleForm(false)}
          >
            <AddUserForm />
          </CustomModal>
        }

        <TableWithActions
          data={usersData}
          head={tableHead}
          onEdit={handleOnEdit}
          onDelete={handleOnDelete}
        />
      </DashboardLayout>
    </>
  )
}

export default UsersPage;