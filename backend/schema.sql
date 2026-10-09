-- Team Lightning McQueen website: database schema
-- Stores enquiries sent from the website's contact form.

CREATE TABLE IF NOT EXISTS enquiries (
  id          SERIAL PRIMARY KEY,
  name        VARCHAR(100)  NOT NULL,
  company     VARCHAR(150),
  email       VARCHAR(254)  NOT NULL,
  service     VARCHAR(100)  NOT NULL,
  message     TEXT          NOT NULL,
  status      VARCHAR(20)   NOT NULL DEFAULT 'new',
  created_at  TIMESTAMPTZ   NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_enquiries_created_at ON enquiries (created_at DESC);