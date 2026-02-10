/* eslint-disable react-hooks/rules-of-hooks */
import useDarkModeImpl from '@fisch0920/use-dark-mode'

export function useDarkMode() {
  if (typeof window === 'undefined') {
    return {
      isDarkMode: false,
      toggleDarkMode: () => {}
    }
  }

  const darkMode = useDarkModeImpl(false, { classNameDark: 'dark-mode' })

  return {
    isDarkMode: darkMode.value,
    toggleDarkMode: darkMode.toggle
  }
}
