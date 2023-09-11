import { useState, useCallback } from "react";
import { useDispatch } from "react-redux";

export function useThunk(thunk) {
  const [ isLoading, setIsLoading ] = useState(false);
  const [ error, setError ] = useState(false);
  const dispatch = useDispatch();

  const runThunk = useCallback((argument) => {
    setIsLoading(true)
    dispatch(thunk(argument))
      .unwrap()
      .catch((err) => setError(err))
      .finally(() => setIsLoading(false)); 
  }, [dispatch, thunk]);

  return [ runThunk, isLoading, error ];
};
