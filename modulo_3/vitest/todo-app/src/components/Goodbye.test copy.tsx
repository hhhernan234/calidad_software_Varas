import { describe, it, expect } from 'vitest';
import { Goodbye } from './Goodbye';

describe('Goodbye', () => {
  // El test mínimo: el componente existe y es importable.
  it('debería estar definido', () => {
    expect(Goodbye).toBeDefined();
  });
});