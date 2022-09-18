import { useEffect } from 'react';

function useTitle(title = null) {
  useEffect(() => {
    const newTitle = `${title} | Astronote!`;

    if (document.title !== newTitle && title !== null) {
      document.title = newTitle;
    }
  }, [title]);
}

export default useTitle;
