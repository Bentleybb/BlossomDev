// api-user.js

const parseSafe = async (res) => {
  try { return await res.json(); } catch { 
    try { return await res.text(); } catch { return null; }
  }
};

const throwIfNotOk = async (res, defaultMsg) => {
  if (res.ok) return;
  const data = await parseSafe(res);
  const msg =
    (data && typeof data === 'object' && data.error) ? data.error :
    (typeof data === 'string' && data.trim()) ? data :
    `${res.status} ${res.statusText}`;
  throw new Error(defaultMsg ? `${defaultMsg}: ${msg}` : msg);
};

const create = async (user) => {
  try {
    const res = await fetch('/api/users', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
    await throwIfNotOk(res, 'Signup failed');
    return await res.json();
  } catch (err) {
    console.error('API error in create:', err.message);
    return { error: err.message };
  }
};

const read = async (params, credentials, signal) => {
  try {
    const res = await fetch('/api/users/' + params.userId, {
      method: 'GET',
      signal,
      headers: {
        Accept: 'application/json',
        Authorization: 'Bearer ' + credentials.t,
      },
    });
    await throwIfNotOk(res, 'Read user failed');
    return await res.json();
  } catch (err) {
    if (err.name === 'AbortError') {
      // Silently ignore when the request is aborted (e.g., navigation away)
      return;
    }
    console.error('API error in read:', err.message);
    return { error: err.message };
  }
};


const update = async (params, credentials, user) => {
  try {
    const res = await fetch('/api/users/' + params.userId, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + credentials.t, // <-- fixed
      },
      body: JSON.stringify(user),
    });
    await throwIfNotOk(res, 'Update failed');
    return await res.json();
  } catch (err) {
    console.error('API error in update:', err.message);
    return { error: err.message };
  }
};

const remove = async (params, credentials) => {
  try {
    const res = await fetch('/api/users/' + params.userId, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + credentials.t,
      },
    });
    await throwIfNotOk(res, 'Delete failed');
    return await res.json();
  } catch (err) {
    console.error('API error in remove:', err.message);
    return { error: err.message };
  }
};

const adminListUsers = async (credentials, signal) => {
  try {
    const res = await fetch('/api/users', {
      method: 'GET',
      signal,
      headers: {
        Accept: 'application/json',
        Authorization: 'Bearer ' + credentials.t,
      },
    });
    await throwIfNotOk(res, 'List users failed');
    return await res.json();
  } catch (err) {
    console.error('API error in list:', err.message);
    return { error: err.message };
  }
};

export { create, read, update, remove, adminListUsers as list };
