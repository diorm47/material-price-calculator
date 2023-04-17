const tirazhInput = document.getElementById("tirazh");
const raportInput = document.getElementById("raport");
const selectElement = document.getElementById("val");
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
const tiraj_add = document.getElementById("tiraj_add");
const eticet_add = document.getElementById("eticet_add");
const aditional_wrapper = document.getElementById("aditional_wrapper");
const reverse = document.getElementById("reverse");
const client = document.getElementById("client");

const lamination_checbox = document.getElementById("lamination_checbox");
const tis_checbox = document.getElementById("tis_checbox");
const mat_checbox = document.getElementById("mat_checbox");
const glans_checbox = document.getElementById("glans_checbox");
const print_checbox = document.getElementById("print_checbox");

const kppInput = document.getElementById("kpp");
const krpInput = document.getElementById("krp");
const formResult = document.getElementById("formResult");
const kpoInput = document.getElementById("kpo");
const kroInput = document.getElementById("kro");
const download_button = document.getElementById("download_btn");

const flexprint = document.getElementById("flexprint");
const highprint = document.getElementById("highprint");
const container = document.getElementById("container");
const container_2 = document.getElementById("container_2");
const prog_type = document.getElementById("prog_type");

const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");

function calculatePM1() {
  const tirazh = parseFloat(tirazhInput.value) || 0;
  const raport = parseFloat(raportInput.value) || 0;
  const select = parseFloat(selectElement.value) || 0;
  const pm1Result = (tirazh / raport) * select;
  formResult.value = Math.round(pm1Result) || null;
}

function showForm1() {
  if (document.getElementById("pc").style.display == "none") {
    document.getElementById("pc").style.display = "flex";
    document.getElementById("oc").style.display = "none";
    document.getElementById("button1").style.background = "#fff";

    document.getElementById("button2").style.background = "transparent";

    if (window.innerWidth < 648) {
      document.getElementById("button1").style.marginTop = "0px";
      reverse.style.flexDirection = "column-reverse";
      document.getElementById("button2").style.marginTop = "0px";
    } else {
      document.getElementById("button1").style.marginTop = "50px";
      document.getElementById("button2").style.marginTop = "50px";
    }
  } else {
    document.getElementById("pc").style.display = "none";
    document.getElementById("oc").style.display = "none";
    document.getElementById("button1").style.background = "transparent";
    document.getElementById("button2").style.background = "transparent";

    if (window.innerWidth < 648) {
      document.getElementById("button1").style.marginTop = "0px";
      document.getElementById("button2").style.marginTop = "0px";
    } else {
      document.getElementById("button1").style.marginTop = "20px";
      document.getElementById("button2").style.marginTop = "20px";
    }
  }
}

function showAditional() {
  if (document.getElementById("aditional").style.display == "flex") {
    document.getElementById("aditional").style.display = "none";
    document.getElementById("aditional_wrapper").style.background =
      "transparent";
    document.getElementById("aditional_wrapper").style.padding = "0";
  } else {
    document.getElementById("aditional").style.display = "flex";
    document.getElementById("aditional_wrapper").style.background = "#fff";

    if (window.innerWidth < 700) {
      document.getElementById("aditional").style.display = "flex";
      document.getElementById("aditional").style.flexDirection = "column";
    }
    if (window.innerWidth < 500) {
      document.getElementById("aditional_wrapper").style.padding = "10px";
    } else document.getElementById("aditional_wrapper").style.padding = "30px";
  }
}

function showForm2() {
  if (document.getElementById("oc").style.display == "none") {
    document.getElementById("pc").style.display = "none";
    document.getElementById("oc").style.display = "flex";
    document.getElementById("button2").style.background = "#fff";
    document.getElementById("button1").style.background = "transparent";

    if (window.innerWidth < 648) {
      document.getElementById("button1").style.marginTop = "0px";
      document.getElementById("button2").style.marginTop = "0px";
      reverse.style.flexDirection = "column";
    } else {
      document.getElementById("button1").style.marginTop = "50px";
      document.getElementById("button2").style.marginTop = "50px";
    }
  } else {
    document.getElementById("pc").style.display = "none";
    document.getElementById("oc").style.display = "none";
    document.getElementById("button1").style.background = "transparent";
    document.getElementById("button2").style.background = "transparent";
    document.getElementById("button1").style.marginTop = "20px";
    document.getElementById("button2").style.marginTop = "20px";
    if (window.innerWidth < 648) {
      document.getElementById("button1").style.marginTop = "0px";
      document.getElementById("button2").style.marginTop = "0px";
    }
  }
}

