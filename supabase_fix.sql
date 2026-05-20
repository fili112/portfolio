-- Run this in Supabase SQL Editor to fix mark as read/delete permissions

-- Drop existing policies
DROP POLICY IF EXISTS "Only owner can read messages" ON messages;
DROP POLICY IF EXISTS "Only owner can update messages" ON messages;
DROP POLICY IF EXISTS "Only owner can delete messages" ON messages;
DROP POLICY IF EXISTS "Anyone can send a message" ON messages;

-- Recreate all policies correctly
CREATE POLICY "Anyone can insert messages"
  ON messages FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated can read messages"
  ON messages FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated can update messages"
  ON messages FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated can delete messages"
  ON messages FOR DELETE
  TO authenticated
  USING (true);
