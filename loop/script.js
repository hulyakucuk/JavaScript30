let me={
    name:"hulya",
    age:21,
    job:"front-end developer",
    isMarried:false,
    hobby:["coding","searching",
    "learning language","listening to music"]
};

let family=["arslan","emine","ela","eda","hulya"];


// for in for of ve for farkı

// for in nesnenin,dizinin özelliklerini dolaşmak için kullanılır.
// özelliklerin anahtarları döndürür

// obj
for(let prop in me){
    console.log(prop,"--",me[prop])
}

// array
for(let proporty in family){
    console.log(proporty);
}  
//  0 1 2 3 4

// for of : array in index ine ihtiyacımız yoksa dogrudan 
// value sunu istiyorsak for of kullanabilirz (for inden darkı)

// array
for(let item of family){
    console.log(item);
}
// obj
// for(let items of me){
//     console.log(items);
// }   typerror hatası verir 


// yine de obje kullanmak istiyorsak 

for(let items of Object.keys(me)){
    console.log(items,"--",me[items]);
}

// forEach() 
// bir dizinin tüm elemanlarını tek tek dolaşcaksak ve bu 
// elemanlar üzerinde işlem yapacaksak kullanırız.
// !nodelist bir dizi değil
// eşlesen ögelerin her birini içeren bir numaralandırma 
// nesnesidir.!


// for ve forEach arasındaki farklar 
// for dongusu:
// break ve continue komutları kullanılabilir
// forEachden daha hızlı
// İ değişkeni döngü dışında değeri geçerlidir.(global)

// forEach dongusu:
// İ değişkeni yerel kapsamlıdır.
// Yalnızca forEach öğesine iletilen fonksiyondan return
// ederek devam etmeyi simüle edebilirsiniz.

// family dizisindeki her elemanı soyadı ile yazdır

family.forEach((fam)=>console.log(fam + " küçük"));

// !!!JavaScript array forEach döngüsü dizinin her elemanı için callback fonksiyonunu çağırır.
// Eğer dizi içerisinde boş elemanlar varsa işlem yapmaz.

// foreach tüm dizi elemanlarını tanımladıgımız callback 
// fonksiyonuna gonderir

let writeUpper=(value,index)=>console.log(index,value.toUpperCase());
family.forEach(writeUpper);

// foreach ile sayı listesindeki sayıların tek mi çift mi olduğunu bulalım.

let number=[1,2,3,4,5,6,21,42,33];

function tekCift(sayi){
    if(sayi %2==0){
        console.log(sayi,"çift bir sayıdır.")
    }
    else{
        console.log(sayi,"tek bir sayıdır.")
    }
}

number.forEach(tekCift);

// objects ile foreach kullanımı

Object.keys(me).forEach((a)=>console.log(a,"-",me[a]));

Object.entries(me).forEach((b)=>console.log(b[0],"&",b[1]));



// switch-case

let meyve="kivi";

switch(meyve){
    case "elma":
        console.log("bu bir elma");
        break;  
        
    case "çilek":
        console.log("bu bir çilek");       
        break;   
        
    case "kivi":
        console.log("bu bir kivi");         
        break;
    default:
        console.log("meyve bulunamadı");
        break;      
}