function calculate() {
  calculatePM1();

  const kpp = parseFloat(kppInput.value) || 0;
  const krp = parseFloat(krpInput.value) || 0;

  const kppResult = kpp * 150;
  const krpResult = krp === 0 ? 0 : krp === 1 ? 0 : krp * 50 - 50;
  const pm1Result = parseFloat(formResult.value) || 0;

  const totalResult = kppResult + krpResult + pm1Result;
  if (totalResult.toFixed(2) != 0) {
    formResult.value = Math.round(totalResult);
    square();
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
    formResult.value = Math.round(totalResult);
    square();
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
  formResult.value = totalResult;
}

function square() {
  const material_width_item = parseFloat(material_width.value) || 100;
  meter_square.value = Math.round(
    formResult.value * (material_width_item / 1000)
  );
}
function coefficentFunc() {
  let cof = coefficent.value.replace(",", ".");
  tiraj_price.value = meter_square.value * cof * material_price.value;

  eticet_price.value = Number(tiraj_price.value / tirazh.value);
  self_price.value = material_price.value * meter_square.value;
}

function print_func() {
  print_price.value = Math.round(
    print_val.value * (material_width_print.value / 10 + 1) * 2.5
  );
  complect_price.value = Math.round(print_price.value * print_form.value);
}
function aditionally() {
  const lamination_ch = lamination_checbox.checked
    ? meter_square.value * 10 * 2.5
    : 0;
  const tis_ch = tis_checbox.checked ? meter_square.value * 20 * 2.5 : 0;
  const mat_ch = mat_checbox.checked ? tirazhInput.value * 0.2 : 0;
  const glans_ch = glans_checbox.checked ? tirazhInput.value * 0.05 : 0;

  const print_ch = print_checbox.checked ? 10000 : 0;

  tiraj_add.value =
    lamination_ch +
    tis_ch +
    mat_ch +
    glans_ch +
    print_ch +
    Number(tiraj_price.value);
  eticet_add.value = Number(tiraj_add.value / tirazhInput.value);
  if (!lamination_ch && !tis_ch && !mat_ch && !glans_ch && !print_ch) {
    tiraj_add.value = null;
    eticet_add.value = null;
  }
}
const now = new Date();
const year = now.getFullYear();
const month = now.getMonth() + 1;
const date = now.getDate();
const hours = now.getHours();
const minutes = now.getMinutes();

function download() {
  const textSelector = "body";
  const textContent = `
  Дата/время: ${year}-${month}-${date} в ${hours}:${minutes}


  Клиент: ${client.value || "Неизвестно"}
  Тираж: ${tirazhInput.value || 0} шт
  Рапорт: ${raportInput.value || 0}
  Вал: ${selectElement.value || 0} мм
  Количество постановок в полноцвете: ${kppInput.value || 0} шт
  Количество роликов в полноцвете: ${krpInput.value || 0} шт
  Количество постановок в одноцвете: ${kpoInput.value || 0} шт
  Количество роликов в одноцвете: ${kroInput.value || 0} шт
  Прогонные метры: ${formResult.value || 0} м
  Ширина материала: ${material_width.value || 0} мм
  Квадратные метры: ${meter_square.value || 0} м2
  Цена за материал: ${material_price.value || 0} руб
  Коэффициент: ${coefficent.value || 0} k
  Цена за тираж: ${tiraj_price.value || 0} руб
  Цена за этикетку: ${eticet_price.value || 0} руб
  Себестоимость: ${self_price.value || 0} руб

  Дополнительно:
    Ламинация: ${lamination_checbox.checked ? "✓" : "X"}
    Тиснение: ${tis_checbox.checked ? "✓" : "X"}
    Матовый лак: ${mat_checbox.checked ? "✓" : "X"}
    Глянцевый лак: ${glans_checbox.checked ? "✓" : "X"}
    Печать на обороте: ${print_checbox.checked ? "✓" : "X"}
    
    Цена с дополнениями за тираж: ${tiraj_add.value || 0} руб
    Цена с дополнениями за этикетку: ${eticet_add.value || 0} руб

  Печатные формы: ${print_form.value || 0} шт
  Вал: ${print_val.value || 0} мм
  Ширина материала: ${material_width_print.value || 0} мм
  Цена за печатную форму: ${print_price.value || 0} руб
  Цена за комплект: ${complect_price.value || 0} руб
  `;

  const link = document.createElement("a");
  link.setAttribute(
    "href",
    "data:text/plain;charset=utf-8,%EF%BB%BF" + encodeURIComponent(textContent)
  );
  link.setAttribute(
    "download",
    `data-${year}-${month}-${date} ${hours}-${minutes}.txt`
  );

  link.style.display = "none";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function reload() {
  window.location.reload();
}

tirazhInput.addEventListener("input", calculate);
raportInput.addEventListener("input", calculate);
selectElement.addEventListener("input", calculate);
selectElement.addEventListener("input", square);
kppInput.addEventListener("input", calculate);
kppInput.addEventListener("input", square);
krpInput.addEventListener("input", calculate);
kpoInput.addEventListener("input", calculate2);
kroInput.addEventListener("input", calculate2);
material_width.addEventListener("input", square);
coefficent.addEventListener("input", coefficentFunc);
material_width_print.addEventListener("input", print_func);
print_val.addEventListener("input", print_func);
lamination_checbox.addEventListener("input", aditionally);
tis_checbox.addEventListener("input", aditionally);
mat_checbox.addEventListener("input", aditionally);
glans_checbox.addEventListener("input", aditionally);
print_checbox.addEventListener("input", aditionally);

download_button.addEventListener("click", download);
document.getElementById("button1").addEventListener("click", showForm1);
document.getElementById("button2").addEventListener("click", showForm2);

calculate();
