import users from './users.js';

// 1 //
const getUserNames = users.map(user => user.name);

console.log(getUserNames);

// 2 //
const getUsersWithEyeColor = (users, color) =>
  users.filter(user => user.eyeColor === color);

console.log(getUsersWithEyeColor(users, 'blue'));

// 3 //
const getUsersWithGender = (users, gender) =>
  users.filter(user => user.gender === gender).map(user => user.name);

console.log(getUsersWithGender(users, 'male'));

// 4 //
const getInactiveUsers = users.filter(user => !user.isActive);

console.table(getInactiveUsers);

// 5 //
const getUserWithEmail = (users, email) =>
  users.find(user => user.email === email);

console.table(getUserWithEmail(users, 'shereeanthony@kog.com'));
console.table(getUserWithEmail(users, 'elmahead@omatom.com'));

// 6 //
const getUsersWithAge = (users, min, max) =>
  users.filter(user => user.age > min && user.age < max);

console.table(getUsersWithAge(users, 20, 30));
console.table(getUsersWithAge(users, 30, 40));

// 7 //
const calculateTotalBalance = users =>
  users.reduce((totalBalance, user) => totalBalance + user.balance, 0);

console.log(calculateTotalBalance(users));

// 8 //
const getUsersWithFriend = (users, friendName) =>
  users
    .filter(user => user.friends.includes(friendName))
    .map(user => user.name);

console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]

// 9 //
const getNamesSortedByFriendsCount = users =>
  users
    .sort((a, b) => a.friends.length - b.friends.length)
    .map(user => user.name);

console.table(getNamesSortedByFriendsCount(users));

// 10 //
const getSortedUniqueSkills = users =>
  users
    .reduce((allSkills, user) => {
      allSkills.push(...user.skills);
      return allSkills;
    }, [])
    .reduce((unique, skill) => {
      return unique.includes(skill) ? unique : [...unique, skill];
    }, [])
    .sort();

console.log(getSortedUniqueSkills(users));
