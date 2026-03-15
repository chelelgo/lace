
-- Table to store admin-assigned product-to-category mappings
CREATE TABLE public.product_categories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  product_handle text NOT NULL,
  category_id text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (product_handle, category_id)
);

-- Enable RLS
ALTER TABLE public.product_categories ENABLE ROW LEVEL SECURITY;

-- Everyone can read (needed for shop filtering)
CREATE POLICY "Anyone can read product categories"
ON public.product_categories
AS PERMISSIVE
FOR SELECT
TO anon, authenticated
USING (true);

-- Only admins can manage
CREATE POLICY "Admins can manage product categories"
ON public.product_categories
AS PERMISSIVE
FOR ALL
TO authenticated
USING (public.has_role(auth.uid(), 'admin'))
WITH CHECK (public.has_role(auth.uid(), 'admin'));
