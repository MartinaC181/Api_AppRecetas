import { Request, Response } from 'express';
import User from '../models/models';

export const getUsers = async (req: Request, res: Response): Promise<void> => {
    try {
      const examples = await User.find();
      res.json(examples);
    } catch (err) {
      if (err instanceof Error) {
        res.status(500).json({ message: err.message });
      } else {
        res.status(500).json({ message: 'Unknown error' });
      }
    }
  };

