import { useNavigate } from 'react-router-dom';


const categories = [
  { name: "Mango Specials", image: '/Mango Bento Cheesecake.png', route: 'mango-specials' },
  { name: "Cakes", image: 'https://via.placeholder.com/150', route: 'cakes' },
  { name: "Brownies", image: 'https://via.placeholder.com/150', route: 'brownies' },
  { name: "Pastries", image: 'https://via.placeholder.com/150', route: 'pastries' },
  { name: "Cookies", image: 'https://via.placeholder.com/150', route: 'cookies' },
];

const CategoryGrid = () => {
  const navigate = useNavigate();

  const handleClick = (route) => {
    navigate(`/category/${route}`);
  };

  return (
    <div className="category-grid">
      {categories.map((category, index) => (
        <div key={index} className="category-card" onClick={() => handleClick(category.route)}>
          <img src={category.image} alt={category.name} />
          <p>{category.name}</p>
        </div>
      ))}
    </div>
  );
};

export default CategoryGrid;
