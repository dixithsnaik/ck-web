import { useState, useEffect, useCallback } from "react";

type ApiFn<T> = () => Promise<T>;

interface UseApiQueryResult<T> {
  data: T | null;
  error: string | null;
  loading: boolean;
  refetch: () => void;
}

export function useApiQuery<T>(apiFn: ApiFn<T>): UseApiQueryResult<T> {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchData = useCallback(() => {
    setLoading(true);
    setError(null);

    apiFn()
      .then((res) => {
        setData(res);
      })
      .catch((err) => {
        setError(err.message ?? "Something went wrong");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [apiFn]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, error, loading, refetch: fetchData };
}
