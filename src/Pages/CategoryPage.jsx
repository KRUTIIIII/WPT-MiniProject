
import { useParams } from 'react-router-dom';

function CategoryPage() {
  const { categoryName } = useParams();

  return (
    <div style={{ padding: '20px' }}>
      <h2>Category: {categoryName.replace(/-/g, ' ')}</h2>
      <p>Items for this category will be displayed here.</p>
    </div>
  );
}

export default CategoryPage;
