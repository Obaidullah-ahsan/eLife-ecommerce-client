import { Link } from "react-router-dom";

const categories = [
  {
    product_categorie: "All",
    product_route: "all",
    image: "https://i.postimg.cc/jqBKLQYr/all.png",
  },
  {
    product_categorie: "Headphones",
    product_route: "headphones",
    image: "https://i.postimg.cc/7Zx37zSK/headphone.png",
  },
  {
    product_categorie: "Smartwatch",
    product_route: "smartwatch",
    image: "https://i.postimg.cc/qvb335J7/watch.png",
  },
  {
    product_categorie: "Phone",
    product_route: "phone",
    image: "https://i.postimg.cc/VL0TT3hx/03.png",
  },
  {
    product_categorie: "Tablet",
    product_route: "tablet",
    image: "https://i.postimg.cc/brxnSYrX/ipad.png",
  },
  {
    product_categorie: "Laptop",
    product_route: "laptop",
    image: "https://i.postimg.cc/15pxXkKp/laptop.png",
  },
];

const Categories = () => {
  return (
    <div className="px-4 md:px-12 lg:px-24 py-10">
      <div className="flex gap-3">
        <span className="border-[4px] rounded-full border-black"></span>
        <h1 className="text-xl font-bold"> Categories</h1>
      </div>
      <div>
        {
            categories.map((categorie,idx)=> <Link to={`/${categorie.product_route}`} key={idx} className="capitalize">{categorie.product_categorie}</Link>)
        }
      </div>
    </div>
  );
};

export default Categories;
