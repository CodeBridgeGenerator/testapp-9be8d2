
import { faker } from "@faker-js/faker";
export default (user,count) => {
    let data = [];
    for (let i = 0; i < count; i++) {
        const fake = {
nama: faker.lorem.sentence(1),
jenis: faker.lorem.sentence(1),
seksyen: faker.lorem.sentence(1),
app1: faker.lorem.sentence(1),
app2: faker.lorem.sentence(1),
app3: faker.lorem.sentence(1),

updatedBy: user._id,
createdBy: user._id
        };
        data = [...data, fake];
    }
    return data;
};
