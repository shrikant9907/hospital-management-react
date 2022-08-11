import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import toast from 'react-hot-toast';
import localStorageDatabase from '../../../_services/localStorageDataService';
import AlertBox from '../Alert/AlertBox';

const AddUserRoleForm = (props) => {

  let navigate = useNavigate();
  const [searchParams] = useSearchParams();

  let userId = '';
  let pageType = 'Add';
  if (searchParams.has("uid")) {
    userId = searchParams.get('uid');
    pageType = 'Edit';
  }

  const initFormData = {
    "id": "",
    "name": "",
  }

  const [usersData, setUsersData] = useState([]);
  const [formData, setFormData] = useState(initFormData);
  const [error, setError] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(false);

  useEffect(() => {
    const users = localStorageDatabase.get('users');
    setUsersData(users);

    if (pageType === 'Edit') {
      const foundUser = users.find(obj => obj.id === userId)
      if (foundUser !== undefined) {
        setFormData(foundUser)
      }
    }

  }, [pageType, userId])

  const formMessage = {
    emptyName: "Please add role.",
    duplicate: "Duplicate entry not allowed",
    formSuccess: "Message sent successfully. Thank you form contacting us.",
  }

  const openDetails = () => {
    setTimeout(() => {
      navigate("../users", { success: true })
    }, 2000);
  }

  const resetForm = () => {
    setError(false);
    setFormData(initFormData);

    setTimeout(() => {
      setSubmitStatus(false)
    }, 2000);
  }

  const handleFieldChange = async (e, field = 'default') => {

    if (field === 'default') {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
 
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.name === '') {
      toast.error(formMessage.emptyName)
      return 
    }

    if (!submitStatus && pageType === "Add") {
      setSubmitStatus(true)
      addUserToLocalStorage(formData);
      resetForm(true)
      openDetails()
    }

    if (!submitStatus && !error && pageType === "Edit") {
      setSubmitStatus(true)
      updateUserToLocalStorage(userId, formData);
      openDetails()
    }
  };

  const addUserToLocalStorage = (orgUser) => {
    let users = localStorageDatabase.get('users');
    let user = Object.assign({}, orgUser);
    user.id = uuidv4();

    const uidx = users.slice().findIndex(u => {
      return (JSON.stringify(u) === JSON.stringify(user))
    })
 
    if (uidx > 0) {
      toast.error(formMessage.duplicate)
    } else {
      users = [...users, user]
      localStorageDatabase.set('users', users);
    }
    setSubmitStatus(false)
  }

  const updateUserToLocalStorage = (id, user) => {
    let users = localStorageDatabase.get('users');
    const newUsers = [...users]
    const uidx = users.findIndex(u => u.id === id)
    newUsers[uidx] = user;
    localStorageDatabase.set('users', newUsers);
    toast.success('Role updated successfully.')
  }
 
  return (

    <div className="card cui2 p-0 noshadow">
      <div className="card-body pb-0"> 

        <form className="fui fui2"
          onSubmit={handleSubmit}
          autoComplete="off"
        >

          <div className="form-group">
            <label>
              User User Role:
            </label>
            <input
              maxLength="50"
              onChange={(e) => handleFieldChange(e)}
              name="name"
              value={formData?.name}
              type="text"
              className="form-control"
              placeholder="Enter role. eg. Manager / Staff"
            />
          </div>

          <div className="form-group d-flex align-items-center justify-content-center">
            {pageType === "Add" &&
              <button onClick={() => resetForm()} className="btn btn-outline-primary me-2 btnui2" type="button" name="reset" value="Reset">Reset</button>
            }
            <input disabled={submitStatus} className="btn btn-primary btnui2" type="submit" name="submit" value={(pageType === "Add" ? "Submit" : "Update")} />
          </div>
          {submitStatus && <AlertBox type='success' message={formMessage.formSuccess} />}
        </form>
      </div>
    </div>
  )
}

export default AddUserRoleForm