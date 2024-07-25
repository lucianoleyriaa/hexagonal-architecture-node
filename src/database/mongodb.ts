import mongoose from 'mongoose';

interface Options {
  connectionUrl: string;
}

export class MongoDB {

  static async connect( options: Options ) {
    try {
      await mongoose.connect(options.connectionUrl);
      console.log('Connection to mongodb successfully!')
    } catch (error) {
      console.log('There was a problem trying to connect to mongo!');
      throw error;
    }
  }

}