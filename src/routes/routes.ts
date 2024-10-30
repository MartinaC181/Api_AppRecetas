import { Router } from 'express';
import { getUsers } from '../controllers/controller';

const router: Router = Router();

router.get('/Users', getUsers);

export default router;
