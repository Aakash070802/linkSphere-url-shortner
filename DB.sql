SELECT * FROM users;
SELECT * FROM urls;
SELECT * FROM analytics;
SELECT * FROM sessions;

DELETE FROM analytics;
DELETE FROM sessions;
DELETE FROM urls;
DELETE FROM users;

SELECT
  id,
  is_valid,
  created_at
FROM sessions
ORDER BY created_at DESC;

UPDATE users SET is_active = true;