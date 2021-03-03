export const fetchUsers = async () => {
  try {
    const response = await fetch("http://178.128.196.163:3000/api/records");

    return await response.json();
  } catch (error) {
    console.error(error);
  }
};

export const createUser = async (data) => {
  try {
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ data }),
    };

    const response = await fetch(
      "http://178.128.196.163:3000/api/records",
      requestOptions
    );

    return await response.json();
  } catch (error) {
    console.error(error);
  }
};

export const deleteUser = async (id) => {
  try {
    await fetch(`http://178.128.196.163:3000/api/records/${id}`, {
      method: "DELETE",
    });
  } catch (error) {
    console.error(error);
  }
};

export const updateUser = async (id, data) => {
  try {
    await fetch(`http://178.128.196.163:3000/api/records/${id}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ data }),
    });
  } catch (error) {
    console.error(error);
  }
};
