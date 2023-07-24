const sidebarItem = [
  {
    className: "fas fa-menorah",
    title: "Dashboard",
  },
  {
    className: "fas fa-comment",
    title: "Message",
  },
  {
    className: "fas fa-database",
    title: "Report",
  },
  {
    className: "fas fa-chart-bar",
    title: "Attendance",
  },
  {
    className: "fas fa-cog",
    title: "Setting",
  },
];

const detials = [
  {
    img: "./assets/img4.jpeg",
    name: "Logeshwari",
    role: "Software Developer",
    month: 97,
    year: 95,
  },
  {
    img: "./assets/img1.jpeg",
    name: "Gokul Kumar",
    role: "Associate Mentor",
    month: 95,
    year: 94,
  },
  {
    img: "./assets/img5.jpeg",
    name: "Sandhya",
    role: "Software Developer",
    month: 94,
    year: 92,
  },
  {
    img: "./assets/img6.jpeg",
    name: "maheshwaran",
    role: "Senior Associate Mentor",
    month: 93,
    year: 93,
  },
];

const tableList = [
  {
    id: 1,
    name: "Logehwari",
    dept: "Development",
    date: "06-13-23",
    inT: "8:00AM",
    outT: "3:00PM",
  },
  {
    id: 2,
    name: "Gokul",
    dept: "Training",
    date: "06-13-23",
    inT: "9:00AM",
    outT: "4:00PM",
  },

  {
    id: 3,
    name: "Sandhya",
    dept: "Testing",
    date: "06-13-23",
    inT: "8:00AM",
    outT: "3:00PM",
  },
  {
    id: 4,
    name: "Maheshwaran",
    dept: "Training",
    date: "06-13-23",
    inT: "8:00AM",
    outT: "3:00PM",
  },
  {
    id: 5,
    name: "Priyanka",
    dept: "Mentor",
    date: "06-13-23",
    inT: "9:00AM",
    outT: "4:00PM",
  },
  {
    id: 6,
    name: "Nivetha",
    dept: "Coding",
    date: "06-13-23",
    inT: "9:00AM",
    outT: "4:00PM",
  },
];

//features
const loadFeatures = () => {
  const features = document.querySelector(".features");

  const newFeatures = sidebarItem
    .map((item) => {
      return `
  <div class="feature">
                <i class="${item.className}"></i>
                <p>${item.title}</p>
            </div>`;
    })
    .join(" ");

  features.innerHTML = newFeatures;
};

//emp-detials

const loadEmpDetails = () => {
  const empDetials = document.querySelector(".emp-details");

  const newDetials = detials
    .map((item) => {
      return `
    <div class="emp-detail">
                <img src="${item.img}">
                <h3 class="name">${item.name}</h3>
                <p>${item.role}</p>
                <div class="percent">
                    <h3>${item.month}%</h3>
                    <h3>${item.year}%</h3>
                </div>
                <div class="duration">
                    <h3>Month</h3>
                    <h3>Year</h3>
                </div>
                <button class="emp-btn">Profile</button>
            </div>`;
    })
    .join(" ");

  empDetials.innerHTML = newDetials;
};

const loadTable = () => {
  const table = document.querySelector(".attendance_container");

  const tableDetails = tableList
    .map((item) => {
      return `<tr class="table_row" id="emp${item.id}">
                        <td>0${item.id}</td>
                        <td>${item.name}</td>
                        <td>${item.dept}</td>
                        <td>${item.date}</td>
                        <td>${item.inT}</td>
                        <td>${item.outT}</td>
                       <td> <button>View</button><td>
                    </tr>`;
    })
    .join(" ");

  table.innerHTML = tableDetails;
};

//intial loading of the items
window.addEventListener("DOMContentLoaded", () => {
  loadFeatures();
  loadEmpDetails();
  loadTable();
});
