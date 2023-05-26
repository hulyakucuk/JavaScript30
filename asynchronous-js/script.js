/* 
    CALLBACK

    Bir fonksiyonu başka bir fonksiyona parametre olarak kullanmak.

    Callback kullanrak önce hangi fonksiyonun çalışacağını ve sonuç göstereceğini belirliyoruz.
*/

// const printOrder=(order)=>{

//     setTimeout(() => {
//         console.log(order);
//     }, (Math.random()*100));
// }

// const printAll=()=>{
//     printOrder("1")
//     printOrder("2")
//     printOrder("3")
// }
// printAll();

/* fonksiyon her çağırıldığında farklı bir sırada çıktılar gelecek. Bunu  Callbak 
kullanarak istediğimiz sırada yazdırmak istersek: */

// const printOrder=(order,callback)=>{

//     setTimeout(() => {
//         console.log(order);
//         callback();
//     }, (Math.random()*100));
// }
// const printAll=()=>{
//     printOrder("1",()=>{
//         printOrder("2",()=>{
//             printOrder("3",()=>{});
//         });
//     });
// }
// printAll();

/* Callback yapısını kullanarak hangi fonksiyonun önce çalışacağını belirledik fakat fazla callback 
kullanımında bazı problemlerle karşılaşabiliriz. Bunların basında Callback hell gelir.

Callback hell:iç içe cok fazla callback kullanılması
--callbacklerin işlem bitmeden çağrılması,
--işlem bittikten sonra çağrılmaması,
--birden fazla çağrılması vb.

Bu problemlerden dolayı PROMISE kavramı ortaya çıkar...
*/

/* 
    PROMISE

    Bir işlemin başarılı veya başarısız olması durumunda yapılacak olan
    işlemleri belirler.
    
    pending "bekle"
    resolve "başarılı"
    reject "başarısız" 

    *reject durumunda error handling yapılarak başka bir çözüm yoluna gidiliyor.

*/

const printOrder=(order)=>{

    return new Promise((resolve,reject)=>{
        if(true){
            setTimeout(
            () => 
                resolve(),
                console.log(order),
             Math.random * 100
                ) 
        }else{
            reject(`${order} - has problem`)
        }
    });
}
const printAll=()=>{
 printOrder("1")
 .then(()=>printOrder("2"))
 .then(()=>printOrder("3"))
 .catch((e)=>console.log(e))
}
printAll();

/* 
    Callback de karşılaştığımız sorunların önüne geçebilmek için promise ile
    yukarıdaki gibi bir yapı oluşturduk fakat burda da callback hell olayı
    oluşmaya başladı.
    
    Bunun çözümü için de ASYNC - AWAIT yapısı ortaya çıkar..
*/

/* 
    ASYNC-AWAIT

    Bu fonksiyonlar geliştirici ve kodu okuyan insanlar için kodun asenkron olmasına rağmen senkron gözükmesini de sağlar.

   *Bir fonksiyon başarılı olduğunda başka bir fonksiyon çalıştırmak istersek ve o sırada bu işlemi bekletmek istersek bu yapıyı kullanırız.

   *Promise kullanım mantığının aynısıdır sadece daha anlaşılır bir yapıdır.


   *Bir fonksiyonun başına async yazıldığında her zaman promise return eder ve await ile içerde çözümlenir.
   
   *Await sadece async fonksiyonların içinde çalışır.

   *Await promise setlenene kadar işlemi bekletir ve setlendikten sonra sonucu döndürür.
   
   *Promise’te kullanılan then işlemini await halleder.

*/

// SAMPLE 01

function getName(){

    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            try{
                name="Hülya Küçük";

                resolve();
            }catch(error){
                reject(error);
            }
        }, 2000);
    });
}

function printName(){

    setTimeout(() => {
        console.log(name);
    }, 1000);
}

async function start(){
    await getName();
    printName();
}

start();

// SAMPLE 02

async function getData(){
    let fetchUser=await fetch("https://jsonplaceholder.typicode.com/users");

    let data=await fetchUser.json();

    console.log(data);
}
getData();

/* 
    Fonksiyonun başına async yazdığımız için her zaman promise return edecek
    fetch de promise döner.
*/


// (promise ile kullanım)

// fetch('https://jsonplaceholder.typicode.com/users')
// .then(fetchUser => { return fetchUser.json(); })
// .then(data => console.log(data));