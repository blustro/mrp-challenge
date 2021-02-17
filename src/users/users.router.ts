/**
 * Required External Modules and Interfaces
 */

import express, { Request, Response } from 'express';
import * as UserService from './users.service';
import { BaseUser, User } from './user.interface';

/**
 * Router Definition
 */

export const usersRouter = express.Router();

/**
 * Controller Definitions
 */

// GET users

usersRouter.get('/', async (req: Request, res: Response) => {
  const getEmail = req.query.email;

  try {
    const users: User[] = await UserService.findAll();

    if (req.query) {
      if (getEmail) {
        try {
          const matchingEmail = users.filter((user) => user.email === getEmail);
          if (matchingEmail == []) {
            res.status(200).send('user not found');
          }

          res.status(200).send(matchingEmail);
        } catch (e) {
          res.status(500).send(e.message);
        }
      } else if (getEmail == '') {
        res.status(200).send('Query is empty.');
      }
    } else if (req.query != 'email') {
      res.status(200).send('Query not found.');
    }

    res.status(200).send(users);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

// GET users/:id

usersRouter.get('/:id', async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id, 10);

  try {
    const user: User = await UserService.find(id);

    if (user) {
      return res.status(200).send(user);
    }

    res.status(404).send('user not found');
  } catch (e) {
    res.status(500).send(e.message);
  }
});

// POST users

usersRouter.post('/', async (req: Request, res: Response) => {
  try {
    const user: BaseUser = req.body;

    const newuser = await UserService.create(user);

    res.status(201).json(newuser);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

// PUT users/:id

usersRouter.put('/:id', async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id, 10);

  try {
    const userUpdate: User = req.body;

    const existinguser: User = await UserService.find(id);

    if (existinguser) {
      const updateduser = await UserService.update(id, userUpdate);
      return res.status(200).json(updateduser);
    }

    const newuser = await UserService.create(userUpdate);

    res.status(201).json(newuser);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

// DELETE users/:id

usersRouter.delete('/:id', async (req: Request, res: Response) => {
  try {
    const id: number = parseInt(req.params.id, 10);
    await UserService.remove(id);

    res.sendStatus(204);
  } catch (e) {
    res.status(500).send(e.message);
  }
});
