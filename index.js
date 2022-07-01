const classSelector = document.getElementById("class-select");

const request = async () => {
  const req = await fetch("https://www.dnd5eapi.co/api/classes");
  const res = await req.json();
  res.results.forEach((char) => {
    let option = document.createElement("option");
    option.setAttribute("value", char.name);
    option.textContent = char.name;
    classSelector.append(option);
  });
};
request();
