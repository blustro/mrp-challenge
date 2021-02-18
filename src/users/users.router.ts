/**
 * Required External Modules and Interfaces
 */

import express, { Request, Response } from 'express';
import * as UserService from './users.service';
import { BaseUser, User } from './user.interface';
import { Users } from './users.interface';

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
  const users: User[] = await UserService.findAll();

  function compare(a: User, b: User) {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  }

  try {
    if (req.query) {
      for (const key in req.query) {
        const orderByName = req.query.orderBy;
        const sortDirection = req.query.sortDirection;
        if (orderByName == 'name' && sortDirection == 'asc') {
          res.send(users.sort(compare));
        }
        if (orderByName == 'name' && sortDirection == 'desc') {
          res.send(users.sort(compare).reverse());
        } else {
          res.send('Query param not valid');
        }
      }

      if (getEmail) {
        const matchingEmail = users.filter((user) => user.email === getEmail);

        res.status(200).send(matchingEmail);
      } else if (getEmail == '') {
        res.status(200).send('Query is empty.');
      }
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
