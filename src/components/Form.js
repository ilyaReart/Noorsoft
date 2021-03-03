import React, { useState, useEffect } from "react";
import { Button } from "@material-ui/core";

export default function FormComponent({
  editable,
  handleUpdateUser,
  handleCreateUser,
  setEditable,
  getEditableUser,
}) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (editable) {
      const user = getEditableUser();
      setName(user.name);
      setAge(user.age);
      setEmail(user.email);
    } else {
      setName("");
      setAge("");
      setEmail("");
    }
  }, [editable]);

  const createUser = async () => {
    await handleCreateUser({ name, age, email });
    setName("");
    setAge("");
    setEmail("");
  };

  const updateUser = async () => {
    await handleUpdateUser({ name, age, email });
  };

  return (
    <div style={{ paddingTop: 100 }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingBottom: 50,
        }}
      >
        <input
          placeholder="name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          placeholder="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <input
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      {editable && (
        <Button
          variant="contained"
          style={{ marginLeft: 15 }}
          onClick={() => setEditable("")}
        >
          Cancel
        </Button>
      )}
      <Button
        variant="contained"
        color="primary"
        onClick={editable ? updateUser : createUser}
      >
        {editable ? "Update user" : "Create user"}
      </Button>
    </div>
  );
}
