// Task 
// 3 dene function quracaqsiz bir function usersleri adlandiran
// function olacaq yeni dinamik olaraq usernameler vereceksiz
// o functionda localeStoragede onu users keyine value olaraq
// Array seklinde elave edecek
// 2ci function dinamik olaraq username qebul edib localeStorageden
// hemin usernameni silecek
// 3 cu function ise umumi localestoragedeki users arrayini pars
// olunmus halini logda daima gosderecek



//  function addUser(username) {
//     let names = JSON.parse(localStorage.getItem('users')) || [];
//      if (names.includes(username)) {
//          console.error(`User ${username} already exists`)
//      }else {
//          names.push(username);
//          localStorage.setItem('users', JSON.stringify(names));
//          console.log(`User ${username} added`);
//      }
//  }

//  addUser("Rovshan")
//  addUser("A")



// const deleteFromStorage = (username) => {
//     let names = JSON.parse(localStorage.getItem('users')) || [];
//     try {
//         let index = names.indexOf(username);
//         if (index >= 0) {
//             names.splice(index, 1);
//             localStorage.setItem("users", JSON.stringify(names));
//             console.log(`User ${username} deleted`);
//         } else {
//             throw new Error(`Error: Username "${username}" not found in the array.`)
//         }
//     } catch (e) {
//         console.error(e.message);

//     }
// }

// deleteFromStorage("A")
// deleteFromStorage("Rovshan")



// const showUser = () => {
//     console.log(JSON.parse(localStorage.getItem('users')));
// }
// showUser();