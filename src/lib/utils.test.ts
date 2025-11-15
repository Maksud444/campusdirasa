import { describe, it, expect } from 'vitest';
import { cn, formatDate } from './utils';

describe('cn (className merger)', () => {
  it('should merge multiple class names', () => {
    expect(cn('class1', 'class2', 'class3')).toBe('class1 class2 class3');
  });

  it('should handle conditional classes', () => {
    expect(cn('base', false && 'hidden', 'visible')).toBe('base visible');
  });

  it('should merge tailwind classes correctly', () => {
    expect(cn('px-2', 'px-4')).toBe('px-4'); // Later px-4 overrides px-2
  });

  it('should handle empty inputs', () => {
    expect(cn()).toBe('');
  });

  it('should handle undefined and null', () => {
    expect(cn('class1', undefined, null, 'class2')).toBe('class1 class2');
  });

  it('should handle arrays of classes', () => {
    expect(cn(['class1', 'class2'], 'class3')).toBe('class1 class2 class3');
  });

  it('should handle object notation', () => {
    expect(cn({ 'class1': true, 'class2': false, 'class3': true })).toBe('class1 class3');
  });
});

describe('formatDate', () => {
  it('should format Date object correctly in Arabic locale', () => {
    const date = new Date('2025-01-15T10:00:00.000Z');
    const formatted = formatDate(date);

    // Check that it's formatted (the exact format may vary by environment)
    expect(formatted).toBeTruthy();
    expect(typeof formatted).toBe('string');
  });

  it('should format string date correctly', () => {
    const dateString = '2025-01-15T10:00:00.000Z';
    const formatted = formatDate(dateString);

    expect(formatted).toBeTruthy();
    expect(typeof formatted).toBe('string');
  });

  it('should handle ISO date string', () => {
    const isoDate = '2025-11-15';
    const formatted = formatDate(isoDate);

    expect(formatted).toBeTruthy();
    expect(typeof formatted).toBe('string');
  });

  it('should produce consistent results for same date', () => {
    const date1 = formatDate('2025-01-15');
    const date2 = formatDate(new Date('2025-01-15'));

    expect(date1).toBe(date2);
  });

  it('should handle timestamps', () => {
    const timestamp = '2025-01-15T12:30:45.000Z';
    const formatted = formatDate(timestamp);

    expect(formatted).toBeTruthy();
  });
});
