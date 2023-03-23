// callback:bir fonksiyonu başka bir fonksiyona parametre olarak verip kullanmaya denir.
// bu şekilde kullanarak senkron bir çalışma elde edebiliriz.

// bir ornekle açıklayacak olursak;

// let printLetter=(letter) =>{
//     setTimeout(
//         ()=>{
//             console.log(letter)
//         },
//         (Math.random() * 100)
//         )
// }

// let printAll=()=>{
//     printLetter("A")
//     printLetter("B")
//     printLetter("C")

// }

// printAll();

// bu fonksiyon çalıştıgında her zaman farklı bir 
// çıktı elde edeceğiz çünkü hiçbir çıktı birbirini
// beklemeyecek ve süresi az olan hangisiyse o ilk çıkacak

// callback kullanarak bunu istediğimiz sırada 
// çıkmasını sağlayabiliriz



// let printAll=()=>{
//     printLetter("A",()=>{
//         printLetter("B",()=>{
//             printLetter("C",()=>{});
//         });
//     });
// }

// promise ile yazalım


let printLetter=(letter) =>{
    return new Promise((resolve,reject) =>{
        if(true){
            setTimeout(
                () =>
                    resolve(),
                    console.log(letter),
                    Math.random() * 100
                    )            
        }else{
            reject(`${letter} - de problem`)
        }
        
    });
}
    

let printAll=()=>{
    printLetter("A")
     .then(()=>printLetter("B"))  
     .then(()=>printLetter("C"))  
    .catch((e)=>console.log(e))
}

printAll();
