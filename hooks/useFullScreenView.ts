import { useEffect } from "react";

export const useFullScreenView = (options = { allowOverflow: true }) => {
  useEffect(() => {
    const toggleClass = () => {
      document.getElementsByTagName('html')[0].classList.toggle('h-full')
      document.body.classList.toggle('h-full')

      !options.allowOverflow && document.body.classList.toggle('overflow-hidden')
    }

    toggleClass()

    return toggleClass;
  }, [])
}
