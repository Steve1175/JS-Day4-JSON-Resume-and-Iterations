const objBio = {
  Resume: {
    name: "Selva Pandi",
    email: "Selva1175@gmail.com",
    phone: "+919944890132",
    education: {
      college: {
        degree: "B.Tech",
        department: "Mechanical Engineering",
        name: "B.S. Abdur Rahman University, Chennai",
        year: "2013 – 17",
        CGPA: 6.08,
      },
      "high school": {
        name: "Nadar Higher Secondary School, Madurai",
        std: "12th",
        percentage: 74.5,
        Year: "2012 – 13",
      },
    },
    summary:
      "Front-end Web developer known for crafting visually appealing and intuitive websites using HTML,CSS and JavaScript",
    location: {
      address: "Plot no.3739,TNHB colony, Villapuram",
      postalCode: 625011,
      city: "Madurai",
      countryCode: "India",
      region: "Tamilnadu",
    },
    website: "https://www.steve.dev/",
    skills: ["HTML", "CSS", "JavaScript"],
  },
  languages: [
    {
      language: "English",
      fluency: "Fluent",
    },
    {
      language: "Tamil",
      fluency: "Fluent",
    },
  ],
  interests: [
    {
      name: "Drawing & Sketching",
      keywords: ["Drawing a potrait sketches and coloring that"],
    },
  ],
};

//for in
for (let key in objBio) {
  console.log(key, " : ", objBio[key]);
}

//for of
const keys = Object.keys(objBio);
for (let key of keys) {
  console.log(key, " : ", objBio[key]);
}

//for Each
Object.keys(objBio).forEach((key, value) => {
  console.log(key, " : ", objBio[key]);
});
