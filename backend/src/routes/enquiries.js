import { Router } from 'express';
import pool from '../db.js';

const router = Router();

const SERVICES = [
  'Full project',
  'UI / UX design',
  'Web app development',
  'E-learning / training platform',
  'Requirements & documentation',
  'Testing & quality',
  'Dashboards & reporting',
];
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Checks the form data and returns { data } or { error }.
function validate(body) {
  const name = String(body.name ?? '').trim();
  const company = String(body.company ?? '').trim();
  const email = String(body.email ?? '').trim().toLowerCase();
  const service = String(body.service ?? '').trim();
  const message = String(body.message ?? '').trim();

  if (!name || !email || !message) return { error: 'Please fill in your name, email and project details.' };
  if (name.length > 100) return { error: 'Name must be 100 characters or fewer.' };
  if (company.length > 150) return { error: 'Company must be 150 characters or fewer.' };
  if (email.length > 254 || !EMAIL_PATTERN.test(email)) return { error: 'Please enter a valid email address.' };
  if (!SERVICES.includes(service)) return { error: 'Please choose a service from the list.' };
  if (message.length > 5000) return { error: 'Project details must be 5,000 characters or fewer.' };

  return { data: { name, company: company || null, email, service, message } };
}

// POST /api/enquiries — save a new enquiry from the contact form.
router.post('/', async (req, res) => {
  const { data, error } = validate(req.body || {});
  if (error) return res.status(400).json({ error });

  try {
    const result = await pool.query(
      `INSERT INTO enquiries (name, company, email, service, message)
       VALUES ($1, $2, $3, $4, $5)
       RETURNING id, created_at`,
      [data.name, data.company, data.email, data.service, data.message]
    );
    res.status(201).json({ message: 'Enquiry received.', enquiry: result.rows[0] });
  } catch (err) {
    console.error('Could not save enquiry:', err.message);
    res.status(500).json({ error: 'The server could not save your enquiry. Please try again later.' });
  }
});

// GET /api/enquiries — list saved enquiries (team only, needs the x-admin-key header).
router.get('/', async (req, res) => {
  if (!process.env.ADMIN_KEY || req.get('x-admin-key') !== process.env.ADMIN_KEY) {
    return res.status(401).json({ error: 'Admin key missing or incorrect.' });
  }
  try {
    const result = await pool.query(
      'SELECT id, name, company, email, service, message, status, created_at FROM enquiries ORDER BY created_at DESC'
    );
    res.json({ count: result.rowCount, enquiries: result.rows });
  } catch (err) {
    console.error('Could not load enquiries:', err.message);
    res.status(500).json({ error: 'Could not load enquiries.' });
  }
});

export default router;