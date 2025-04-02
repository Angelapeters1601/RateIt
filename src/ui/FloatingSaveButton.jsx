import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { BookmarkIcon } from '@heroicons/react/24/solid';

export default function FloatingSaveButton() {
  const { items } = useSelector(state => state.savedReviews);

  return (
    <Link 
      to="/saved"
      className="fixed bottom-6 right-6 bg-amber-500 text-white p-3 rounded-full shadow-lg hover:bg-amber-600 transition-all transform hover:scale-105 group"
    >
      <div className="relative">
        <BookmarkIcon className="w-6 h-6" />
        {items.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
            {items.length}
          </span>
        )}
      </div>
    </Link>
  );
}