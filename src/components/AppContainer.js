import React, { useEffect, useState } from "react";

import { createUser, fetchUsers, deleteUser, updateUser } from "../API";
import Table from "./Table";
import Form from "./Form";

export default function BasicTable() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [editable, setEditable] = useState("");

  useEffect(() => {
    setLoading(true);
    fetchUsers().then((users) => {
      setUsers(users.map(({ _id, data }) => ({ _id, ...data })));
      setLoading(false);
    });
  }, []);

  const getEditableUser = () => {
    return users.find((item) => item._id === editable);
  };

  const handleDeleteUser = (id) => async () => {
    setLoading(true);
    await deleteUser(id);
    setUsers((users) => users.filter((item) => item._id !== id));
    setLoading(false);
  };

  const handleCreateUser = async (formData) => {
    setLoading(true);
    const { _id, data } = await createUser(formData);
    setUsers((users) => [...users, { _id, ...data }]);
    setLoading(false);
  };

  const handleUpdateUser = async (data) => {
    setLoading(true);
    await updateUser(editable, data);
    setUsers((users) => [
      ...users.filter((item) => item._id !== editable),
      { _id: editable, ...data },
    ]);
    setEditable("");
    setLoading(false);
  };

  return (
    <>
      <Table
        users={users}
        loading={loading}
        handleDeleteUser={handleDeleteUser}
        setEditable={setEditable}
      />
      <Form
        editable={editable}
        handleUpdateUser={handleUpdateUser}
        handleCreateUser={handleCreateUser}
        setEditable={setEditable}
        getEditableUser={getEditableUser}
      />
    </>
  );
}
