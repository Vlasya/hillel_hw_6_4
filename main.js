
// Task:

// 1. Create a new array using forEach that has all usernames with a "!" to each of the usernames. Example: ["john!", "becky!", ...].

// 2. Create another new array using map that has all usernames with a "?" to each of the usernames. Example: ["john?", "becky?", ...].

// 3. Filter the original array of users to only include users who are on team: red.

// 4. In filtered array find out the total score of all filtered users and print all user's data into table with <tfoot>Final summ</tfoot> tag.


var users = [
	
	["john","red",5,["ball", "book", "pen"]],
	["becky","blue",10,["tape", "backpack", "pen"]],
	["susy","red",55,["ball", "eraser", "pen"]],
	["tyson","green",1,["book", "pen"]]
];

// Новый массив через forEach с подставлением !
let usersA=[]
users.forEach(function(item){
	let el=[...item];
	el[0]=`${el[0]}!`;
	usersA.push(el)
	// я как обычно не поняла ТЗ)) если нужно получить массив ТОЛЬКО имен с !,то раскомментируй строку ниже,а выше закомменть)
	// usersA.push(el[0])
})
console.log('--------------------------------------1------------------------------------------------');
console.log('users-старый массив: ', users);
console.log('usersA-Новый массив: ', usersA);



// Новый массив через map . И подставляем ?

let usersB=[];
users.map(function(item){
	el=[...item]
	el[0]=`${el[0]}?`
	return usersB.push(el)
	// Аналогично)))
	// return usersB.push(el[0])
})
console.log('---------------------------------------2-----------------------------------------------');
console.log('users-старый: ', users);
console.log('usersB -новый: ', usersB);

// Фильтруем массив по красненьким и суммируем их баллы
let finalSumm=0;
let forWrite=''
users.filter(item =>item[1]==='red')
		.forEach(function(item){
			finalSumm+=item[2]
			forWrite+=`<tr><td>${item[0]}<td><td>${item[1]}<td><td>${item[2]}<td><td>${item[3]}</tr>`
		})
document.write(`<table> ${forWrite}<tfoot><tr><td>Final summ ${finalSumm}</tr></td></tfoot></table>`)
console.log('<<<-----------<<<<<<<<<<------------3 и 4 задание--------------------- ');
