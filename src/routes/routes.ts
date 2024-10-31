import { Router } from 'express';
import userRouter from '../api/users/routes';

const router: Router = Router();

router.use('/Users', userRouter);
router.use('/Recipes', recipeRouter);

export default router;
