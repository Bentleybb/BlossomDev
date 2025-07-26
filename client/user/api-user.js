
const API_BASE = "/api/users";

const handleResponse = async (response) => {
  try {
    const data = await response.json();
    return data;
  } catch (err) {
    console.error("Failed to parse response JSON:", err);
    throw err;
  }
};

const handleError = (err) => {
  console.error("API call failed:", err);
  throw err;
};

const create = async (user) => {
  try {
    const response = await fetch(API_BASE, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    return await handleResponse(response);
  } catch (err) {
    return handleError(err);
  }
};

const list = async (credentials) => {
  try {
    const response = await fetch("/api/users", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${credentials.t}`, // ✅ include token
      },
    });
    return await response.json();
  } catch (err) {
    console.error(err);
  }
};

const read = async (params, credentials, signal) => {
  try {
    const response = await fetch(`/api/users/${params.userId}`, {
      method: "GET",
      signal: signal,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${credentials.t}`,
      },
    });

    return await response.json();
  } catch (err) {
    if (err.name === "AbortError") {
      // Silently handle aborts to avoid unhandled promise rejection
      console.log("Fetch aborted");
      return;
    }
    console.error("API call failed:", err);
    throw err; // re-throw other errors
  }
};

const update = async (params, credentials, user) => {
  try {
    let response = await fetch(`/api/users/${params.userId}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + credentials.t,
      },
      body: JSON.stringify(user),
    });
    return await response.json();
  } catch (err) {
    console.error("API call failed:", err);
  }
};

const remove = async ({ userId }, { t }) => {
  try {
    const response = await fetch(`${API_BASE}/${userId}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${t}`,
      },
    });
    return await handleResponse(response);
  } catch (err) {
    return handleError(err);
  }
};

export { create, list, read, update, remove };
