import express from 'express';
import {
  updateUserById,
  deleteUserById,
  getUserById,
  getAllUsers,
} from '../controllers/user.js';
import { verifyAdmin, verifyToken, verifyUser } from '../utils/verifyToken.js';

const router = express.Router();

// router.get('/checkauthetication', verifyToken, (req, res, next) => {
//   res.send('You are loged in');
// });
// router.get('/checkuser/:id', verifyUser, (req, res, next) => {
//   res.send('You are loged in and del your account');
// });

// router.get('/checkadmin/:id', verifyAdmin, (req, res, next) => {
//   res.send('You are admin loged in and del your account');
// });
//update
router.put('/:id', verifyUser, updateUserById);
//delete

router.delete('/:id', verifyUser, deleteUserById);
//get
router.get('/:id', verifyUser, getUserById);
//getAll
router.get('/', verifyToken, getAllUsers);
export default router;
