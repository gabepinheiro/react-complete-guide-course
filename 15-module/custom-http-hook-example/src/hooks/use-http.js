import { useCallback, useState } from "react"

export const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const sendRequest = useCallback((requestConfig, applyData) => {
    const request = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          requestConfig.url,
          {
            method: requestConfig.method ?? 'GET',
            body: JSON.stringify(requestConfig.body) ?? null,
            headers: requestConfig.headers ?? {},
          }
        );

        if (!response.ok) {
          throw new Error('Request failed!');
        }

        const data = await response.json();

        applyData(data);
      } catch (err) {
        setError(err.message || 'Something went wrong!');
      }
      setIsLoading(false);
    }
    request()
  }, []);

  return {
    isLoading,
    error,
    sendRequest
  }
}
