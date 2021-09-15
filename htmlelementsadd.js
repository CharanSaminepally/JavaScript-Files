

const h1 = document.createElement("h1");
const underline =document.createElement("u");
underline.innerText= " hello world";
h1.append(underline);
document.body.append(h1);

const h2 = document.createElement("h2");
const italic =document.createElement("i");
italic.innerText= "\n this is charan";
h1.append(italic);
document.body.append(h2);

const h3 = document.createElement("h3");
const bold =document.createElement("b");
bold.innerText= "\n hello bruh!";
h1.append(bold);
document.body.append(h3);