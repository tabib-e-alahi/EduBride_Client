import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const useCurrentUser = () => {
  const {user} = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();

  const {
    data: current_user = {},
    isLoading,
    isPending,
    refetch,
  } = useQuery({
    queryKey: ["current_user", user?.email],
    queryFn: async () => {
      const res = await axiosPublic.get(`/users/${user?.email}`); 
      return res.data;
    },
  });

  return [current_user, isLoading, refetch,isPending];
};

export default useCurrentUser;
