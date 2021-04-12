let x = 5;
const y = Math.PI;

console.log(y*y);

let tekst = "test12345";
const test = 5;
const test1 = 12.35346768;

console.log(test1.toFixed(4));
console.log(Math.PI);
console.log(Math.E);
console.log(`Mam ${test} lat!`);
tekst = "sieeeema";
console.log(tekst.charAt(2));
console.log(tekst.charCodeAt(5));
console.log(tekst.includes("eee"));
console.log(tekst.includes("seee"));

let drugiTekst = " Siema siemanko   ";
console.log(drugiTekst.split(' '));
console.log(drugiTekst.split('e'));
console.log(drugiTekst.trim());
console.log(drugiTekst.toUpperCase());
console.log(drugiTekst.toLowerCase());

let liczbaZaDuza = 9999999999999999;
console.log(liczbaZaDuza);

const num1 = new Number(100);
const num2 = 100;
console.log(num1===num2);//sprawdza czy zmienne są identyczne czyli typ oraz wartość musi być taka sama
console.log(num1==num2);//sprawdza czy są takie same, konwertuje typy 

console.log(Number.isFinite(num2));
console.log(Number.isFinite(num2/0));
console.log(Number.isFinite(Infinity));

let bul = true;
console.log(`Boolean ${bul}`);
bul = false;
console.log(bul);
console.log(Boolean(1000));
console.log(Boolean(0));
console.log(Boolean(-50));
console.log(Boolean({}));


let tab = [1,2,45,5,'siema',false];

console.log(tab);
console.log(tab.length);

(!tab)?console.log("Pusto"):console.log("Pełna tablica byczku");

console.log(tab.join());
const tabMnozenieWartosci= tab.map((wartosc,index)=>{return wartosc*index});
console.log(tabMnozenieWartosci);
tab.forEach((wartosc)=>{console.log(wartosc)});
tab[3]="Pogchamp";
tab.forEach((wartosc)=>{console.log(wartosc)});


let ob = {
    imie:'Janusz',
    nazwisko:'Zielony',
    wyplataProgramisty: 150000
};
console.log(ob.imie);
console.log(ob);
const ileWRok = (obj) => obj.wyplataProgramisty*12;
console.log(ileWRok(ob));
let odwroconyJanusz = [];
for (let x of ob.imie )
{
    odwroconyJanusz[0]= x + odwroconyJanusz;
    console.log(x);
}
let terazWStringach = "";
for(let x of odwroconyJanusz)
{
    terazWStringach = terazWStringach + x;
}
console.log("odwroconyJanusz")
console.log(odwroconyJanusz);
console.log("terazWStringach")
console.log(terazWStringach);


console.log();
console.log("zAgAdKi");
console.log(0=="0");
console.log(0==[]);
console.log("0"==[]);
console.log();
console.log([1,2,3].toString());
console.log(['hello','world'].toString());
console.log();
console.log(2+2);
console.log("2"+"2");
console.log(2+2-2);
console.log("2"+"2"-"2");
console.log("2"+"1"-"2");
console.log();
console.log(0.1+0.2);
console.log();
console.log("10 + 13 = ");
let b = 10;
let a = 13;
while(b--)
{
    a++;
}
console.log(a);
console.log();
console.log(typeof NaN);