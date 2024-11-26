

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
    <div className="px-4 md:px-12 lg:px-24 my-10 2xl:my-14">
      <div className="flex gap-3 mb-6">
        <span className="border-[4px] rounded-full border-black"></span>
        <h1 className="text-xl font-bold"> Categories</h1>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {categories.map((categorie, idx) => (
          <div
            key={idx}
            className="flex hover:scale-110 ease-in-out duration-300 bg-white rounded-lg shadow-lg"
          >
            <img src={categorie.image} alt="" className="bg-blue-200 p-4 w-[30%] lg:max-h-24 2xl:max-h-36 rounded-s-lg bg-cover"/>

            <div className="w-2/3 p-4 md:p-4">
              <h1 className="text-xl font-semibold text-gray-800 dark:text-white">
                {categorie.product_categorie}
              </h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
