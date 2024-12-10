import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useAuth from "./useAuth";

const useWishlist = () => {
  const { user } = useAuth();
  const { data: wishlist = [], refetch: wishlistRefetch } = useQuery({
    queryKey: ["wishlistData"],
    queryFn: async () => {
      const res = await axios.get(
        `http://localhost:5000/wishlist/${user?.email}`
      );
      return res.data;
    },
  });
  return [wishlist, wishlistRefetch];
};

export default useWishlist;
