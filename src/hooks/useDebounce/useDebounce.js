import { useState, useEffect } from 'react';

function useDebounce(value, delay = 100) {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
  return debouncedValue;
}

export default useDebounce;

/*** Usage example:

 const SearchInput = () => {
   const [searchTerm, setSearchTerm] = useState('');
   const [isSearching, setIsSearching] = useState(false);
   const [results, setResults] = useState([]);
   const debouncedSearchTerm = useDebounce(searchTerm, 500);

   useEffect(
       () => {
         if (debouncedSearchTerm) {
           setIsSearching(true);
           searchCharactersSomewhere(debouncedSearchTerm).then(res => {
             setIsSearching(false);
             setResults(res);
           });
         } else {
           setResults([]);
         }
       },
       [debouncedSearchTerm]  // Only call effect if debounced search term changes
     );
   return (
     <div>
        <input
         placeholder="Search Marvel Comics"
         onChange={e => setSearchTerm(e.target.value)}
       />
       {isSearching && <div>Searching ...</div>}
       {results && results.map(r => <marquee>{r}</marquee>)}
     </div>
   )
 }

 ***/