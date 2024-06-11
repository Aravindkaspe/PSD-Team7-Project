
import mongoose from 'mongoose';
import ProductUserModel from '../backend/models/ProductUser'; 
import ContactModel from '../backend/models/Contact'; 
import QuoteModel from '../backend/models/Quote'; 

const mockContact = {
  email: 'contact@gmail.com',
  name: 'John Doe',
  phoneNumber: '123-456-7890',
};

const mockProductUser = {
  email: 'productuser@gmail.com',
};

const mockQuote = {
  customerName: 'Jane Smith',
  service: 'Web Development',
  totalBudget: 1500,
  itemDescription: 'Website redesign',
  location: 'New York',
};

jest.mock('../backend/models/Contact', () => ({
  findOne: jest.fn(() => Promise.resolve(mockContact)),
}));

jest.mock('../backend/models/ProductUser', () => ({
  findOne: jest.fn(() => Promise.resolve(mockProductUser)),
}));

jest.mock('../backend/models/Quote', () => ({
  findOne: jest.fn(() => Promise.resolve(mockQuote)),
}));

describe('load email data from db', () => {
  beforeAll(async () => {
    const dbURI = 'mongodb+srv://cgundu1:8IoxAEGU0uT8row3@cluster0.hqtcl60.mongodb.net/projectDB'; 
    await mongoose.connect(dbURI);
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  test('loaded customer email address', async () => {
    const contact = await ContactModel.findOne(); 
    expect(contact).toBeTruthy();
    expect(contact.email).toMatch(/.+@.+\..+/); 
  });

  test('loaded productuser email address', async () => {
    const productUser = await ProductUserModel.findOne(); 
    expect(productUser).toBeTruthy();
    expect(productUser.email).toMatch(/.+@.+\..+/); 
  });

  test('loaded customer name and phone number', async () => {
    const contact = await ContactModel.findOne(); 
    expect(contact).toBeTruthy();
    expect(contact.name).toBe('John Doe'); 
    expect(contact.phoneNumber).toBe('123-456-7890'); 
  });

  test('loaded quote details', async () => {
    const quote = await QuoteModel.findOne(); 
    expect(quote).toBeTruthy();
    expect(quote.customerName).toBe('Jane Smith'); 
    expect(quote.service).toBe('Web Development'); 
    expect(quote.totalBudget).toBe(1500);
    expect(quote.itemDescription).toBe('Website redesign'); 
    expect(quote.location).toBe('New York');
  });
});
