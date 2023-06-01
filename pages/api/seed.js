import db from '@/utilities/db';
import User from '@/models/User';
import data from '@/utilities/data';
import Product from '@/models/Product';
const handler = async (req, res) => {
  await db.connect();
  await User.deleteMany();
  await User.insertMany(data.users);
  await Product.deleteMany();
  await Product.insertMany(data.products);
  await db.disconnect();
  res.send({ massage: 'seeded succesfully' });
};

export default handler;
