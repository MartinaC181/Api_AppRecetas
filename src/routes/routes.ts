import { Router } from 'express';
import userRouter from '../api/users/routes';
import recipeRouter from '../api/recipes/routes';

const router= Router();

router.use('/user', userRouter);
router.use('/recipe', recipeRouter);

export default router;
