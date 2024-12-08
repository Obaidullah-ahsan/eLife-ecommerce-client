import { Link } from "react-router-dom";

const categories = [
  {
    product_categorie: "All",
    product_route: "products",
    image:
      "https://res.cloudinary.com/dkel6zerr/image/upload/v1732994459/all_l2rell.png",
  },
  {
    product_categorie: "Headphones",
    product_route: "headphones",
    image:
      "https://res.cloudinary.com/dkel6zerr/image/upload/v1732994459/headphone_ay5yvl.png",
  },
  {
    product_categorie: "Smartwatch",
    product_route: "smartwatch",
    image:
      "https://res.cloudinary.com/dkel6zerr/image/upload/v1732994460/watch_v7ua5l.png",
  },
  {
    product_categorie: "Phone",
    product_route: "phone",
    image:
      "https://res.cloudinary.com/dkel6zerr/image/upload/v1732994462/phone_qscay2.png",
  },
  {
    product_categorie: "Tablet",
    product_route: "tablet",
    image:
      "https://res.cloudinary.com/dkel6zerr/image/upload/v1732994461/ipad_atjnqz.png",
  },
  {
    product_categorie: "Laptop",
    product_route: "laptop",
    image:
      "https://res.cloudinary.com/dkel6zerr/image/upload/v1732994458/laptop_ozq4ea.png",
  },
];

const Categories = () => {
  return (
    <div className="px-4 md:px-12 lg:px-24 my-10 2xl:my-14">
      <div className="flex gap-3 mb-6">
        <span className="border-[4px] rounded-full border-black"></span>
        <h1 className="text-xl font-bold">Featured Categories</h1>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
        {categories.map((categorie, idx) => (
          <Link
            to={`/${categorie.product_route}`}
            key={idx}
            className="flex hover:scale-110 ease-in-out duration-300 bg-white"
          >
            <img
              src={categorie.image}
              alt=""
              className="bg-blue-200 p-4 w-[30%] 2xl:w-[40%] lg:max-h-24 2xl:max-h-36 bg-cover"
            />

            <div className="w-[70%] 2xl:w-[60%] p-4 md:p-4">
              <h1 className="text-base md:text-xl font-semibold text-gray-800 dark:text-white">
                {categorie.product_categorie}
              </h1>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
