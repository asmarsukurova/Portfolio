const dataExperince = [
  {
    title: "-2018-present",
    name: "Web Developer",
    description:
      " Website development is the process of building, programming, <br> coding and maintaining <br> websites and web applications.",
  },

  {
    title: " -2016 - 2018",
    name: "Senior Designer",
    description:
      " Website development is the process of building, programming, <br> coding and maintaining <br> websites and web applications.",
  },

  {
    title: "-2015-2016",
    name: "UX Desinger",
    description:
      " Website development is the process of building, programming, <br> coding and maintaining <br> websites and web applications.",
  },
  {
    title: " -2013 - 2015",
    name: "Freelancer",
    description:
      " Website development is the process of building, programming, <br> coding and maintaining <br> websites and web applications.",
  },
];

const boxesExperience = document.querySelector(".boxes-experience");

for (let data of dataExperince) {
  const element = document.createElement("div");
  element.className = "box-one";
  element.innerHTML = `
        <h5>${data.title}</h5>
        <h3>${data.name}</h3>
        <p>${data.description}</p>
    `;

  boxesExperience.appendChild(element);
}
