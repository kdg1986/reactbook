import { useState, useEffect, useCallback } from 'react';

export default function usePromise(promiseCreator, deps) {
  // 로딩중 / 완료 / 실패에 대한 상태 관리
  const [loading, setLoading] = useState(false);
  const [resolved, setResolved] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
      /* console.log('effect');
      console.log(deps);
      return () => {
        console.log('clean');
        console.log(deps);
      } */
    const process = async () => {
        console.log('process')
      setLoading(true);
      try {
        const resolved = await promiseCreator();
        console.log('complete');
        setResolved(resolved);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };
    console.log('useEffect')
    process(); 
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return [loading, resolved, error];
}