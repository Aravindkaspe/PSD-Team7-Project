const mongoose = {
    connect: jest.fn(),
    model: jest.fn().mockReturnValue({
      find: jest.fn().mockResolvedValue([{ email: 'test@example.com', name: 'Test User', notify_orders: true }]),
      save: jest.fn().mockResolvedValue({}),
    }),
  };
  
  export default mongoose;
  