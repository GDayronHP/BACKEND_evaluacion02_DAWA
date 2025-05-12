const express = require('express');
const router = express.Router();
const auth = require('../controllers/authController');
const { verifyToken, requireRole } = require('../middleware/authMiddleware');

router.post('/register', auth.register);
router.post('/login', auth.login);

// Rutas protegidas
router.get('/admin', verifyToken, requireRole('admin'), (req, res) => {
  res.send('Acceso concedido a admin');
});

router.get('/moderador', verifyToken, requireRole('admin', 'moderador'), (req, res) => {
  res.send('Acceso concedido a moderador');
});

module.exports = router;
