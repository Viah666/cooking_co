// var name = 'Viah Y';
// var age = 23;
// var age_difference = 5;
// var is_male = false; 

// var school = {
// 	location:'Vancouver',
// 	size: 2000,
// 	name:'UBC',
// 	course: bookList
// };
// console.log(school.size);

var biology = {
	title: 'Principle of Bio',
	price: 120.3,
	author: 'Kevin',
	isSale: true
}

var chemistry = {
	title: 'Principle of Chem',
	price: 150.7,
	author: 'Peter',
	isSale: false
}

var english = {
	title: 'English 101',
	price: 95.85,
	author: 'Kale',
	isSale: true
}

// console.log(school.size);

// var bookList = [ chemistry, biology ];
// school.size = 3000;
// console.log(school.size);

// bookList.push('MATH157');

// console.log(name);
// console.log(age);
// console.log(age + age_difference);
// console.log(name + ' ' + age);
// console.log(school.location);
// console.log(bookList);
// console.log(bookList[3]);
// console.log(bookList[0].location);

// console.log(school.books);

var sale = true;
var name = 'Viah Y';

if (name == 'Viah Y') {
	console.log(name)
}
// if (school.name == 'UBC') {
// 	console.log(school.books[0].title);
// }

for (var i = 0; i < 10; i++) {
	console.log(i);
}

var ubc = {
	location:'Vancouver',
	name:'UBC',
	books: [biology, chemistry, english]
};
var sfu = {
	location:'Burnaby',
	name:'SFU',
	books: [biology, english]
};
// for (var i = 0; i < 2; i++) {
// 	console.log(school.books[i]);
// }
// for (var i = 0; i < 2; i++) {
// 	console.log(school.books[i].title);
// }

// for (var i = 0; i < school.books.length; i++) {
// 	console.log(school.books[i].title);
// 	var finalPrice = Math.round(school.books[i].price + 10);
// 	if (school.books[i].price < 100) {
// 		console.log('Clearance!');
// 	}
// 	console.log('$' + finalPrice);
// 	console.log( Math.round(Math.random() * 100));
// }

function displayBooks(s) {
	console.log('============' + s.name + '============')
	for (var i = 0; i < s.books.length; i++) {
	console.log(s.books[i].title);
	s.books[i].price = Number(prompt('Please enter your price for ' + s.books[i].title));
	var finalPrice = Math.round(s.books[i].price + 10);
	if (s.books[i].price < 100) {
		console.log('Clearance!');
	}
	console.log('$' + finalPrice);
	// console.log( Math.round(Math.random() * 100));
	}
}

displayBooks(sfu);
displayBooks(ubc);

// function powerBall() {
// 	console.log('************' + ' 抽奖 ' + '************')
// 	var amount = Math.random()*100;
// 	if (amount < 50) {
// 		console.log('Better Luck Next Time.');
// 	}
// 	else {
// 		console.log('$1.3 Billion is Urs!');
// 	}
// }
// powerBall();

// var option = confirm('Pay now?');
// // alert('Are you sure?');
// if (option == true) {
// 	alert('Thanks for your order!');
// } else {
// 	alert('Please come back later.');}

// // var bookPrice = Number(prompt('Please enter your price:'));
// console.log(bookPrice);