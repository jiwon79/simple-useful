export function useEnterKeyPress(enterCallback: () => void) {
  const onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      enterCallback();
    }
  };

  return { onKeyPress };
}
