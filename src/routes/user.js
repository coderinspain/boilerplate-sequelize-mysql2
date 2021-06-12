import { Router } from 'express';
const user = require('../controllers/user.controller');
const router = Router();


// Routes to get user
router.get('/users', user.getAllusers);
router.get('/:id', user.getUser);
router.post('/create', user.createUser);
router.post('/update/:id', user.updateUser);
router.delete('/delete/:id', user.deleteUser);


export default router;