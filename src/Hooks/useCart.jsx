import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useAuth from "./useAuth";

const useCart = () => {
  const { user } = useAuth();
  const { data: cart = [], refetch: cartRefetch } = useQuery({
    queryKey: ["cartData"],
    queryFn: async () => {
      const res = await axios.get(
        `https://e-life-ecommerce-server.vercel.app/cart/${user?.email}`
      );
      return res.data;
    },
  });
  return [cart, cartRefetch];
};

export default useCart;
