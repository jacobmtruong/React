const {faker} = require('@faker-js/faker');

const express = require('express');
const app = express();
const PORT = 4000;


// create new random User Object
const createUser = () => {
    const newUser = {
        password: faker.internet.password(),
        email: faker.internet.email(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        phone: faker.phone.number(),
        favoriteColor: faker.color.rgb(),
        ID: faker.datatype.number(100)
    }
    return newUser;
}


const newUser1 = createUser();
console.log(newUser1);


// create new Company Object

const createCompany = () => {
    const fakeCompany = {
        ID: faker.datatype.number(100),
        name: faker.company.bs(),
        address: {
            street: faker.address.street(),
            city: faker.address.city(),
            state: faker.address.state(),
            zip: faker.random.numeric(5),
            country: faker.address.country(),
        }
    }
    return fakeCompany;
}

const newCompany = createCompany();
console.log(newCompany);


const newUserCompany = [newUser1, {company: newCompany}]
console.log(newUserCompany);

// ===== Routes =====

// go to new User
app.get ("/api/users/new", (req, res) => {
    res.json (newUser1);
})

app.get ("/api/companies/new", (req, res) => {
    res.json (newCompany);
})

app.get ("/api/user/company", (req, res) => {
    res.json (newUserCompany);
})

app.listen (PORT, () => {
    console.log(`Listening on port ${PORT}`);
});