-- Create a function to auto-assign admin role to the first user
CREATE OR REPLACE FUNCTION public.assign_first_admin()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  -- Check if there are no admin users yet
  IF NOT EXISTS (SELECT 1 FROM public.user_roles WHERE role = 'admin') THEN
    INSERT INTO public.user_roles (user_id, role)
    VALUES (NEW.id, 'admin');
  END IF;
  RETURN NEW;
END;
$$;

-- Create trigger to run after user signup
CREATE TRIGGER first_user_becomes_admin
AFTER INSERT ON auth.users
FOR EACH ROW
EXECUTE FUNCTION public.assign_first_admin();