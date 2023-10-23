export const radnici = [
  {
    ime: "Ismail",
    godine: 22,
    email: "ismail.ganibegovic7@gmail.com",
    isActive: true,
  },
  {
    ime: "Stefan",
    godine: 33,
    email: "stefan7@gmail.com",
    isActive: true,
  },
];

const { ime, isActive } = radnici[1];
console.log(ime, isActive);
