import { Container } from 'inversify';
import { useMemo } from 'react';

export const useDependencyInjection = <T>(container: Container, identifier: symbol): T => {
  return useMemo(() => container.get<T>(identifier), [container, identifier]);
};