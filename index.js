const tirazhInput = document.getElementById("tirazh");
const raportInput = document.getElementById("raport");
const selectElement = document.getElementById("val");
const pm1Input = document.getElementById("pm1");
const material_width = document.getElementById("material_width");
const meter_square = document.getElementById("meter_square");
const coefficent = document.getElementById("coefficent");
const material_price = document.getElementById("material_price");
const eticet_price = document.getElementById("eticet_price");
const self_price = document.getElementById("self_price");
const material_width_print = document.getElementById("material_width_print");
const print_form = document.getElementById("print_form");
const print_val = document.getElementById("print_val");
const print_price = document.getElementById("print_price");
const complect_price = document.getElementById("complect_price");

const kppInput = document.getElementById("kpp");
const krpInput = document.getElementById("krp");
const formResult = document.getElementById("formResult");
const kpoInput = document.getElementById("kpo");
const kroInput = document.getElementById("kro");

function calculatePM1() {
  const tirazh = parseFloat(tirazhInput.value) || 0;
  const raport = parseFloat(raportInput.value) || 0;
  const select = parseFloat(selectElement.value) || 0;
  const pm1Result = (tirazh / raport) * select;
  pm1Input.value = pm1Result.toFixed(2);
}

function showForm1() {
  if (document.getElementById("pc").style.display == "none") {
    document.getElementById("pc").style.display = "flex";
    document.getElementById("oc").style.display = "none";
    document.getElementById("button1").style.background = "#fff";
    document.getElementById("button2").style.background = "transparent";
  } else {
    document.getElementById("pc").style.display = "none";
    document.getElementById("oc").style.display = "none";
    document.getElementById("button1").style.background = "transparent";
    document.getElementById("button2").style.background = "transparent";
  }
}
function showAditional() {
  if (document.getElementById("aditional").style.display == "flex") {
    document.getElementById("aditional").style.display = "none";
  } else {
    document.getElementById("aditional").style.display = "flex";
  }
}

function showForm2() {
  if (document.getElementById("oc").style.display == "none") {
    document.getElementById("pc").style.display = "none";
    document.getElementById("oc").style.display = "flex";
    document.getElementById("button2").style.background = "#fff";
    document.getElementById("button1").style.background = "transparent";
  } else {
    document.getElementById("pc").style.display = "none";
    document.getElementById("oc").style.display = "none";
    document.getElementById("button1").style.background = "transparent";
    document.getElementById("button2").style.background = "transparent";
  }
}

function calculate() {
  calculatePM1();

  const kpp = parseFloat(kppInput.value) || 0;
  const krp = parseFloat(krpInput.value) || 0;

  const kppResult = kpp * 150;
  const krpResult = krp === 0 ? 0 : krp === 1 ? 0 : krp * 50 - 50;
  const pm1Result = parseFloat(pm1Input.value) || 0;

  const totalResult = kppResult + krpResult + pm1Result;
  if (totalResult.toFixed(2) != 0) {
    formResult.value = totalResult.toFixed(2);
    console.log(formResult.value);
  }
}

function calculate2() {
  calculatePM1();

  const kpo = parseFloat(kpoInput.value) || 0;
  const kro = parseFloat(kroInput.value) || 0;

  const kpoResult = kpo * 50;
  const kroResult = kro === 0 ? 0 : kro === 1 ? 0 : kro * 50 - 50;
  const pm1Result = parseFloat(pm1Input.value) || 0;

  const totalResult = kpoResult + kroResult + pm1Result;
  if (totalResult.toFixed(2) != 0) {
    formResult.value = totalResult.toFixed(2);
  }
}

function calculating() {
  calculatePM1();

  const kpo = parseFloat(kpoInput.value) || 0;
  const krp = parseFloat(kroInput.value) || 0;

  const kpoResult = kpo * 150;
  const kroResult = kro === 0 ? 0 : krp === 1 ? 0 : krp * 50 - 50;
  const pm2Result = parseFloat(pm1Input.value) || 0;

  const totalResult = kpoResult + kroResult + pm1Result;
  formResult.value = totalResult.toFixed(2);
  console.log(totalResult);
}

function square() {
  const material_width_item = parseFloat(material_width.value) || 100;
  meter_square.value = pm1Input.value * (material_width_item / 1000);
}
function coefficentFunc() {
  tiraj_price.value =
    meter_square.value * coefficent.value * material_price.value;
  eticet_price.value = tiraj_price.value / tirazh.value;
  self_price.value = material_price.value * meter_square.value;
}

function print_func() {
  print_price.value =
    print_val.value * (material_width_print.value / 100 + 1) * 2.5;
  complect_price.value = print_price.value * print_form.value;
}

// Вызываем функцию calculate() при изменении значений в полях tirazh, raport, select, kpp и krp
tirazhInput.addEventListener("input", calculate);
raportInput.addEventListener("input", calculate);
selectElement.addEventListener("input", calculate);
kppInput.addEventListener("input", calculate);
krpInput.addEventListener("input", calculate);
kpoInput.addEventListener("input", calculate2);
kroInput.addEventListener("input", calculate2);
material_width.addEventListener("input", square);
coefficent.addEventListener("input", coefficentFunc);
material_width_print.addEventListener("input", print_func);
// Вызываем функцию calculate() при загрузке страницы
calculate();

/// my code
