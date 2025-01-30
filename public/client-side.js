// Function to fetch users data from the server
async function fetchUsers() {
  //endpoint must matches the server get request
  const response = await fetch("/api/messages");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const users = await response.json();
  return users;
}
// Function to update the DOM with user data
function updateUsers(users) {
  const allLi = document.querySelectorAll(".from-current-time");
  users.forEach((user) => {
    allLi[users.indexOf(user)].textContent = user.fromCurrentTime;
  });
}

// Function to start the real-time updates
async function startRealTimeUpdate() {
  try {
    const users = await fetchUsers(); // Initial fetch when page loads
    updateUsers(users);
  } catch (error) {
    console.error("Failed to fetch users:", error);
  }
  // update every minute

  setInterval(async () => {
    try {
      const users = await fetchUsers();
      updateUsers(users);
    } catch (error) {
      console.error("Failed to fetch users messages:", error);
    }
  }, 60000);
}

// start update on page load
document.addEventListener("DOMContentLoaded", startRealTimeUpdate);
