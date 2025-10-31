import { useQuery } from "@tanstack/react-query";
import { getCurentUser } from "../utils/apiPaths";

export const AUTH = "auth";

export const useAuth = (opts = {}) => {
  const { data: user, ...rest } = useQuery({
    queryKey: [AUTH],
    queryFn: getCurentUser,
    staleTime: Infinity,
    ...opts,
  });
  return { user, ...rest };
};

export default useAuth;
